using System.Threading;
using System.Threading.Tasks;
using finance.model;
using finance.Repository;
using Finance.model;
using Finance.Services;

namespace finance.Services
{
    public class UserService
    {
        public UserService(UserRepository UserRepository, WalletService walletService)
        {
            this.UserRepository = UserRepository;
            this.WalletService = walletService;
        }

        public UserRepository UserRepository { get; }
        public WalletService WalletService { get; }

        public async Task<dynamic> Authenticate(User model)
        {
            var user = await UserRepository.GetByEmailAndPasswordAsync(model.Email, model.Password);

            if (user == null) return user;

            var token = TokenService.GenerateToken(user);
            user.Password = "";
            return new
            {
                user = user.Email,
                token,
                seconds_to_expire = 86400
            };
        }

        internal async Task<User> SignUpAsync(User user)
        {
            if (string.IsNullOrWhiteSpace(user.Email) || string.IsNullOrWhiteSpace(user.Password)) return null;
            if (string.IsNullOrWhiteSpace(user.Role)) user.Role = RolesEnum.User.ToString();

            if (UserRepository.EmailExist(user.Email)) throw new System.ArgumentException("already exists");

            var newUser = await UserRepository.CreateAsync(user);
            var login = await Authenticate(newUser);

            var wallet = new Wallet
            {
                Name = "default",
                Shared = false,
            };

            void CreateDefaultWallet() =>  WalletService.CreateWallet(wallet, user.Email).ConfigureAwait(false); 
            new Thread(CreateDefaultWallet).Start();

            newUser.Token = login.token;
            return newUser;
        }
    }
}
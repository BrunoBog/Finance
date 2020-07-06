using System.Threading.Tasks;
using Finance.model;
using Finance.Repository;

namespace Finance.Services
{
    public class WalletService
    {
        public WalletService(WalletRepository wr)
        {
            WalletRepository = wr;
        }

        public WalletRepository WalletRepository { get; }

        public async  Task<Wallet> CreateWallet(Wallet w, string username ) {
            w.UserID = username;
            return await WalletRepository.CreateAsync(w);
        } 
    }
}
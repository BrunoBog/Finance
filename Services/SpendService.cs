using System.Threading.Tasks;
using finance.model;
using finance.Repository;
using Finance.Repository;

namespace Finance.Services
{
    public class SpendService
    {
        private readonly SpendRepository Repository;

        public WalletRepository WalletRepository { get; }

        public SpendService(SpendRepository sr, WalletRepository wr)
        {
            this.Repository = sr;
            this.WalletRepository = wr;
        }

        public async Task<Spend> AddSpend(Spend spend, string userID){
            if (string.IsNullOrEmpty(spend.WalletId)) spend.WalletId = WalletRepository.GetByName("default", userID)?.Id;
            return await Repository.CreateAsync(spend);
        }
    }
}
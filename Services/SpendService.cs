using System;
using System.Collections.Generic;
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
            if (string.IsNullOrEmpty(spend.WalletId.ToString())) spend.WalletId = WalletRepository.GetByName("default", userID).Id;
            if (spend.Date == null ) throw new Exception("Spend need a date");
            return await Repository.CreateAsync(spend);
        }

        internal List<Spend> GetAll() => Repository.Get();
        

        internal List<Spend> AddSpends(List<Spend> spends, string name)
        {
            var spendList = new List<Spend>();
            spends.ForEach( async s => spendList.Add(await AddSpend(s, name)));
            return spendList;
        }

        internal dynamic Update(Spend spend) => Repository.Update(spend);
        
    }
}
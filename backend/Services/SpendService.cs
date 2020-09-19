using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using finance.model;
using finance.Repository;
using Finance.model;
using Finance.Repository;
using Microsoft.AspNetCore.Mvc;

namespace Finance.Services
{
    public class SpendService
    {
        private readonly SpendRepository Repository;

        public WalletService WalletService { get; }

        public SpendService(SpendRepository sr, WalletService wr)
        {
            this.Repository = sr;
            this.WalletService = wr;
        }

        public async Task<Spend> AddSpend(Spend spend, string userID)
        {
            if (string.IsNullOrEmpty(spend.WalletId.ToString())) spend.WalletId = WalletService.GetByName("default", userID).Id;
            if (spend.Date == null) throw new Exception("Spend need a date");
            return await Repository.CreateAsync(spend);
        }

        public List<Spend> GetAll() => Repository.Get();

        internal List<Spend> AddSpends(List<Spend> spends, string name)
        {
            var spendList = new List<Spend>();
            spends.ForEach(async s => spendList.Add(await AddSpend(s, name)));
            return spendList;
        }

        internal dynamic Update(Spend spend) => Repository.Update(spend);

        internal SummaryDTO GetSummaryByUserID(string username, int monthCount = 0)
        {
            var spends = GetSpendsFromUserWallet(username, monthCount);
            return SummarySpends(spends);
        }

        internal List<Spend> GetSpendsOnMonth(int monthNumber, int yearNumber) =>
            Repository.GetSpendsBetweenDates(new DateTime(yearNumber, monthNumber, 1), new DateTime(yearNumber, monthNumber + 1, 1).AddSeconds(-1)).OrderByDescending(s => s.Date).ToList();


        private SummaryDTO SummarySpends(List<Spend> spends)
        {
            var weekSpends = spends.GroupBy(s => s.Date.WeekNumber())
                .Select(
                    g => new WeekSummary
                    {
                        WeekNumber = g.Key,
                        Total = g.Sum(s => s.Value)
                    });

            if (spends.Count == 0) return new SummaryDTO { MonthTotal = 0, Summary = new List<WeekSummary>(), Title = "Don't have any spends" };

            return new SummaryDTO
            {

                Title = $"starting in {spends.OrderBy(s => s.Date).First().Date:dd/MM/yyyy} on week {spends.OrderBy(s => s.Date).First().Date.WeekNumber()}",
                Summary = weekSpends.OrderByDescending(s => s.WeekNumber).ToList(),
                MonthTotal = weekSpends.Sum(w => w.Total)
            };



        }

        private List<Spend> GetSpendsFromUserWallet(string username, int monthCount = 0)
        {
            var spends = new List<Spend>();
            var dayinit = new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1).AddMonths(monthCount * 1).FristDayOfWeek();

            WalletService.GetWalletByUser(username)
            .ForEach(w =>
               spends.AddRange(Repository.GetSpendsInWallet(wallet_id: w.Id.Value, start: dayinit, end: DateTime.Now.AddMonths(monthCount * 1)))
            );
            return spends;
        }
    }
}
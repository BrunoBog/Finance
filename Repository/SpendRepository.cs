using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using finance.model;
using Finance.Repository;
using Finance.Services;
using MongoDB.Bson;
using MongoDB.Driver;

namespace finance.Repository
{
    public class SpendRepository : IBaseRepository<Spend>
    {
        public SpendRepository(IDatabaseSettings settings, WalletService walletService)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            WalletService = walletService;
            Collection = database.GetCollection<Spend>(nameof(Spend));
        }
        public IMongoCollection<Spend> Collection { get; }
        public WalletService WalletService { get; }
        public async Task<Spend> CreateAsync(Spend item)
        {
            if (item.Id == null)
                item.Id = ObjectId.GenerateNewId();

            if (string.IsNullOrWhiteSpace(item.WalletId.ToString())) throw new Exception("Spend Must have a wallet");

            await Collection.InsertOneAsync(item);
            return item;

        }
        public List<Spend> Get() => Collection.Find(spend => true).ToList();
        public Spend Get(string id) => Collection.Find<Spend>(s => s.Id.ToString().Equals(id.ToString())).FirstOrDefault();
        public dynamic Update(Spend spend)
        {
            try
            {
                var r = Collection.ReplaceOne(item => item.Id == spend.Id, spend);

                return new
                {
                    r.ModifiedCount,
                    r.UpsertedId
                };
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }

        }

        internal IEnumerable<Spend> GetSpendsBetweenDates(DateTime initialDate, DateTime endDate) =>
            Collection.Find(s => s.Date >= initialDate && s.Date <= endDate).ToList();


        internal List<Spend> GetSpendsInWallet(ObjectId wallet_id, DateTime start, DateTime end) =>
            Collection.Find(s => s.WalletId == wallet_id && s.Date <= end && s.Date >= start).ToList();

    }
}
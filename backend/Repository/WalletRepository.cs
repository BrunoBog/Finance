using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using finance.model;
using Finance.model;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Finance.Repository
{
    public class WalletRepository : IBaseRepository<Wallet>
    {
        public WalletRepository(IDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            Collection = database.GetCollection<Wallet>(nameof(Wallet));
        }

        public IMongoCollection<Wallet> Collection { get; }

        internal List<Wallet> GetByUser(string username) => Collection.Find( i => i.UserID.Equals(username)).ToList();

        public List<Wallet> Get() => Collection.Find(User => true).ToList();
        public Wallet Get(string id) => Collection.Find<Wallet>(item => item.Id.ToString().Equals(id)).FirstOrDefault();

        public Wallet GetByName(string walletName, string userID) => 
            Collection.Find(wallet => wallet.Name.Equals(walletName) && wallet.UserID.Equals(userID)).FirstOrDefault();

        public async Task<Wallet> CreateAsync(Wallet spendDTO)
        {
            if (spendDTO.Id == null)
                spendDTO.Id = ObjectId.GenerateNewId();

            await Collection.InsertOneAsync(spendDTO);
            return spendDTO;
        }
        
    }
}
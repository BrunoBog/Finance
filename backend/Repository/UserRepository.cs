using finance.model;
using Finance.model;
using Finance.Repository;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace finance.Repository
{
    public class UserRepository: IBaseRepository<User>
    {
        public UserRepository(IDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            Collection = database.GetCollection<User>(nameof(User));
        }

        public IMongoCollection<User> Collection { get; }
        public List<User> Get() =>
        Collection.Find(User => true).ToList();

        public User Get(string id) =>
            Collection.Find<User>(UserDTO => UserDTO.Id.ToString().Equals(id.ToString())).FirstOrDefault();

        public async Task<User> GetByEmailAndPasswordAsync(String email, String password) =>
            await Collection.Find(u => u.Email.Equals(email) && u.Password.Equals(password)).Limit(1).SingleAsync();

        public User Create(User UserDTO)
        {
            if (UserDTO.Id == null)
                UserDTO.Id =  ObjectId.GenerateNewId();

            Collection.InsertOne(UserDTO);
            return UserDTO;
        }

        public async Task<User> CreateAsync(User item)
        {
            if (item.Id == null)
                item.Id =  ObjectId.GenerateNewId();

            await Collection.InsertOneAsync(item);
            return item;
        }

        public void Update(string id, User UserDTOIn) =>
            Collection.ReplaceOne(UserDTO => UserDTO.Id.ToString().Equals( id), UserDTOIn);

        public void Remove(User UserDTOIn) =>
            Collection.DeleteOne(UserDTO => UserDTO.Id == UserDTOIn.Id);

        public void Remove(string id) =>
            Collection.DeleteOne(UserDTO => UserDTO.Id.ToString().Equals(id));
    }

}
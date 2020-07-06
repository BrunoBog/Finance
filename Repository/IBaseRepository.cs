using System.Collections.Generic;
using System.Threading.Tasks;
using Finance.model;
using MongoDB.Driver;

namespace Finance.Repository
{
    public interface IBaseRepository<T> where T : IBaseModel
    {
        public IMongoCollection<T> Collection { get;}

        List<T> Get();


        T Get(string id);

        Task<T> CreateAsync(T item);

    }
}
using MongoDB.Bson;

namespace Finance.model
{
    public interface IBaseModel
    {
         public ObjectId?  Id { get; set; }
    }
}
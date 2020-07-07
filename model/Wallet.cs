using MongoDB.Bson;

namespace Finance.model
{
    public class Wallet: IBaseModel
    {
        public ObjectId? Id { get; set; }
        public string Name { get; set; }
        public bool Shared { get; set; }
        public string UserID { get; set; }
    }
}
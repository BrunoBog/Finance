using Finance.model;
using MongoDB.Bson;

namespace finance.model
{
    public class User : IBaseModel
    {
        public ObjectId? Id { get ; set ; }
        public string Email { get; set; }
        public string Token { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
    }
}
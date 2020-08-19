using System;
using Finance.model;
using MongoDB.Bson;

namespace finance.model
{
    public class Spend: IBaseModel
    {
        public ObjectId? Id { get ; set; }
        public string Description { get; set; }
        public string Name { get; set; }
        public int CategoryId { get; set; }
        public decimal Value { get; set; }
        public DateTime Date { get; set; }
        public ObjectId? WalletId { get; set; }

    }
}
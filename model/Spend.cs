using System;
using Finance.model;

namespace finance.model
{
    public class Spend: IBaseModel
    {
        public string Id { get; set; }
        public string Description { get; set; }
        public string Name { get; set; }
        public int CategoryId { get; set; }
        public Decimal Value { get; set; }
        public string WalletId { get; set; }
    }
}
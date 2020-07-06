namespace Finance.model
{
    public class Wallet: IBaseModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public bool Shared { get; set; }
        public string UserID { get; set; }
    }
}
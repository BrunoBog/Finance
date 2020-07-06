using Finance.model;

namespace finance.model
{
    public class User : IBaseModel
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
    }
}
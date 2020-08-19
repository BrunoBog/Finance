using System.Threading.Tasks;
using Finance.model;
using Finance.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Finance.Controllers
{
    [ApiController]
    [Route("v1/[controller]")]
    public class WalletController : Controller
    {
        public WalletController(WalletService ws)
        {
            this.WalletService = ws;
        }
        public WalletService WalletService { get; }

        [HttpPost]
        [Authorize]
        public Task<Wallet> CreateWallet(Wallet wallet) => WalletService.CreateWallet(wallet, User.Identity.Name);
    }   
}
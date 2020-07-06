using System.Threading.Tasks;
using finance.model;
using Finance.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Finance.Controllers
{
    [ApiController]
    [Route("v1/[controller]")]
    public class SpendsController : Controller
    {

        public SpendsController(SpendService ss)
        {
            this.SpendService = ss;
        }

        public SpendService SpendService { get; }

        [HttpPost]
        [Authorize]
        public  async Task<Spend> AddSpend(Spend spend) => 
        await SpendService.AddSpend(spend, User.Identity.Name);
    }
}
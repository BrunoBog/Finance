using System.Collections.Generic;
using System.Threading.Tasks;
using finance.model;
using Finance.model;
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

        [HttpGet]
        [Authorize]
        public List<Spend>  GetAllSpends() => SpendService.GetAll();

        [HttpPost]
        [Authorize]
        public  async Task<Spend> AddSpend(Spend spend) => 
        await SpendService.AddSpend(spend, User.Identity.Name);

        [HttpPost]
        [Authorize]
        [Route("bulk")]
        public  List<Spend> AddSpends(List<Spend> spends) => 
            SpendService.AddSpends(spends, User.Identity.Name);


        [HttpPut]
        [Authorize]
        public Task<ActionResult<dynamic>> UpdateSpend(Spend spend) => SpendService.Update(spend);
        
        [HttpGet]
        [Authorize]
        [Route("weekSummary")]
        public SummaryDTO GetSummary() => SpendService.GetSummaryByUserID(User.Identity.Name);
    }
}
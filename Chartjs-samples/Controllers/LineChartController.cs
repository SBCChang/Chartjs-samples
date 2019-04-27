using System.Web.Mvc;
using Chartjs_samples.Services;

namespace Chartjs_samples.Controllers
{
    public class LineChartController : Controller
    {

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult GetChartSetting()
        {
            return Json(ChartService.ReadLineChartSetting());
        }

    }
}
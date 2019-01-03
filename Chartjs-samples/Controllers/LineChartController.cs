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

        public ActionResult GetChartConfig()
        {
            return Json(ChartService.ReadLineChartConfig());
        }

    }
}
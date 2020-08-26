using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using System.Web.Mvc;

namespace WebApplication2.Controllers
{
    public class DefaultController : Controller
    {
        // GET: Default
        public ActionResult Index2()
        {
			string webDomain = WebConfigurationManager.AppSettings["webDomain"];
			return Redirect(webDomain + "app/index.html");
		}
    }
}
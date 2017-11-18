using MyPlayGround.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyPlayGround.Controllers
{
    public class GoogleHomeController : Controller
    {
        // GET: GoogleHome
        public ActionResult SimpleTextNotifier()
        {
            return View();
        }
    }
}
using MyPlayGround.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyPlayGround.Controllers
{
    public class HandsontableController : Controller
    {
        // GET: Handsontable
        public ActionResult ReferenceView()
        {
            var model = new HandsontableModel();
            return View(model);
        }
    }
}
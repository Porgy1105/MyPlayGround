﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace MyPlayGround
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }

    public class FeatureViewLocationRazorViewEngine : RazorViewEngine
    {
        private string[] featurePartialViewLocationFormats = new[]
              {
                "~/Views/Shared/{0}.cshtml"
              };

        public FeatureViewLocationRazorViewEngine()
        {
            // Partialファイルのパス設定
            base.PartialViewLocationFormats = featurePartialViewLocationFormats;
        }
    }
}

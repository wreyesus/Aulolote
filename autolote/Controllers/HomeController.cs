﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace autolote.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Administracion()
        {
            return View();
        }

        
        
        
        
        
        public ActionResult Index()
        {
            ViewBag.Message = "Modify this template to jump-start your ASP.NET MVC application.";

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Inicio()
        {
            ViewBag.Message = "Pagina de inicio";
            return View();     
      
        }





        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}

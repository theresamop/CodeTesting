using System;
using System.Collections.Generic;
using System.Web;
using CodingTest.Interfaces;
using Modules.Business;
using Modules.Config;

namespace CodingTest.Services
{
    public class EmailTemplateSvc  : IEmailTemplateSvc
    {

        public EmailTemplateSvc()
        {
           
         
        }
        public EmailTemplates GetAllTemplates()
        {
            return EmailTemplates.AllTemplates;
           
        }
    }
}
﻿using Modules.Business;
using System;
using System.Collections.Generic;
using System.Web;

namespace CodingTest.Interfaces
{
    public interface IEmailTemplateSvc
    {
        EmailTemplates GetAllTemplates();
    }
}
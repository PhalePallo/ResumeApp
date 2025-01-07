using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Resume_App.Models;
using System.Diagnostics;

namespace Resume_App.Controllers
{
    public class ResumeController : Controller
    {
        private readonly ILogger<ResumeController> _logger;

        public ResumeController(ILogger<ResumeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            var resumeData = new ResumeModel
            {
                Name = "Pallo Phale",
                Email = "phalepallo@gmail.com",
                Bio = "Aspiring Software Developer specializing in JavaScript and C#.",
                Skills = new List<string> { "C#", "JavaScript", "HTML", "CSS", "Azure" }
            };

            return View(resumeData);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

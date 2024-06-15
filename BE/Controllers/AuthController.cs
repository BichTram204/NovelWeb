using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using NovelReadingApplication.Models;
using NovelReadingApplication.Services.Interfaces;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace NovelReadingApplication.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly ILogger<AuthController> _logger;

        public AuthController(IAuthService authService, ILogger<AuthController> logger)
        {
            _authService = authService;
            _logger = logger;
        }
        [AllowAnonymous]
        [HttpPost("signin")]
        public async Task<IActionResult> SignIn([FromBody] LoginModel login)
        {
            _logger.LogInformation($"SignIn attempt for username: {login.Password}");
            var token = await _authService.SignInAsync(login.Username, login.Password);

            if (token != null)
            {
                return Ok(new { Token = token });
            }

            return Unauthorized();
        }

        // Add other authentication-related actions as needed
    }
}
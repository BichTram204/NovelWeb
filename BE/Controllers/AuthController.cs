using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
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
        private readonly IConfiguration _configuration;

        public AuthController(IAuthService authService, IConfiguration configuration)
        {
            _authService = authService;
            _configuration = configuration;
        }
        [HttpPost("signin")]
        public async Task<IActionResult> SignIn([FromBody] LoginModel data)
        {
            var token = await _authService.SignInAsync(data.Username, data.Password);

            if (token == "Authentication failed")
            {
                return Unauthorized("Invalid username or password.");
            }

            double expirationMinutes = _configuration.GetValue<double>("JwtConfig:ClientTokensExpiredInMinute:AccessToken");
            DateTime expirationTime = DateTime.UtcNow.AddMinutes(expirationMinutes);

            return Ok(new
            {
                AccessToken = token,
                Expires = expirationTime
            });
        }
    }
}
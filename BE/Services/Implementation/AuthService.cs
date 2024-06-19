using Microsoft.IdentityModel.Tokens;
using NovelReadingApplication.Services.Interfaces;
using System.Data;
using System.Data.SqlClient;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace NovelReadingApplication.Services.Implementation
{
    public class AuthService : IAuthService
    {
        private readonly IConfiguration _configuration;
        private readonly DatabaseManager _databaseManager;

        public AuthService(IConfiguration configuration, DatabaseManager databaseManager)
        {
            _configuration = configuration;
            _databaseManager = databaseManager;
        }

        public async Task<string> SignInAsync(string username, string password)
        {
            // Assuming passwords are stored securely (hashed) and you're comparing hashes
            string query = "SELECT * FROM Users WHERE Username = @Username AND Password = @Password";
            var parameters = new List<SqlParameter>
    {
        new SqlParameter("@Username", username),
        new SqlParameter("@Password", password) // Consider hashing the password
    };

            DataTable result = new DataTable();
            using (var reader = await _databaseManager.ExecuteQueryAsync(query, parameters.ToArray()))
            {
                result.Load(reader);
            }

            if (result.Rows.Count == 0)
            {
                return "Authentication failed";// User not found or password does not match
            }

            var secretKeyConfig = _configuration["JwtConfig:SecretKey"] ?? throw new InvalidOperationException("Secret key not configured");
            var secretKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secretKeyConfig));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

            // Safely parse expiration time
            if (!double.TryParse(_configuration["JwtConfig:ClientTokensExpiredInMinute:AccessToken"], out double expirationMinutes))
            {
                throw new InvalidOperationException("Token expiration time is not configured correctly.");
            }

            var tokenOptions = new JwtSecurityToken(
                issuer: _configuration["JwtConfig:Issuer"],
                audience: _configuration["JwtConfig:Audience"],
                claims: new List<Claim> { new Claim(ClaimTypes.Name, username) },
                expires: DateTime.Now.AddMinutes(expirationMinutes),
                signingCredentials: signinCredentials
            );

            return new JwtSecurityTokenHandler().WriteToken(tokenOptions);
        }
    }
}

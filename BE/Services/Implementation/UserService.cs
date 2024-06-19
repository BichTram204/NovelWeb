using NovelReadingApplication.Models;
using NovelReadingApplication.Services.Interfaces;
using System.Data;
using System.Data.SqlClient;

namespace NovelReadingApplication.Services.Implementation
{
    public class UserService : IUserService
    {
        private readonly DatabaseManager _databaseManager;

        public UserService(DatabaseManager databaseManager)
        {
            _databaseManager = databaseManager;
        }

        //public async Task<User> GetUserByIdAsync(int userId)
        //{
        //    // Use parameterized query to prevent SQL injection
        //    string query = "SELECT * FROM User  s WHERE userId = @UserId";
        //    var parameters = new List<SqlParameter>
        //    {
        //        new SqlParameter("@UserId", userId)
        //    };
        //    DataTable result = await _databaseManager.ExecuteQueryAsync(query, parameters);
        //    if (result.Rows.Count > 0)
        //    {
        //        DataRow row = result.Rows[0];
        //        return new User
        //        {
        //            UserId = Convert.ToInt32(row["userId"]),
        //            Username = row["username"].ToString(),
        //            Email = row["email"].ToString(),
        //            // Remove the password or ensure it's not returned to the client
        //            CreatedAt = Convert.ToDateTime(row["createdAt"])
        //        };
        //    }
        //    return null;
        //}
    }
}

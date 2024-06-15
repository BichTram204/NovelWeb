using NovelReadingApplication.Models;
using System.Data.SqlClient;

namespace NovelReadingApplication.Data
{
    public class UserRepository
    {
        private readonly string _connectionString;

        public UserRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<User> GetAllUsers()
        {
            var users = new List<User>();
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                var command = new SqlCommand("SELECT * FROM Users", connection);
                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        users.Add(new User
                        {
                            UserId = (int)reader["userId"],
                            Username = reader["username"].ToString(),
                            Email = reader["email"].ToString(),
                            Password = reader["password"].ToString(),
                            CreatedAt = (DateTime)reader["createdAt"]
                        });
                    }
                }
            }
            return users;
        }
    }
}

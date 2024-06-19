using System.Data;
using System.Data.SqlClient;

public class DatabaseManager
{

    private readonly string _connectionString;

    public DatabaseManager(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("DefaultConnection");
    }

    public async Task<SqlDataReader> ExecuteQueryAsync(string query, SqlParameter[] parameters)
    {
        var connection = new SqlConnection(_connectionString);
        await connection.OpenAsync();
        var command = new SqlCommand(query, connection);

        if (parameters != null && parameters.Length > 0)
        {
            command.Parameters.AddRange(parameters);
        }

        return await command.ExecuteReaderAsync(CommandBehavior.CloseConnection);
    }
    public async Task<SqlDataReader> ExecuteReaderAsync(string query, SqlParameter[] parameters)
    {
        var connection = new SqlConnection(_connectionString);
        var command = new SqlCommand(query, connection);
        command.Parameters.AddRange(parameters);

        await connection.OpenAsync();
        return await command.ExecuteReaderAsync(CommandBehavior.CloseConnection);
    }
    public async Task<SqlDataReader> ExecuteQueryAsync(string query)
    {
        var connection = new SqlConnection(_connectionString);
        await connection.OpenAsync();
        var command = new SqlCommand(query, connection);

        return await command.ExecuteReaderAsync(CommandBehavior.CloseConnection);
    }

    public async Task<object> ExecuteScalarAsync(string query, SqlParameter[] parameters)
    {
        using (var connection = new SqlConnection(_connectionString))
        {
            await connection.OpenAsync();
            using (var command = new SqlCommand(query, connection))
            {
                if (parameters != null)
                {
                    command.Parameters.AddRange(parameters);
                }
                return await command.ExecuteScalarAsync();
            }
        }
    }
    public async Task<int> ExecuteNonQueryAsync(string query, SqlParameter[] parameters)
    {
        using (var connection = new SqlConnection(_connectionString))
        using (var command = new SqlCommand(query, connection))
        {
            command.Parameters.AddRange(parameters);
            connection.Open();
            return await command.ExecuteNonQueryAsync();
        }
    }
}
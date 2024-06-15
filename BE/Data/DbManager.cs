using System.Data;
using System.Data.SqlClient;

public class DatabaseManager
{

    private readonly string _connectionString;

    public DatabaseManager(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("DefaultConnection");
    }

    public async Task<DataTable> ExecuteQueryAsync(string query, List<SqlParameter> parameters)
    {
        DataTable dataTable = new DataTable();
        using (SqlConnection connection = new SqlConnection(_connectionString))
        {
            SqlCommand command = new SqlCommand(query, connection);
            command.Parameters.AddRange(parameters.ToArray()); // Add the parameters to the command

            await connection.OpenAsync();
            using (var reader = await command.ExecuteReaderAsync())
            {
                dataTable.Load(reader);
            }
        }
        return dataTable;
    }

    public async Task<object> ExecuteScalarAsync(string query, List<SqlParameter> parameters)
    {
        using (SqlConnection connection = new SqlConnection(_connectionString))
        {
            SqlCommand command = new SqlCommand(query, connection);
            if (parameters != null)
            {
                command.Parameters.AddRange(parameters.ToArray());
            }

            await connection.OpenAsync();
            return await command.ExecuteScalarAsync();
        }
    }
    public async Task<int> ExecuteNonQueryAsync(string query, List<SqlParameter> parameters)
    {
        using (SqlConnection connection = new SqlConnection(_connectionString))
        {
            SqlCommand command = new SqlCommand(query, connection);
            if (parameters != null)
            {
                command.Parameters.AddRange(parameters.ToArray());
            }

            await connection.OpenAsync();
            return await command.ExecuteNonQueryAsync();
        }
    }
}
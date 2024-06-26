﻿using NovelReadingApplication.Models;
using NovelReadingApplication.Services.Interfaces;
using System.Data.SqlClient;

namespace NovelReadingApplication.Services.Implementation
{
    public class SourceService : ISourceService
    {
        private readonly DatabaseManager _dbManager;

        public SourceService(DatabaseManager dbManager)
        {
            _dbManager = dbManager;
        }
        public async Task<IEnumerable<Source>> GetAllSourcesAsync()
        {
            var sources = new List<Source>();
            var query = "SELECT SourceId, Name, Url, Description FROM Sources";

            using (var reader = await _dbManager.ExecuteQueryAsync(query))
            {
                while (await reader.ReadAsync())
                {
                    sources.Add(new Source
                    {
                        SourceId = reader.GetInt32(reader.GetOrdinal("SourceId")),
                        Name = reader.GetString(reader.GetOrdinal("Name")),
                        Url = reader.GetString(reader.GetOrdinal("Url")),
                        Description = reader.IsDBNull(reader.GetOrdinal("Description")) ? null : reader.GetString(reader.GetOrdinal("Description"))
                    });
                }
                reader.Close();
            }

            return sources;
        }
        public async Task<int> CreateSourceAsync(SourceCreateRequest source)
        {
            var query = "INSERT INTO Sources (Name, Description, Url) VALUES (@Name, @Description, @Url); SELECT SCOPE_IDENTITY();";
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@Name", source.Name),
            new SqlParameter("@Description", source.Description ?? (object)DBNull.Value),
            new SqlParameter("@Url", source.Url ?? (object)DBNull.Value),
            };

            var result = await _dbManager.ExecuteScalarAsync(query, parameters);
            return Convert.ToInt32(result);
        }
        public async Task<bool> UpdateSource(int sourceId, SourceCreateRequest source)
        {
            var query = "UPDATE Sources SET Name = @Name, Url = @Url Description = @Description WHERE SourceId = @SourceId";

            SqlParameter[] parameters = new[]
            {
            new SqlParameter("@Name", source.Name),
            new SqlParameter("@Url", source.Url),
            new SqlParameter("@Description", source.Description),
            new SqlParameter("@SourceId", sourceId)
        };

            var result = await _dbManager.ExecuteNonQueryAsync(query, parameters);
            return result > 0;
        }
    }
}

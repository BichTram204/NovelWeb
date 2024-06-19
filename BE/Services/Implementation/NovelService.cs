using NovelReadingApplication.Models;
using NovelReadingApplication.Services.Interfaces;
using System.Data.SqlClient;

namespace NovelReadingApplication.Services.Implementation
{
    public class NovelService : INovelService
    {
        private readonly DatabaseManager _dbManager;

        public NovelService(DatabaseManager dbManager)
        {
            _dbManager = dbManager;
        }

        public async Task<IEnumerable<NovelResponse>> GetAllNovelsAsync()
        {
            var novels = new List<NovelResponse>();
            var query = @"
            SELECT n.NovelId, n.Title, n.Author, n.PublicationYear, n.Description, n.CoverImageUrl, c.Name AS CategoryName
            FROM Novels n
            LEFT JOIN Categories c ON n.CatId = c.CatId";

            using (var reader = await _dbManager.ExecuteQueryAsync(query))
            {
                while (await reader.ReadAsync())
                {
                    novels.Add(new NovelResponse
                    {
                        NovelId = reader.GetInt32(reader.GetOrdinal("NovelId")),
                        Title = reader.GetString(reader.GetOrdinal("Title")),
                        Author = reader.IsDBNull(reader.GetOrdinal("Author")) ? null : reader.GetString(reader.GetOrdinal("Author")),
                        PublicationYear = reader.IsDBNull(reader.GetOrdinal("PublicationYear")) ? null : reader.GetInt32(reader.GetOrdinal("PublicationYear")),
                        Description = reader.IsDBNull(reader.GetOrdinal("Description")) ? null : reader.GetString(reader.GetOrdinal("Description")),
                        CoverImageUrl = reader.IsDBNull(reader.GetOrdinal("CoverImageUrl")) ? null : reader.GetString(reader.GetOrdinal("CoverImageUrl")),
                        CategoryName = reader.IsDBNull(reader.GetOrdinal("CategoryName")) ? null : reader.GetString(reader.GetOrdinal("CategoryName"))
                    });
                }
                reader.Close();
            }

            return novels;
        }
        public async Task<IEnumerable<NovelResponse>> SearchNovelsAsync(string title, string author)
        {
            var novels = new List<NovelResponse>();
            var query = @"
        SELECT n.NovelId, n.Title, n.Author, n.PublicationYear, n.Description, n.CoverImageUrl, c.Name AS CategoryName
        FROM Novels n
        LEFT JOIN Categories c ON n.CatId = c.CatId
        WHERE 1=1";

            List<SqlParameter> parameters = new List<SqlParameter>();

            if (!string.IsNullOrEmpty(title))
            {
                query += " AND n.Title LIKE @Title";
                parameters.Add(new SqlParameter("@Title", $"%{title}%"));
            }

            if (!string.IsNullOrEmpty(author))
            {
                query += " AND n.Author LIKE @Author";
                parameters.Add(new SqlParameter("@Author", $"%{author}%"));
            }

            using (var reader = await _dbManager.ExecuteQueryAsync(query, parameters.ToArray()))
            {
                while (await reader.ReadAsync())
                {
                    novels.Add(new NovelResponse
                    {
                        NovelId = reader.GetInt32(reader.GetOrdinal("NovelId")),
                        Title = reader.GetString(reader.GetOrdinal("Title")),
                        Author = reader.GetString(reader.GetOrdinal("Author")),
                        PublicationYear = reader.IsDBNull(reader.GetOrdinal("PublicationYear")) ? null : (int?)reader.GetInt32(reader.GetOrdinal("PublicationYear")),
                        Description = reader.IsDBNull(reader.GetOrdinal("Description")) ? null : reader.GetString(reader.GetOrdinal("Description")),
                        CoverImageUrl = reader.IsDBNull(reader.GetOrdinal("CoverImageUrl")) ? null : reader.GetString(reader.GetOrdinal("CoverImageUrl")),
                        CategoryName = reader.IsDBNull(reader.GetOrdinal("CategoryName")) ? null : reader.GetString(reader.GetOrdinal("CategoryName"))
                    });
                }
            }

            return novels;
        }
        public async Task<bool> CategoryExistsAsync(int catId)
        {
            var query = "SELECT COUNT(1) FROM Categories WHERE CatId = @CatId";
            SqlParameter[] parameters = new SqlParameter[]
            {
        new SqlParameter("@CatId", catId),
            };

            var result = await _dbManager.ExecuteScalarAsync(query, parameters);
            int count = Convert.ToInt32(result);
            return count > 0;
        }
        public async Task<int> CreateNovelAsync(NovelCreateRequest novel)
        {
            if (!await CategoryExistsAsync(novel.CatId))
            {
                throw new ArgumentException("Category does not exist.");
            }
            var query = "INSERT INTO Novels (Title, Author, PublicationYear, Description, CoverImageUrl, CatId) VALUES (@Title, @Author, @PublicationYear, @Description, @CoverImageUrl, @CatId); SELECT SCOPE_IDENTITY();";
            SqlParameter[] parameters = new SqlParameter[]
            {
        new SqlParameter("@Title", novel.Title),
        new SqlParameter("@Author", novel.Author ?? (object)DBNull.Value),
        new SqlParameter("@PublicationYear", novel.PublicationYear.HasValue ? (object)novel.PublicationYear.Value : DBNull.Value),
        new SqlParameter("@Description", novel.Description ?? (object)DBNull.Value),
        new SqlParameter("@CoverImageUrl", novel.CoverImageUrl ?? (object)DBNull.Value),
        new SqlParameter("@CatId", novel.CatId),
            };

            var result = await _dbManager.ExecuteScalarAsync(query, parameters);
            return Convert.ToInt32(result);
        }
        public async Task<bool> UpdateNovel(int novelId, NovelCreateRequest novel)
        {
            var query = "UPDATE Novels SET Title = @Title, Author = @Author, PublicationYear = @PublicationYear, Description = @Description, CoverImageUrl = @CoverImageUrl, CatId = @CatId WHERE NovelId = @NovelId";

            SqlParameter[] parameters = new[]
            {
            new SqlParameter("@Title", novel.Title),
            new SqlParameter("@Author", novel.Author),
            new SqlParameter("@PublicationYear", novel.PublicationYear),
            new SqlParameter("@Description", novel.Description),
            new SqlParameter("@CoverImageUrl", novel.CoverImageUrl),
            new SqlParameter("@CatId", novel.CatId),
            new SqlParameter("@NovelId", novelId)
        };

            var result = await _dbManager.ExecuteNonQueryAsync(query, parameters);
            return result > 0;
        }
    }
}

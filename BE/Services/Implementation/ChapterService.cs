using NovelReadingApplication.Models;
using NovelReadingApplication.Services.Interfaces;
using System.Data;
using System.Data.SqlClient;

namespace NovelReadingApplication.Services.Implementation
{
    public class ChapterService : IChapterService
    {
        private readonly DatabaseManager _dbManager;

        public ChapterService(DatabaseManager dbManager)
        {
            _dbManager = dbManager;
        }

        public async Task<IEnumerable<Chapter>> GetChaptersByNovelIdAsync(int novelId)
        {
            var chapters = new List<Chapter>();
            string query = "SELECT ChapterId, NovelId, SourceId, ChapterNumber, Title, Url, Priority FROM Chapters WHERE NovelId = @NovelId";
            SqlParameter[] parameters = new[]
            {
                new SqlParameter("@NovelId", novelId)
            };

            using (var reader = await _dbManager.ExecuteQueryAsync(query, parameters))
            {
                while (await reader.ReadAsync())
                {
                    chapters.Add(new Chapter
                    {
                        ChapterId = reader.GetInt32(reader.GetOrdinal("ChapterId")),
                        NovelId = reader.GetInt32(reader.GetOrdinal("NovelId")),
                        SourceId = reader.IsDBNull(reader.GetOrdinal("SourceId")) ? null : reader.GetInt32(reader.GetOrdinal("SourceId")),
                        ChapterNumber = reader.GetInt32(reader.GetOrdinal("ChapterNumber")),
                        Title = reader.GetString(reader.GetOrdinal("Title")),
                        Url = reader.GetString(reader.GetOrdinal("Url")),
                        Priority = reader.IsDBNull(reader.GetOrdinal("Priority")) ? null : reader.GetInt32(reader.GetOrdinal("Priority"))
                    });
                }
            }

            return chapters;
        }
        public async Task<bool> NovelExistsAsync(int novelId)
        {
            var query = "SELECT COUNT(1) FROM Novels WHERE NovelId = @NovelId";
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@NovelId", novelId),
            };

            var result = await _dbManager.ExecuteScalarAsync(query, parameters);
            int count = Convert.ToInt32(result);
            return count > 0;
        }
        public async Task<int> CreateChapterAsync(ChapterCreateRequest chapter)
        {
            if (!await NovelExistsAsync(chapter.NovelId))
            {
                throw new ArgumentException("Novel does not exist.");
            }
            var query = "INSERT INTO Chapters (NovelId, SourceId, ChapterNumber, Title, Url, Priority) VALUES (@NovelId, @SourceId, @ChapterNumber, @Title, @Url, @Priority); SELECT SCOPE_IDENTITY();";
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@NovelId", chapter.NovelId),
            new SqlParameter("@SourceId", chapter.SourceId ?? (object)DBNull.Value),
            new SqlParameter("@ChapterNumber", chapter.ChapterNumber),
            new SqlParameter("@Title", chapter.Title ?? (object)DBNull.Value),
            new SqlParameter("@Url", chapter.Url),
            new SqlParameter("@Priority", chapter.Priority ?? (object)DBNull.Value),
            };

            var result = await _dbManager.ExecuteScalarAsync(query, parameters);
            return Convert.ToInt32(result);
        }
        public async Task<bool> UpdateChapter(int chapterId, ChapterCreateRequest chapter)
        {
            var query = "UPDATE Chapters SET NovelId = @NovelId, SourceId = @SourceId, ChapterNumber = @ChapterNumber, Title = @Title, Url = @Url, Priority = @Priority WHERE ChapterId = @ChapterId";

            SqlParameter[] parameters = new[]
            {
            new SqlParameter("@NovelId", chapter.NovelId),
            new SqlParameter("@SourceId", chapter.SourceId),
            new SqlParameter("@ChapterNumber", chapter.ChapterNumber),
            new SqlParameter("@Title", chapter.Title),
            new SqlParameter("@Url", chapter.Url),
            new SqlParameter("@Priority", chapter.Priority),
            new SqlParameter("@ChapterId", chapterId)
        };

            var result = await _dbManager.ExecuteNonQueryAsync(query, parameters);
            return result > 0;
        }
    }
}

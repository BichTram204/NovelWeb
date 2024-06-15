using NovelReadingApplication.Models;
using NovelReadingApplication.Services.Interfaces;
using System.Data;
using System.Data.SqlClient;

namespace NovelReadingApplication.Services.Implementation
{
    public class NovelService: INovelService
    {
        private DatabaseManager databaseManager;

        public NovelService(DatabaseManager databaseManager)
        {
            this.databaseManager = databaseManager;
        }

        public async Task<IEnumerable<Novel>> SearchNovelsAsync(string? title, string? author, int? publicationYear)
        {
            string sqlQuery = "SELECT * FROM Novels WHERE 1=1";
            var parameters = new List<SqlParameter>();

            if (!string.IsNullOrWhiteSpace(title))
            {
                sqlQuery += " AND Title LIKE @Title";
                parameters.Add(new SqlParameter("@Title", $"%{title}%"));
            }

            if (!string.IsNullOrWhiteSpace(author))
            {
                sqlQuery += " AND Author LIKE @Author";
                parameters.Add(new SqlParameter("@Author", $"%{author}%"));
            }

            if (publicationYear.HasValue)
            {
                sqlQuery += " AND PublicationYear = @PublicationYear";
                parameters.Add(new SqlParameter("@PublicationYear", publicationYear));
            }

            DataTable dataTable = await databaseManager.ExecuteQueryAsync(sqlQuery, parameters);
            var novels = new List<Novel>();

            foreach (DataRow row in dataTable.Rows)
            {
                novels.Add(new Novel
                {
                    // Assuming your Novel class has properties that match the database columns
                    // You'll need to adjust these property names and conversions based on your actual Novel class
                    NovelId = Convert.ToInt32(row["NovelId"]),
                    Title = row["Title"].ToString(),
                    Author = row["Author"].ToString(),
                    PublicationYear = Convert.ToInt32(row["PublicationYear"]),
                    // Add other properties as needed
                });
            }

            return novels;
        }
        public async Task<bool> AddNovelAsync(Novel novel)
        {
            // Check if all source IDs exist
            string checkSourcesQuery = "SELECT COUNT(*) FROM Sources WHERE SourceId IN (@SourceIds)";
            var parameters = new List<SqlParameter>
            {
                new SqlParameter("@SourceIds", string.Join(",", novel.SourceIds))
            };
            var result = await databaseManager.ExecuteScalarAsync(checkSourcesQuery, parameters);
            int count = Convert.ToInt32(result);

            if (count == novel.SourceIds.Count)
            {
                // All sources exist, proceed to add the novel
                string insertNovelQuery = "INSERT INTO Novels (Title, Author, PublicationYear) VALUES (@Title, @Author, @PublicationYear)";
                var insertParameters = new List<SqlParameter>
                {
                    new SqlParameter("@Title", novel.Title),
                    new SqlParameter("@Author", novel.Author),
                    new SqlParameter("@PublicationYear", novel.PublicationYear)
                };

                await databaseManager.ExecuteNonQueryAsync(insertNovelQuery, insertParameters);

                // Insert into junction table for Novel-Sources relationships
                string insertJunctionQuery = "INSERT INTO NovelSources (NovelId, SourceId, Priority) VALUES (@NovelId, @SourceId, @Priority)";
                foreach (int sourceId in novel.SourceIds)
                {
                    var junctionParameters = new List<SqlParameter>
                    {
                        new SqlParameter("@NovelId", novel.NovelId),
                        new SqlParameter("@SourceId", sourceId),
                        new SqlParameter("@Priority", 1)
                    };

                    await databaseManager.ExecuteNonQueryAsync(insertJunctionQuery, junctionParameters);
                }

                return true;
            }
            else
            {
                // Not all sources exist
                return false;
            }
        }
    }
}

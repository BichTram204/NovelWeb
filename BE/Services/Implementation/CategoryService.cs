using NovelReadingApplication.Models;
using NovelReadingApplication.Services.Interfaces;
using System.Data.SqlClient;

namespace NovelReadingApplication.Services.Implementation
{
    public class CategoryService : ICategoryService
    {
        private readonly DatabaseManager _dbManager;

        public CategoryService(DatabaseManager dbManager)
        {
            _dbManager = dbManager;
        }

        public async Task<IEnumerable<Category>> GetAllCategoriesAsync()
        {
            var categories = new List<Category>();
            var query = "SELECT CatId, Name, Description FROM Categories";

            using (var reader = await _dbManager.ExecuteQueryAsync(query))
            {
                while (await reader.ReadAsync())
                {
                    categories.Add(new Category
                    {
                        CatId = reader.GetInt32(reader.GetOrdinal("CatId")),
                        Name = reader.GetString(reader.GetOrdinal("Name")),
                        Description = reader.IsDBNull(reader.GetOrdinal("Description")) ? null : reader.GetString(reader.GetOrdinal("Description"))
                    });
                }
                reader.Close();
            }

            return categories;
        }

        public async Task<int> CreateCategoryAsync(CategoryCreateRequest source)
        {
            var query = "INSERT INTO Categories (Name, Description) VALUES (@Name, @Description); SELECT SCOPE_IDENTITY();";
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@Name", source.Name),
            new SqlParameter("@Description", source.Description ?? (object)DBNull.Value),
            };

            var result = await _dbManager.ExecuteScalarAsync(query, parameters);
            return Convert.ToInt32(result);
        }
        public async Task<bool> UpdateCategory(int catId, CategoryCreateRequest category)
        {
            var query = "UPDATE Categories SET Name = @Name, Description = @Description WHERE CatId = @CatId";

            SqlParameter[] parameters = new[]
            {
            new SqlParameter("@Name", category.Name),
            new SqlParameter("@Description", category.Description),
            new SqlParameter("@CatId", catId)
        };

            var result = await _dbManager.ExecuteNonQueryAsync(query, parameters);
            return result > 0;
        }
    }
}

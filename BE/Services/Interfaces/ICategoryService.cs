using NovelReadingApplication.Models;

namespace NovelReadingApplication.Services.Interfaces
{
    public interface ICategoryService
    {
        Task<IEnumerable<Category>> GetAllCategoriesAsync();
        Task<int> CreateCategoryAsync(CategoryCreateRequest category);
        Task<bool> UpdateCategory(int categoryId, CategoryCreateRequest category);
    }
}

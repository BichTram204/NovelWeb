using NovelReadingApplication.Models;

namespace NovelReadingApplication.Services.Interfaces
{
    public interface INovelService
    {
        Task<IEnumerable<NovelResponse>> GetAllNovelsAsync();
        Task<IEnumerable<NovelResponse>> SearchNovelsAsync(string title, string author);
        Task<bool> CategoryExistsAsync(int catId);
        Task<int> CreateNovelAsync(NovelCreateRequest novel);
        Task<bool> UpdateNovel(int novelId, NovelCreateRequest novel);
    }
}

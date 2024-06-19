using NovelReadingApplication.Models;

namespace NovelReadingApplication.Services.Interfaces
{
    public interface IChapterService
    {
        Task<IEnumerable<Chapter>> GetChaptersByNovelIdAsync(int novelId);
        Task<bool> NovelExistsAsync(int novelId);
        Task<int> CreateChapterAsync(ChapterCreateRequest chapter);
        Task<bool> UpdateChapter(int chapterId, ChapterCreateRequest chapter);
    }
}

using NovelReadingApplication.Models;

namespace NovelReadingApplication.Services.Interfaces
{
    public interface INovelService
    {
        //List<Novel> GetAllNovels();
        //void AddNovel(Novel novel);
        Task<bool> AddNovelAsync(Novel novel);
        Task<IEnumerable<Novel>> SearchNovelsAsync(string? title, string? author, int? publicationYear);
    }
}

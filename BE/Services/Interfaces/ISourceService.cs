using NovelReadingApplication.Models;

namespace NovelReadingApplication.Services.Interfaces
{
    public interface ISourceService
    {
        Task<IEnumerable<Source>> GetAllSourcesAsync();
        Task<int> CreateSourceAsync(SourceCreateRequest source);
        Task<bool> UpdateSource(int sourceId, SourceCreateRequest source);
    }
}

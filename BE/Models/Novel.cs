namespace NovelReadingApplication.Models
{
    public class Novel
    {
        public int NovelId { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public int PublicationYear { get; set; }
        public string? Description { get; set; }
        public string? CoverImageUrl { get; set; }

        public List<int> SourceIds { get; set; } = new List<int>();
    }
    public class NovelCreateRequest
    {
        public string Title { get; set; }
        public string Author { get; set; }
        public int PublicationYear { get; set; }
        public List<int> SourceIds { get; set; } = new List<int>();
        // Other properties as needed, excluding NovelId
    }
}

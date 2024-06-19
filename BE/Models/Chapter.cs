namespace NovelReadingApplication.Models
{
    public class Chapter
    {
        public int ChapterId { get; set; }
        public int NovelId { get; set; }
        public int? SourceId { get; set; }
        public int ChapterNumber { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
        public int? Priority { get; set; }
    }

    public class ChapterCreateRequest
    {
        public int NovelId { get; set; }
        public int? SourceId { get; set; }
        public int ChapterNumber { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
        public int? Priority { get; set; }
    }
}

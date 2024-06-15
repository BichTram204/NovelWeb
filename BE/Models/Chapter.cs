namespace NovelReadingApplication.Models
{
    public class Chapter
    {
        public int ChapterId { get; set; }
        public int NovelId { get; set; }
        public Novel? Novel { get; set; }
        public int SourceId { get; set; }
        public Source? Source { get; set; }
        public int ChapterNumber { get; set; }
        public string? Title { get; set; }
        public string Url { get; set; }
        public int? Priority { get; set; }
    }
}

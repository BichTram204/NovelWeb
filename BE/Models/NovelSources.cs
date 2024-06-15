namespace NovelReadingApplication.Models
{
    public class NovelSources
    {
        public int NovelId { get; set; }
        public Novel? Novel { get; set; }
        public int SourceId { get; set; }
        public Source? Source { get; set; }
        public int Priority { get; set; } 
    }
}

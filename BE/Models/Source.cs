namespace NovelReadingApplication.Models
{
    public class Source
    {
        public int SourceId { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public string? Description { get; set; }
    }
    public class SourceCreateRequest
    {
        public string Name { get; set; }
        public string Url { get; set; }
        public string? Description { get; set; }
    }
}

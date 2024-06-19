namespace NovelReadingApplication.Models
{
    public class ReadingState
    {
        public int ReadingStateId { get; set; }
        public int? UserId { get; set; }
        public int? NovelId { get; set; }
        public int? CurrentChapterId { get; set; }
        public int? CurrentPage { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}

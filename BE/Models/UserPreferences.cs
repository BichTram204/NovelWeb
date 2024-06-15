namespace NovelReadingApplication.Models
{
    public class UserPreferences
    {
        public int UserId { get; set; }
        public User? User { get; set; }
        public int SourceId { get; set; }
        public Source? Source { get; set; }
        public int Priority { get; set; }
    }
}

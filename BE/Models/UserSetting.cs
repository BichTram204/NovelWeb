namespace NovelReadingApplication.Models
{
    public class UserSetting
    {
        public int UserId { get; set; }
        public User? User { get; set; }
        public int FontSize { get; set; }
        public string FontFamily { get; set; }
        public string BackgroundColor { get; set; }
        public string TextColor { get; set; }
        public float LineSpacing { get; set; }
    }
}

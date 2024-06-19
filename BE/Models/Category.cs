namespace NovelReadingApplication.Models
{
    public class Category
    {
        public int CatId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }

    public class CategoryCreateRequest
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}

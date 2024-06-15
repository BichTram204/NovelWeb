namespace NovelReadingApplication.Services.Interfaces
{
    public interface IAuthService
    {
        Task<string> SignInAsync(string username, string password);
    }
}

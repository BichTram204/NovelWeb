using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NovelReadingApplication.Models;
using NovelReadingApplication.Services.Implementation;
using NovelReadingApplication.Services.Interfaces;

[ApiController]
[Route("[controller]")]
public class NovelsController : ControllerBase
{
    private INovelService novelService;

    public NovelsController(INovelService novelService)
    {
        this.novelService = novelService;
    }
    [HttpPost]
    public async Task<IActionResult> AddNovel([FromBody] NovelCreateRequest request)
    {
        var novel = new Novel
        {
            Title = request.Title,
            Author = request.Author,
            PublicationYear = request.PublicationYear,
            SourceIds = request.SourceIds
        };

        var success = await novelService.AddNovelAsync(novel);
        if (success)
        {
            return Ok("Novel added successfully.");
        }
        else
        {
            return BadRequest("One or more sources do not exist.");
        }
    }
    [HttpGet("Search")]
    public async Task<ActionResult<IEnumerable<Novel>>> Search(string? title, string? author, int? publicationYear)
    {
        var novels = await novelService.SearchNovelsAsync(title, author, publicationYear);

        if (novels == null || !novels.Any())
        {
            return NotFound("No novels found matching the search criteria.");
        }

        return Ok(novels);
    }
}
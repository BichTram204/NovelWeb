using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NovelReadingApplication.Models;
using NovelReadingApplication.Services.Implementation;
using NovelReadingApplication.Services.Interfaces;

[ApiController]
[Route("api/novels")]
public class NovelsController : ControllerBase
{
    private INovelService novelService;

    public NovelsController(INovelService novelService)
    {
        this.novelService = novelService;
    }
    [HttpGet("get-all")]
    public async Task<IActionResult> Get()
    {
        var novels = await novelService.GetAllNovelsAsync();
        return Ok(novels);
    }
    [HttpGet("search")]
    public async Task<IActionResult> Search([FromQuery] string title = "", [FromQuery] string author = "")
    {
        var novels = await novelService.SearchNovelsAsync(title, author);
        return Ok(novels);
    }
    [Authorize]
    [HttpPost("add-novel")]
    public async Task<IActionResult> CreateNovel([FromBody] NovelCreateRequest novelRequest)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        // Check if the category exists
        bool categoryExists = await novelService.CategoryExistsAsync(novelRequest.CatId);
        if (!categoryExists)
        {
            return BadRequest("The specified category does not exist.");
        }

        try
        {
            var novelId = await novelService.CreateNovelAsync(novelRequest);
            return CreatedAtAction(nameof(CreateNovel), new { id = novelId }, novelRequest);
        }
        catch (Exception ex)
        {
            // Log the exception here
            return StatusCode(500, "An error occurred while creating the novel. Please try again later.");
        }
    }
    [Authorize]
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateNovel(int id, [FromBody] NovelCreateRequest novel)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var result = await novelService.UpdateNovel(id, novel);
        if (!result)
        {
            return NotFound($"Novel with ID {id} not found.");
        }

        return NoContent(); // Successfully updated
    }
}
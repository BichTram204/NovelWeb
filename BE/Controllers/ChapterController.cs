using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NovelReadingApplication.Models;
using NovelReadingApplication.Services.Implementation;
using NovelReadingApplication.Services.Interfaces;

namespace NovelReadingApplication.Controllers
{
    [Route("api/chapter")]
    [ApiController]
    public class ChapterController : ControllerBase
    {
        private readonly IChapterService _chapterService;

        public ChapterController(IChapterService chapterService)
        {
            _chapterService = chapterService;
        }

        // GET: api/Chapter/{novelId}
        [HttpGet("{novelId}")]
        public async Task<ActionResult<IEnumerable<Chapter>>> GetChaptersByNovelId(int novelId)
        {
            var chapters = await _chapterService.GetChaptersByNovelIdAsync(novelId);

            if (chapters == null)
            {
                return NotFound();
            }

            return Ok(chapters);
        }
        [Authorize]
        [HttpPost("add-chapter")]
        public async Task<IActionResult> CreateChapter([FromBody] ChapterCreateRequest chapterRequest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Check if the category exists
            bool categoryExists = await _chapterService.NovelExistsAsync(chapterRequest.NovelId);
            if (!categoryExists)
            {
                return BadRequest("The specified novel does not exist.");
            }

            try
            {
                var novelId = await _chapterService.CreateChapterAsync(chapterRequest);
                return CreatedAtAction(nameof(CreateChapter), new { id = novelId }, chapterRequest);
            }
            catch (Exception ex)
            {
                // Log the exception here
                return StatusCode(500, "An error occurred while creating the chapter. Please try again later.");
            }
        }
        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateChapter(int id, [FromBody] ChapterCreateRequest chapter)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var result = await _chapterService.UpdateChapter(id, chapter);
            if (!result)
            {
                return NotFound($"Chaper with ID {id} not found.");
            }

            return NoContent(); // Successfully updated
        }
    }
}

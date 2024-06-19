using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NovelReadingApplication.Models;
using NovelReadingApplication.Services.Implementation;
using NovelReadingApplication.Services.Interfaces;

namespace NovelReadingApplication.Controllers
{
    [ApiController]
    [Route("api/source")]
    [Authorize]
    public class SourceController : ControllerBase
    {
        private readonly ISourceService _sourceService;

        public SourceController(ISourceService sourceService)
        {
            _sourceService = sourceService;
        }
        [HttpGet("get-all")]
        public async Task<IActionResult> Get()
        {
            var sources = await _sourceService.GetAllSourcesAsync();
            return Ok(sources);
        }
        [HttpPost("add")]
        public async Task<IActionResult> Create([FromBody] SourceCreateRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var source = new SourceCreateRequest
            {
                Name = request.Name,
                Description = request.Description,
                Url = request.Url
            };

            try
            {
                var sourceId = await _sourceService.CreateSourceAsync(source);
                var createdSource = new { Id = sourceId, source.Name, source.Description, source.Url };
                return CreatedAtAction(nameof(Create), new { id = sourceId }, createdSource);
            }
            catch (Exception ex)
            {
                // Log the exception details
                return StatusCode(500, "An error occurred while creating the source. Please try again later.");
            }
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSource(int id, [FromBody] SourceCreateRequest source)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var result = await _sourceService.UpdateSource(id, source);
            if (!result)
            {
                return NotFound($"Source with ID {id} not found.");
            }

            return NoContent(); // Successfully updated
        }
    }



}

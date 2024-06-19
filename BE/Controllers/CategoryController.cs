using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NovelReadingApplication.Models;
using NovelReadingApplication.Services.Implementation;
using NovelReadingApplication.Services.Interfaces;

namespace NovelReadingApplication.Controllers
{
    [Route("api/category")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _categoryService;

        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet("get-all")]
        public async Task<IActionResult> Get()
        {
            var categories = await _categoryService.GetAllCategoriesAsync();
            return Ok(categories);
        }
        [Authorize]
        [HttpPost("add")]
        public async Task<IActionResult> Create([FromBody] CategoryCreateRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var category = new CategoryCreateRequest
            {
                Name = request.Name,
                Description = request.Description,
            };

            try
            {
                var catId = await _categoryService.CreateCategoryAsync(category);
                var createdCat = new { Id = catId, category.Name, category.Description};
                return CreatedAtAction(nameof(Create), new { id = catId }, createdCat);
            }
            catch (Exception ex)
            {
                // Log the exception details
                return StatusCode(500, "An error occurred while creating the category. Please try again later.");
            }
        }
        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCategory(int id, [FromBody] CategoryCreateRequest category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var result = await _categoryService.UpdateCategory(id, category);
            if (!result)
            {
                return NotFound($"Category with ID {id} not found.");
            }

            return NoContent(); // Successfully updated
        }
    }


}

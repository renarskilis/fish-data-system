using FishDataSystem.Data;
using FishDataSystem.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FishDataSystem.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FishesController(AppDbContext context) : ControllerBase
{
    // GET: api/fishes
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Fish>>> GetFishes()
    {
        return await context.Fishes.ToListAsync();
    }

    // GET: api/fishes/5
    [HttpGet("{id:int}")]
    public async Task<ActionResult<Fish>> GetFish(int id)
    {
        var fish = await context.Fishes.FindAsync(id);

        if (fish == null)
        {
            return NotFound();
        }

        return fish;
    }
    
    // DELETE: api/fishes - delete all records
    [HttpDelete]
    public async Task<IActionResult> DeleteAllRecords()
    {
        try
        {
            var allRecords = await context.Fishes.ToListAsync();
            context.Fishes.RemoveRange(allRecords);
            await context.SaveChangesAsync();
            return Ok();
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal Server Error: {ex.Message}");
        }
    }
}
using FishDataSystem.Data;
using FishDataSystem.Data.Interfaces;
using FishDataSystem.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FishDataSystem.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FishesController : ControllerBase
{
    private readonly AppDbContext _appDbContext;
    private readonly IFishRepository _fishRepository;
    
    public FishesController(AppDbContext appDbContext, IFishRepository fishRepository)
    {
        _appDbContext = appDbContext;
        _fishRepository = fishRepository;
    }

    // GET: api/Fishes
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Fish>>> GetFishes()
    {
        return await _appDbContext.Fishes.ToListAsync();
    }

    // GET: api/Fishes/{id}
    [HttpGet("{id:int}")]
    public async Task<ActionResult<Fish>> GetFish(int id)
    {
        var fish = await _appDbContext.Fishes.FindAsync(id);

        if (fish == null)
        {
            return NotFound();
        }

        return fish;
    }
    
    // GET: api/Fishes/{parameter}
    [HttpGet("{parameter}")]
    public async Task<ActionResult<List<Fish>>> GetFishesByParameter(string parameter)
    {
        return await _fishRepository.GetFishesByParameter(parameter);
    }
    
    // DELETE: api/Fishes
    [HttpDelete]
    public async Task<IActionResult> DeleteAllRecords()
    {
        try
        {
            var allRecords = await _appDbContext.Fishes.ToListAsync();
            _appDbContext.Fishes.RemoveRange(allRecords);
            await _appDbContext.SaveChangesAsync();
            return Ok();
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal Server Error: {ex.Message}");
        }
    }
}
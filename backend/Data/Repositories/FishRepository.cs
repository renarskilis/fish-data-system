using FishDataSystem.Data.Interfaces;
using FishDataSystem.Models;
using Microsoft.EntityFrameworkCore;

namespace FishDataSystem.Data.Repositories;

public class FishRepository : IFishRepository
{
    private readonly AppDbContext _appDbContext;

    public FishRepository(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;
    }

    public async Task<List<Fish>> GetFishesByParameter(string parameter)
    {
        var fishes = await _appDbContext.Fishes
            .FromSqlInterpolated($"SELECT * FROM get_fishes_by_parameter({parameter})")
            .ToListAsync();
        return fishes;
    }
}
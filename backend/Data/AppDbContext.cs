using FishDataSystem.Models;
using Microsoft.EntityFrameworkCore;

namespace FishDataSystem.Data;

public class AppDbContext : DbContext
{
    private readonly IConfiguration Configuration;

    public AppDbContext(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        // connect to postgresql database
        optionsBuilder.UseNpgsql(Configuration.GetConnectionString("DefaultConnection"));
    }

    public DbSet<Fish> Fishes { get; set; }
}
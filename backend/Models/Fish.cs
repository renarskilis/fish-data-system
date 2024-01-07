using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace FishDataSystem.Models;

[Table("fishes")]
public class Fish
{
    [Column("id")] public int Id { get; set; }

    [Column("project")] public string? Project { get; set; }

    [Column("trip")] public string? Trip { get; set; }

    [Column("longitude")] public decimal Longitude { get; set; }

    [Column("latitude")] public decimal Latitude { get; set; }

    [Column("datetime")] public DateTime DateTime { get; set; }

    [Column("station")] public string? Station { get; set; }

    [JsonProperty("Bott Depth M")]
    [Column("bottdepthm")]
    public decimal BottDepthM { get; set; }

    [JsonProperty("Sample ID")]
    [Column("sampleid")]
    public double SampleId { get; set; }

    [Column("parameter")] public string? Parameter { get; set; }

    [Column("tissue")] public string? Tissue { get; set; }

    [Column("species")] public string? Species { get; set; }

    [Column("individuals")] public double Individuals { get; set; }

    [Column("value")] public decimal Value { get; set; }

    [Column("units")] public string? Units { get; set; }

    [Column("quality")] public string? Quality { get; set; }
}
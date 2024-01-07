using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace FishDataSystem.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "fishes",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    project = table.Column<string>(type: "text", nullable: true),
                    trip = table.Column<string>(type: "text", nullable: true),
                    longitude = table.Column<decimal>(type: "numeric", nullable: false),
                    latitude = table.Column<decimal>(type: "numeric", nullable: false),
                    datetime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    station = table.Column<string>(type: "text", nullable: true),
                    bottdepthm = table.Column<decimal>(type: "numeric", nullable: false),
                    sampleid = table.Column<double>(type: "double precision", nullable: false),
                    parameter = table.Column<string>(type: "text", nullable: true),
                    tissue = table.Column<string>(type: "text", nullable: true),
                    species = table.Column<string>(type: "text", nullable: true),
                    individuals = table.Column<double>(type: "double precision", nullable: false),
                    value = table.Column<decimal>(type: "numeric", nullable: false),
                    units = table.Column<string>(type: "text", nullable: true),
                    quality = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_fishes", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "fishes");
        }
    }
}

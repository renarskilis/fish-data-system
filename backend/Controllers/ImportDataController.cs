using FishDataSystem.Data;
using FishDataSystem.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace FishDataSystem.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ImportDataController : ControllerBase
    {
        private readonly AppDbContext _context;

        private const string ExternalApiUrl =
            "https://data.gov.lv/dati/lv/api/3/action/datastore_search_sql?sql=SELECT * from \"e692e256-f041-4f54-b371-25374f4234ed\"";

        public ImportDataController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAndImportRecords()
        {
            try
            {
                var allRecords = await FetchDataFromExternalApi();

                // Save the records to the database
                _context.Fishes.AddRange(allRecords);
                await _context.SaveChangesAsync();

                // Return the list of all records
                return Ok(allRecords);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        private async Task<List<Fish>> FetchDataFromExternalApi()
        {
            var allRecords = new List<Fish>();

            using (var httpClient = new HttpClient())
            {
                var response = await httpClient.GetAsync(ExternalApiUrl);

                if (!response.IsSuccessStatusCode)
                {
                    throw new HttpRequestException(
                        $"External API request failed with status code: {response.StatusCode}");
                }

                var responseData = await response.Content.ReadAsStringAsync();
                var externalApiResponse = JsonConvert.DeserializeObject<ExternalApiResponse>(responseData);

                // Add the records from the current page to the list
                if (externalApiResponse?.Result?.Records != null)
                {
                    foreach (var record in externalApiResponse.Result.Records)
                    {
                        // Convert DateTime to UTC
                        if (record.DateTime.Kind != DateTimeKind.Utc)
                        {
                            record.DateTime = record.DateTime.ToUniversalTime();
                        }
                    }

                    allRecords.AddRange(externalApiResponse.Result.Records);
                }
            }

            return allRecords;
        }


        public class ExternalApiResponse
        {
            public Result? Result { get; } = new();
        }

        public class Result
        {
            public List<Fish>? Records { get; } = new();
            public Links? Links { get; } = new();
        }

        public class Links
        {
            public string? Next { get; } = string.Empty;
        }
    }
}
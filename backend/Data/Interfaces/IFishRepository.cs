using FishDataSystem.Models;

namespace FishDataSystem.Data.Interfaces;

public interface IFishRepository
{
    Task<List<Fish>> GetFishesByParameter(string parameter);
}

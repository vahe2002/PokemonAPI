using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PokemonBattle.Dto;
using PokemonBattle.Models;
using Newtonsoft.Json;

namespace PokemonBattle.Controllers
{
    [ApiController]
    public class PokemonController : ControllerBase
    {
        public async Task<PokemonDto> GetPokemon()
        {
            var httpClient = new HttpClient();
            var request = new HttpRequestMessage
                {RequestUri = new Uri("https://api.pokemontcg.io/v2/cards"), Method = HttpMethod.Get};
            request.Headers.Add("X-Api-Key", "9da01f86-04f6-4d87-b5f6-e8c53f7bc300");
            var response = await httpClient.SendAsync(request);
            var json = await response.Content.ReadAsStringAsync();
            var data = JsonConvert.DeserializeObject<PokemonEntity>(json);

            var firstPokemon = data.data.FirstOrDefault();
            return firstPokemon;
        }
    }
}
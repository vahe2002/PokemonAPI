using System.Collections.Generic;

namespace PokemonBattle.Models
{
    public class PokemonRoot    {
        public List<Pokemon> data { get; set; } 
        public int page { get; set; } 
        public int pageSize { get; set; } 
        public int count { get; set; } 
        public int totalCount { get; set; } 
    }
    public class Pokemon    {
        public string id { get; set; } 
        public string name { get; set; } 
        public string supertype { get; set; } 
        public List<string> subtypes { get; set; } 
        public string level { get; set; } 
        public string hp { get; set; } 
        public List<string> types { get; set; } 
        public string evolvesFrom { get; set; } 
        public List<Ability> abilities { get; set; } 
        public List<Attack> attacks { get; set; } 
        public List<Weakness> weaknesses { get; set; } 
        public List<Resistance> resistances { get; set; } 
        public List<string> retreatCost { get; set; } 
        public int convertedRetreatCost { get; set; } 
        public List<int> nationalPokedexNumbers { get; set; } 
        public Images images { get; set; } 
        public List<string> EvolvesTo { get; set; } 
        public string flavorText { get; set; } 
        public List<string> rules { get; set; } 
    }
    // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse); 
    public class Ability    {
        public string name { get; set; } 
        public string text { get; set; } 
        public string type { get; set; } 
    }

    public class Attack    {
        public string name { get; set; } 
        public List<string> cost { get; set; } 
        public int convertedEnergyCost { get; set; } 
        public string damage { get; set; } 
        public string text { get; set; } 
    }

    public class Weakness    {
        public string type { get; set; } 
        public string value { get; set; } 
    }

    public class Resistance    {
        public string type { get; set; } 
        public string value { get; set; } 
    }

    public class Images    {
        public string symbol { get; set; } 
        public string logo { get; set; } 
        public string small { get; set; } 
        public string large { get; set; } 
    }
}
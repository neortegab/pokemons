const { Pokemon } = require("../../../db.js");
const axios = require("axios");
const whosThatPokemon = "https://m.media-amazon.com/images/I/71WkWKFRSWL.png";

async function getPokemonById(id){
    try {
        let pokemonFromDb;
        //Checks if the string parsed as an id is a number or a uuid
        // "uuid" * 0 = NaN | 25c54bc5-1934-4f04-8fc0-4fbeeef997cb * 0 = NaN
        // "number" * 0 = 0 | "45" * 0 = 0
        if(id*0 != 0) return pokemonFromDb = await Pokemon.findByPk(id);
        else{
            const apiRequest = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const pokemonFromApi = apiRequest.data;
            const pokemon = {
                id: pokemonFromApi.id,
                name: pokemonFromApi.name,
                image: pokemonFromApi.sprites.front_default || pokemonFromApi.sprites.other.home.front_default || whosThatPokemon,
                hp: pokemonFromApi.stats[0].base_stat,
                attack: pokemonFromApi.stats[1].base_stat,
                defense: pokemonFromApi.stats[2].base_stat,
                speed: pokemonFromApi.stats[5].base_stat,
                height: pokemonFromApi.height,
                weight: pokemonFromApi.weight,
                types: pokemonFromApi.types.map((type) => type.type),
            }
            return pokemon;
        }
        
    } catch (error) {
        throw new Error("Error getting pokemon by id: " + error.message);
    }
}

module.exports = {
    getPokemonById
}
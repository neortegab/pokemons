const { Pokemon } = require("../../../db.js");
const axios = require("axios");
const { whosThatPokemon } = require("./utils/whosThatPokemon.js");

async function getPokemonById(id){
    try {
        let pokemonFromDb;
        //Checks if the string parsed as an id is a number or a uuid
        // "uuid" * 0 = NaN | 25c54bc5-1934-4f04-8fc0-4fbeeef997cb * 0 = NaN
        // "number" * 0 = 0 | "45" * 0 = 0
        if(id*0 != 0) return pokemonFromDb = await Pokemon.findByPk(id);
        else{
            const apiRequest = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const { data } = response;
            const { id, name, stats, height, weight, sprites, types } = data;
            const hp = stats[0].base_stat;
            const attack = stats[1].base_stat;
            const defense = stats[2].base_stat;
            const speed = stats[5].base_stat;
            let pokemon = {
                id,
                name,
                image: sprites.front_default 
                || sprites.other.home.front_default 
                || whosThatPokemon,
                hp,
                attack,
                defense,
                speed: speed || 0,
                height: height || 0,
                weight: weight || 0,
                types: types.map((type) => {
                    return type.type;
                })
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
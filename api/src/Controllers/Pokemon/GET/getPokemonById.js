const { Pokemon } = require("../../../db.js");
const axios = require("axios");

async function getPokemonById(id){
    try {
        let pokemonFromDb;
        //Checks if the string parsed as an id is a number or a uuid
        // "uuid" * 0 = NaN | 25c54bc5-1934-4f04-8fc0-4fbeeef997cb * 0 = NaN
        // "number" * 0 = 0 | "45" * 0 = 0
        if(id*0!=0) pokemonFromDb = await Pokemon.findByPk(id);
        if(pokemonFromDb) return pokemonFromDb;
        else{
            const apiRequest = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const pokemonFromApi = apiRequest.data;
            console.log("pokemon: ", apiRequest);
            return pokemonFromApi;
        }
        
    } catch (error) {
        throw new Error("Error getting pokemon by id: " + error.message);
    }
}

module.exports = {
    getPokemonById
}
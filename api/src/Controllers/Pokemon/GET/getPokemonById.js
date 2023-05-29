const { Pokemon } = require("../../../db.js");
const axios = require("axios");

async function getPokemonById(id){
    if(typeof id === "number" && id < 0) throw new Error("Id must be a positive number");
    try {
        if(typeof id === "number"){
            const apiRequest = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const pokemonFromApi = apiRequest.data;
            return pokemonFromApi;
        } else {
            const pokemonFromDb = await Pokemon.findOne({
                where: {
                    id: id
                }
            });
            return pokemonFromDb;
        }
    } catch (error) {
        throw new Error("Error getting pokemon by id: " + error.message);
    }
}

module.exports = {
    getPokemonById
}
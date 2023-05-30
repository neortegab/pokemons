const { Pokemon } = require("../../../db.js");
const { Op } = require("sequelize");
const axios = require("axios");

function filterPokemonByName(pokemons, name){
    let filteredPokemons = [];
    for(let i = 0; i < pokemons.length; ++i){
        let pokemonName = pokemons[i].name;
        if(pokemonName.includes(name.toLowerCase())) 
            filteredPokemons.push(pokemons[i]);
    }   
    return filteredPokemons;
}

async function getPokemonByName(name){
    try {
        const pokemonFromDb = await Pokemon.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            }
        });  
        if(pokemonFromDb.length !== 0) return pokemonFromDb;
        else{
            const apiRequest = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=1281`);
            const pokemonsFromApi = apiRequest.data.results;
            return filterPokemonByName(pokemonsFromApi, name);
        }
    } catch (error) {
        throw new Error("Error getting pokemon by id: " + error.message);
    }
}

module.exports = {
    getPokemonByName
}
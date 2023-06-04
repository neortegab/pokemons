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
    
        const apiRequest = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=1281`);
        const pokemonsFromApi = apiRequest.data.results;
        
        let urlsFromPokemonApi = [];
        for(let i = 0; i < pokemonsFromApi.length; i++) {
            urlsFromPokemonApi.push(axios.get(pokemonsFromApi[i].url));
        }
        
        let pokemons = [];
        await Promise.all(urlsFromPokemonApi).then(response => {
            for(let i = 0; i < response.length; i++) {
                const data = response[i].data;
                const pokemon = {
                    id: data.id,
                    name: data.name,
                    image: data.sprites.front_default,
                    height: data.height,
                    weight: data.weight,
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    speed: data.stats[5].base_stat,
                    types: data.types.map(type => type.type.name),
                };
                pokemons.push(pokemon)
            }
        });

        return pokemonFromDb.concat(filterPokemonByName(pokemons, name));
    } catch (error) {
        throw new Error("Error getting pokemon by id: " + error.message);
    }
}

module.exports = {
    getPokemonByName
}
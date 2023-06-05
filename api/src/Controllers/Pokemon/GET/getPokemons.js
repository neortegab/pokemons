const { Pokemon } = require("../../../db.js");
const axios = require("axios");
const { whosThatPokemon } = require("./utils/whosThatPokemon.js");

async function getPokemons() {
    try {
        let pokemons = [];

        const pokemonsFromDb = await Pokemon.findAll();
        pokemons.concat(pokemonsFromDb);

        let promises = [];
        await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1281")
        .then((request) => {
            const { data } = request;
            const { results } = data;
            
            for(let i = 0; i < results.length; i++) {
                promises.push(axios.get(results[i].url));
            }
        });
        
        await Promise.all(promises).then((responses) => {
            responses.forEach((response) => {
                const { data } = response;
                const { id, name, height, weight, sprites, types } = data;
                let pokemon = {
                    id,
                    name,
                    height,
                    weight,
                    image: sprites.front_default 
                    || sprites.other.home.front_default 
                    || whosThatPokemon,
                    types: types.map((type) => {
                        return type.type;
                    })
                }
                pokemons.push(pokemon);
            });
        });

        return pokemons;
    } catch (error) {
        throw new Error("There was an error requesting the pokemons:" + error.message);
    }
}

module.exports = {
    getPokemons
}
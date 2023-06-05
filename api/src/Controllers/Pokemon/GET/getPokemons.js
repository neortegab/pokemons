const { Pokemon } = require("../../../db.js");
const axios = require("axios");

async function getPokemons() {
    try {
        let pokemons = [];

        const pokemonsFromDb = await Pokemon.findAll();
        pokemons.concat(pokemonsFromDb);

        await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1281")
        .then((request) => {
            const { data } = request;
            const { results } = data;
            
            for(let i = 0; i < results.length; i++) {
                let pokemon = {
                    id: results[i].url.split("/")[6],
                    name: results[i].name,
                }
                pokemons.push(pokemon);
            }
        });  

        return pokemons;
    } catch (error) {
        throw new Error("There was an error requesting the pokemons:" + error.message);
    }
}

module.exports = {
    getPokemons
}
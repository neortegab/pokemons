const { Pokemon } = require("../../../db.js");
const axios = require("axios");

async function getPokemons() {
    try {
        let pokemons = [];

        const pokemonsFromDb = await Pokemon.findAll();
        pokemons.concat(pokemonsFromDb);

        const request = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1281");  
        const pokemonsApi = request.data.results;


        let urlsFromPokemonApi = [];
        for(let i = 0; i < pokemonsApi.length; i++) {
            urlsFromPokemonApi.push(axios.get(pokemonsApi[i].url));
        }

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
                    types: data.types.map(type => type.type),
                };
                pokemons.push(pokemon)
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
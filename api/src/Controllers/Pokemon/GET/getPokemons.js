 const axios = require("axios");

async function getPokemons() {
    try {
        let pokemons = [];
        const request = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1281");  
        const pokemonsApi = request.data.results;

        for(let i = 0; i < pokemonsApi.length; i++) {
            const { data } = await axios.get(pokemonsApi[i].url);
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
            pokemons.push(pokemon);
        }

        return pokemons;
    } catch (error) {
        throw new Error("There was an error requesting the pokemons:" + error.message);
    }
}

module.exports = {
    getPokemons
}
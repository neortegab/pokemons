const { Pokemon } = require("../../../db.js");
const axios = require("axios");

async function getPokemons() {
    try {
        const request = await axios.get("https://pokeapi.co/api/v2/pokemon");  
        const pokemons = request.data;
        return pokemons;
    } catch (error) {
        throw new Error("There was an error requesting the pokemons:" + error.message);
    }
}
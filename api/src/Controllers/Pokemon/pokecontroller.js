const { getPokemons } = require("./GET/getPokemons.js");
const { getPokemonById } = require("./GET/getPokemonById.js");  
const { getPokemonByName } = require("./GET/getPokemonByName.js");

module.exports = {
    getPokemons,
    getPokemonById,
    getPokemonByName
}
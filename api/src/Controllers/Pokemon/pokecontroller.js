const { getPokemons } = require("./GET/getPokemons.js");
const { getPokemonById } = require("./GET/getPokemonById.js");
const { getPokemonByName } = require("./GET/getPokemonByName.js");
const { createPokemon } = require("./POST/postPokemon.js");

module.exports = {
  getPokemons,
  getPokemonById,
  getPokemonByName,
  createPokemon,
};

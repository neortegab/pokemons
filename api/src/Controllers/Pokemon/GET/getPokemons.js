const { Pokemon, Type } = require("../../../db.js");
const axios = require("axios");
const { whosThatPokemon } = require("./utils/whosThatPokemon.js");

async function getPokemons() {
  try {
    let pokemons = [];

    const pokemonsFromDb = await Pokemon.findAll({ include: Type });

    for (let i = 0; i < pokemonsFromDb.length; i++) {
      const pokemon = pokemonsFromDb[i].dataValues;
      pokemons.push(pokemon);
    }

    let promises = [];
    await axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=1281")
      .then((request) => {
        const { data } = request;
        const { results } = data;

        for (let i = 0; i < results.length; i++) {
          promises.push(axios.get(results[i].url));
        }
      });

    await Promise.all(promises).then((responses) => {
      responses.forEach((response) => {
        const { data } = response;
        const { id, name, stats, height, weight, sprites, types } = data;
        const hp = stats[0].base_stat;
        const attack = stats[1].base_stat;
        const defense = stats[2].base_stat;
        const speed = stats[5].base_stat;
        let pokemon = {
          id,
          name,
          image:
            sprites.front_default ||
            sprites.other.home.front_default ||
            whosThatPokemon,
          hp,
          attack,
          defense,
          speed: speed || 0,
          height: height || 0,
          weight: weight || 0,
          types: types.map((type) => {
            return type.type;
          }),
        };
        pokemons.push(pokemon);
      });
    });

    return pokemons;
  } catch (error) {
    throw new Error(
      "There was an error requesting the pokemons:" + error.message
    );
  }
}

module.exports = {
  getPokemons,
};

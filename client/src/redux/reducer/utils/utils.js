export const orderPokemonsNameAscending = (pokemonA, pokemonB) => {
  return orderStringsAscending(pokemonA.name, pokemonB.name);
};

function orderStringsAscending(stringA, stringB) {
  if (!stringA.charAt(1) || !stringB.charAt(1)) return 0;
  else if (stringA.charAt().toLowerCase() < stringB.charAt().toLowerCase())
    return -1;
  else if (stringA.charAt().toLowerCase() > stringB.charAt().toLowerCase())
    return 1;
  else return orderStringsAscending(stringA.substring(1), stringB.substring(1));
}

export const orderPokemonsNameDescending = (pokemonA, pokemonB) => {
  return orderStringsDescending(pokemonA.name, pokemonB.name);
};

function orderStringsDescending(stringA, stringB) {
  if (!stringA.charAt(1) || !stringB.charAt(1)) return 0;
  else if (stringA.charAt().toLowerCase() < stringB.charAt().toLowerCase())
    return 1;
  else if (stringA.charAt().toLowerCase() > stringB.charAt().toLowerCase())
    return -1;
  else
    return orderStringsDescending(stringA.substring(1), stringB.substring(1));
}

export const orderPokemonsAttackAscending = (pokemonA, pokemonB) => {
  if (pokemonA.attack < pokemonB.attack) return -1;
  else if (pokemonA.attack > pokemonB.attack) return 1;
  else return 0;
};

export const orderPokemonsAttackDescending = (pokemonA, pokemonB) => {
  if (pokemonA.attack < pokemonB.attack) return 1;
  else if (pokemonA.attack > pokemonB.attack) return -1;
  else return 0;
};

export const checkPokemonHasTypes = (pokemon, types) => {
  let isType = false;
  for (let i = 0; i < pokemon.types.length && !isType; i++) {
    if (types.includes(pokemon.types[i].name)) isType = true;
  }
  return isType;
};

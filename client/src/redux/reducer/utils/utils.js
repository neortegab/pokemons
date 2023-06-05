export const orderPokemonsNameAscending = (pokemonA, pokemonB) => {
    if(pokemonA.name.toLowerCase().charAt(0) < pokemonB.name.toLowerCase().charAt(0))
        return -1;
    else if(pokemonA.name.toLowerCase().charAt(0) > pokemonB.name.toLowerCase().charAt(0))
        return 1;
    else 
        return 0;
}

export const orderPokemonsNameDescending = (pokemonA, pokemonB) => {
    if(pokemonA.name.toLowerCase().charAt(0) < pokemonB.name.toLowerCase().charAt(0))
        return 1;
    else if(pokemonA.name.toLowerCase().charAt(0) > pokemonB.name.toLowerCase().charAt(0))
        return -1;
    else 
        return 0;
}

export const orderPokemonsAttackAscending = (pokemonA, pokemonB) => {
    if(pokemonA.attack < pokemonB.attack)
        return -1;
    else if(pokemonA.attack > pokemonB.attack)
        return 1;
    else 
        return 0;
}

export const orderPokemonsAttackDescending = (pokemonA, pokemonB) => {
    if(pokemonA.attack < pokemonB.attack)
        return 1;
    else if(pokemonA.attack > pokemonB.attack)
        return -1;
    else 
        return 0;
}
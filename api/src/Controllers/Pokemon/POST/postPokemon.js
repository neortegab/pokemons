const { Pokemon, Type } = require ("../../../db.js");
const axios = require("axios");

async function verifyPokemon(pokemon){
    if(!pokemon.name) throw new Error("Pokemon must have a name");
    if(!pokemon.hp || pokemon.hp < 0) 
        throw new Error("Pokemon must have hp and it must be positive");
    if(!pokemon.attack || pokemon.attack < 0) 
        throw new Error("Pokemon must have attack and it must be positive");
    if(!pokemon.defense || pokemon.defense < 0) 
        throw new Error("Pokemon must have defense and it must be positive");
    if(!pokemon.image) throw new Error("Pokemon must have an image and it should be a URL");
    if(!pokemon.types || pokemon.types.length < 2) 
        throw new Error("Pokemon must have at least 2 types");
    for(let i = 0; i < pokemon.types.length; ++i){
        if(!pokemon.types[i].name) 
            throw new Error("Pokemon's types must have a name");
        else{
            pokemonTypeExist = await Type.findOne({
                where: {
                    name: pokemon.types[i].name.toLowerCase()
                }
            });
            if(!pokemonTypeExist) throw new Error(`Type ${pokemon.types[i].name} isn't an existing type`);
        }
    }
}

async function checkPokemonIsNotInDB(pokemon){
    const pokemonsInDb = await Pokemon.findOne({
        where: {
            name: pokemon.name.toLowerCase()
        }
    });
    if(pokemonsInDb) throw new Error(`Pokemon with name ${pokemon.name} already exists`);
}

async function checkPokemonIsNotInApi(pokemon){
    const apiRequest = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=1281`);
    const pokemonsFromApi = apiRequest.data.results;
    for(let i = 0; i < pokemonsFromApi.length; ++i){
        if(pokemon.name.toLowerCase() === pokemonsFromApi[i].name) 
            throw new Error(`Pokemon with name ${pokemon.name} already exists`);
    }
}

function capitalizePokemonName(name){
    let firstLetter = name.charAt(0).toUpperCase();
    let restOfName = name.slice(1);
    return firstLetter + restOfName;
}

async function createPokemon(pokemon){
    try {
        await verifyPokemon(pokemon);
        await checkPokemonIsNotInDB(pokemon);
        await checkPokemonIsNotInApi(pokemon);
        let { 
            name,
            image,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            types
        } = pokemon;
        name = capitalizePokemonName(name);
        const newPokemon = await Pokemon.create({
            name: name,
            image: image,
            hp: hp,
            attack: attack,
            defense: defense,
            speed: speed,
            height: height,
            weight: weight,
            types: types
        }, {
            include: [ Type ]
        });
        return newPokemon;

    } catch (error) {
        throw new Error("Error creating pokemon: " + error.message);       
    }
}

module.exports = {
    createPokemon
}
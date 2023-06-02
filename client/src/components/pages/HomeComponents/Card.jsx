import React from 'react'

export default function Card(props) {
    const { pokemon } = props;

    function showTypes(){
        const currentPokemonTypes = pokemon.types;
        for(let i = 0; i < currentPokemonTypes.length; i++){
            <p>{currentPokemonTypes[i].type.name}</p>
        }
    }

  return (
    <div>
        <p>{pokemon.id}</p>
        <h3>{pokemon.name}</h3>
        <img src={pokemon.sprites.front_defaults} alt={pokemon.name} />
        {showTypes()}
    </div>
  )
}

import React from 'react'

export default function Card(props) {
    const { pokemon } = props;

    function showTypes(){
        pokemon.types.map(type => <p>{type}</p>);        
    }

  return (
    <div>
        <p>{pokemon.id}</p>
        <h3>{pokemon.name}</h3>
        <img src={pokemon.image} alt={pokemon.name} />
        {showTypes()}
    </div>
  )
}

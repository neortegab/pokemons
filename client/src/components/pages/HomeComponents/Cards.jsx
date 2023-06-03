import React from 'react';
import Card from './Card';
import './styles/Cards.css'

export default function Cards(props) {
  const { pokemons } = props;

  return (
    <div className='cards-container'>
      {pokemons.map((pokemon, index) => {return index < 8 && <Card key={pokemon.id} pokemon={pokemon}/>})}
    </div>
  )
}

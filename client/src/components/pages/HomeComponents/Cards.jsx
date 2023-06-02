import React from 'react';
import Card from './Card';
import './styles/Cards.css'

export default function Cards(props) {
  const { pokemons } = props;

  function showPokemons(pokemons){
    for(let i = 0; i < pokemons.length; i++){
      <Card key={pokemons[i].id} pokemon={pokemons[i]}/>
    }
  }
  return (
    <div className='cards-container'>
      {showPokemons(pokemons)}
    </div>
  )
}

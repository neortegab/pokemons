import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import './styles/Cards.css'

export default function Cards(props) {
  const { pokemons } = props;

  const { pageNumber } = useSelector(state => state);

  return (
    <div className='cards-container'>
      {
        pokemons
        .slice( 
          (pageNumber*8)-8
        , 
          (pageNumber*8) 
        )
        .map(
          (pokemon) =>    
            <Card key={pokemon.id} pokemon={pokemon}/>
        )
      }
    </div>
  )
}

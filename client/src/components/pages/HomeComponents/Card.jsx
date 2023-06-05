import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './styles/Card.css'

export default function Card(props) {
    const { pokemonId } = props;

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
      async function obtainPokemon(){
        await axios.get(`http://localhost:3001/pokemons/${pokemonId}`)
        .then(res => {
          const { data } = res;
          setPokemon(data);
        })
      }
      obtainPokemon();
    }, [pokemonId]);

  return (
    <div className='pokemon-card-container'>
      <div>
        <div className="pokemon-card-info">
          <h3>{pokemon.name}</h3>
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <div className="pokemon-types-container">
          {pokemon?.types?.map((type, index) => <p key={index}>{type.name}</p>)}
        </div>
      </div>
    </div>
  )
}

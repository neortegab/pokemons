import React, { useState } from 'react'
import './styles/NavBar.css'
import pokeballIcon from '../../../images/pokeball.ico'

export default function NavBar(props) {

    const { searchPokemon } = props;

    const [name, setName] = useState('');

    function checkErrors(e){
        let input = e.target.value;
        if(input.match(/\d/)) 
            alert("Pokemons don't have numbers in their names!");
        else setName(input);
    }

  return (
    <div className='navbar-container'>
        <img src={pokeballIcon} alt='navbar icon pokeball'/>
        <input type="text" value={name} onChange={checkErrors}/>
        <button onClick={searchPokemon()}>Search</button>
    </div>
  )
}

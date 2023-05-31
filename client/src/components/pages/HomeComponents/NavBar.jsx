import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
        <Link to='/home'>
            <img src={pokeballIcon} alt='navbar icon pokeball'/>
        </Link>
        <input type="text" value={name} onChange={checkErrors}/>
        <button onClick={searchPokemon()}>Search</button>
    </div>
  )
}

import React, { useEffect } from 'react'
import NavBar from './HomeComponents/NavBar'
import SideBar from './HomeComponents/SideBar';
import Cards from './HomeComponents/Cards';
import Pages from './HomeComponents/Pages';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons } from '../../redux/actions/actions';
import './HomeComponents/styles/Home.css'

export default function Home() {

  const { allPokemons } = useSelector(state => state);
  
  const dispatch = useDispatch();

  function searchPokemon(){
    //
  }

  useEffect(() => {
    dispatch(getPokemons())
  }, [dispatch])

  return ( 
  <div className='home-container'>
    <>
     <NavBar searchPokemon={searchPokemon}/>
    </>
    <div className='content-container'>
        <SideBar/>
      <div className='cards-page'>
        {allPokemons && <Cards pokemons={allPokemons}/>}
        <Pages />
      </div>
    </div>
  </div>
  )
}

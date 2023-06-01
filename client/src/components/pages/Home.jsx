import React from 'react'
import NavBar from './HomeComponents/NavBar'
import SideBar from './HomeComponents/SideBar';
import Cards from './HomeComponents/Cards';
import Pages from './HomeComponents/Pages';
import './HomeComponents/styles/Home.css'

export default function Home() {

  function searchPokemon(){
    console.log("Searching pokemon");
  }

  return (
    <div className='home-container'>
      <div>
        <NavBar searchPokemon={searchPokemon}/>
      </div>
      <div className='content-container'>
        <SideBar/>
        <div className='cards-page'>
          <Cards/>
          <Pages />
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import NavBar from './HomeComponents/NavBar'
import SideBar from './HomeComponents/SideBar';

export default function Home() {

  function searchPokemon(){
    console.log("Searching pokemon");
  }

  return (
    <>
      <NavBar searchPokemon={searchPokemon}/>
      <SideBar/>
    </>
  )
}

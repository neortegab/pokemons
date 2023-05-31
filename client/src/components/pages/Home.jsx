import React from 'react'
import NavBar from './HomeComponents/NavBar'

export default function Home() {

  function searchPokemon(){
    console.log("Searching pokemon");
  }

  return (
    <>
      <NavBar searchPokemon={searchPokemon}/>
    </>
  )
}

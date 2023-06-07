import React from "react";
import "./styles/Display.css";
import PokemonInfo from "./PokemonInfo";

export default function Display(props) {
  const { pokemon } = props;

  return (
    <div className="detail-display-container">
      <h2>Who's That Pokemon?!</h2>
      <PokemonInfo pokemon={pokemon} />
    </div>
  );
}

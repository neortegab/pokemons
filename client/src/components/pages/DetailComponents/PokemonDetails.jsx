import React from "react";
import InputType from "./InputType";
import "./styles/PokemonDetails.css";

export default function PokemonDetails(props) {
  const { pokemon } = props;
  return (
    <div className="detail-text-container">
      <h2>{pokemon && pokemon.name}</h2>
      <InputType attribute="HP" value={pokemon.hp} />
      <InputType attribute="ATTK" value={pokemon.attack} />
      <InputType attribute="DEF" value={pokemon.defense} />
      {pokemon && pokemon.speed && (
        <>
          <InputType attribute="SPD" value={pokemon.speed} />
        </>
      )}
      {pokemon && pokemon.height && (
        <>
          <InputType attribute="Height" value={pokemon.height} />
        </>
      )}
      {pokemon && pokemon.weight && (
        <>
          <InputType attribute="Weight" value={pokemon.weight} />
        </>
      )}
      <h3>Types: </h3>
      <div className="detail-types-container">
        {pokemon &&
          pokemon?.types?.map((type, index) => <p key={index}>{type.name}</p>)}
      </div>
    </div>
  );
}

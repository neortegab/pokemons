import React from "react";
import PokemonDetails from "./PokemonDetails";
import Type from "../../Type";
import "./styles/PokemonInfo.css";

export default function PokemonInfo(props) {
  const { pokemon } = props;

  return (
    <div className="detail-info-container">
      <PokemonDetails pokemon={pokemon} />
      <div className="detail-image-container">
        <img src={pokemon && pokemon.image} alt={pokemon.name} />
        <div className="detail-types-container">
          {pokemon &&
            pokemon?.types?.map((type, index) => (
              <Type key={index} name={type.name} />
            ))}
        </div>
      </div>
    </div>
  );
}

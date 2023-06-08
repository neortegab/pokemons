import React from "react";
import { NavLink } from "react-router-dom";
import Type from "../../Type";
import "./styles/Card.css";

export default function Card(props) {
  const { pokemon } = props;
  return (
    <NavLink className="pokemon-card-navlink" to={`pokemon/${pokemon.id}`}>
      <div className="pokemon-card-container">
        <div className="pokemon-card-info">
          <h3>{pokemon.name}</h3>
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <div className="pokemon-types-container">
          {pokemon?.types?.map((type, index) => (
            <Type key={index} name={type.name} />
          ))}
        </div>
      </div>
    </NavLink>
  );
}

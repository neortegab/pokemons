import React, { useEffect, useState } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Detail() {
  const { id } = useParams();

  const { pokemons } = useSelector((state) => state);

  const [pokemon, setPokemon] = useState({});

  const [nextPokemon, setNextPokemon] = useState("");

  const [previousPokemon, setPreviousPokemon] = useState("");

  useEffect(() => {
    async function getPokemon() {
      await axios.get(`http://localhost:3001/pokemons/${id}`).then((res) => {
        const data = res.data;
        setPokemon(data);
      });
    }
    getPokemon();
    for (let i = 0; i < pokemons.length; i++) {
      if (pokemons[i].id === (id * 0 === 0 ? parseInt(id) : id)) {
        if (pokemons[i + 1]) {
          setNextPokemon(pokemons[i + 1].id);
        }
        if (pokemons[i - 1]) {
          setPreviousPokemon(pokemons[i - 1].id);
        }
      }
    }
  }, [id, pokemons]);

  return (
    <div>
      <div>
        <div>
          <h1>Who's That Pokemon?!</h1>
          <p>{pokemon && pokemon.id}</p>
          <h2>{pokemon && pokemon.name}</h2>
          <h4>HP: {pokemon && pokemon.hp}</h4>
          <h4>ATTK: {pokemon && pokemon.attack}</h4>
          <h4>DFS: {pokemon && pokemon.defense}</h4>
          {pokemon && pokemon.speed && <h4>Speed: {pokemon.speed}</h4>}
          {pokemon && pokemon.height && <h4>Height: {pokemon.height}</h4>}
          {pokemon && pokemon.weight && <h4>Weight: {pokemon.weight}</h4>}
          <h3>Types: </h3>
          {pokemon &&
            pokemon?.types?.map((type, index) => (
              <p key={index}>{type.name}</p>
            ))}
        </div>
        <div>
          <img src={pokemon && pokemon.image} alt={pokemon.name} />
        </div>
      </div>
      <Link to={"/home"}>
        <button>Back home</button>
      </Link>
      {pokemons && previousPokemon !== "" && (
        <NavLink to={`/pokemon/${previousPokemon}`}>
          <button>Previous</button>
        </NavLink>
      )}
      {pokemons && nextPokemon !== "" && (
        <NavLink to={`/pokemon/${nextPokemon}`}>
          <button>Next</button>
        </NavLink>
      )}
    </div>
  );
}

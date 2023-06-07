import React, { useEffect, useState } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Display from "./DetailComponents/Display";
import "./styles/Detail.css";

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
    <div className="detail-container">
      <Link to={"/home"}>
        <button>Back home</button>
      </Link>
      <p className="detail-container-id">{pokemon && pokemon.id}</p>
      <Display pokemon={pokemon} />
      <div>
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
    </div>
  );
}

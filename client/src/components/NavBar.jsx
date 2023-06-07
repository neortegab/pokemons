import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchName } from "../redux/actions/actions";
import { NavLink, useLocation } from "react-router-dom";
import Button from "./Button";
import "./styles/NavBar.css";
import pokeballIcon from "../images/pokeball.ico";

export default function NavBar() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const { pathname } = useLocation();

  function searchPokemon(name) {
    dispatch(searchName(name));
  }

  function checkErrors(e) {
    let input = e.target.value;
    if (input.match(/\d/)) alert("Pokemons don't have numbers in their names!");
    else setName(input);
  }

  return (
    <div className="navbar-container">
      <NavLink to="/home">
        <img src={pokeballIcon} alt="navbar icon pokeball" />
      </NavLink>
      {pathname !== "/pokemon/create" && (
        <NavLink to="/pokemon/create">
          <Button text="Create" />
        </NavLink>
      )}
      {pathname === "/home" && (
        <>
          <input type="text" value={name} onChange={checkErrors} />
          <Button text="Search" onClick={() => searchPokemon(name)} />
        </>
      )}
    </div>
  );
}

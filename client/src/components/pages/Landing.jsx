import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";
import bulbasaur from "../../images/bulb.png";
import charmander from "../../images/charman.png";
import squirtle from "../../images/squirt.png";
import logo from "../../images/pokemon_logo.png";

export default function Landing() {
  return (
    <div className="landing-container">
      <section className="pokemons-landing">
        <div id="pokemon-logo">
          <img src={logo} alt="Pokemon logo" />
        </div>
        <div className="pokemons-pics">
          <img src={bulbasaur} alt="bulbasaur" />
          <img src={squirtle} id="squirtle" alt="squirtle" />
          <img src={charmander} alt="charmander" />
        </div>
      </section>
      <div className="login">
        Login
        <Link to="/home">Catch them all!</Link>
      </div>
    </div>
  );
}

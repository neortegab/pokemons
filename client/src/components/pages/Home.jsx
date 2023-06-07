import React, { useEffect } from "react";
import Cards from "./HomeComponents/Cards";
import Pages from "./HomeComponents/Pages";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions/actions";
import "./styles/Home.css";

export default function Home() {
  const { allPokemons, pokemons } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!allPokemons.length > 0) dispatch(getPokemons());
  }, [dispatch, allPokemons]);

  return (
    <div className="home-container">
      {
        <>
          {allPokemons && <Cards pokemons={pokemons} />}
          <Pages />
        </>
      }
    </div>
  );
}

import {
  GET_POKEMONS,
  CREATE_POKEMON,
  GET_TYPES,
  CHANGE_PAGE,
  SEARCH_NAME,
  FILTER_POKEMONS,
  FILTER_POKEMONS_ORIGIN,
  ORDER_POKEMONS_NAME,
  ORDER_POKEMONS_ATTACK,
  RESET,
} from "./types";

import axios from "axios";

export const getPokemons = () => async (dispatch) => {
  const res = await axios.get("http://localhost:3001/pokemons/");
  dispatch({
    type: GET_POKEMONS,
    payload: res.data,
  });
};

export const changePage = (pageNumber) => async (dispatch) => {
  dispatch({
    type: CHANGE_PAGE,
    payload: pageNumber,
  });
};

export const searchName = (name) => async (dispatch) => {
  const res = await axios.get(`http://localhost:3001/pokemons/?name=${name}`);
  dispatch({
    type: SEARCH_NAME,
    payload: res.data,
  });
};

export const getTypes = () => async (dispatch) => {
  const res = await axios.get("http://localhost:3001/types/");
  dispatch({
    type: GET_TYPES,
    payload: res.data,
  });
};

export const filterPokemon = (type) => async (dispatch) => {
  dispatch({
    type: FILTER_POKEMONS,
    payload: type,
  });
};

export const filterPokemonOrigin = (origin) => async (dispatch) => {
  dispatch({
    type: FILTER_POKEMONS_ORIGIN,
    payload: origin,
  });
};

export const orderPokemonsByName = (order) => async (dispatch) => {
  dispatch({
    type: ORDER_POKEMONS_NAME,
    payload: order,
  });
};

export const orderPokemonsByAttack = (order) => async (dispatch) => {
  dispatch({
    type: ORDER_POKEMONS_ATTACK,
    payload: order,
  });
};

export const reset = () => async (dispatch) => {
  dispatch({
    type: RESET,
  });
};

export const createPokemon = (pokemon) => async (dispatch) => {
  let payload = {};
  await axios
    .post("http://localhost:3001/pokemons/", pokemon)
    .then((res) => {
      payload = res.data;
      alert("Pokemon succesfully created!");
    })
    .catch((err) => {
      console.log(err);
      const { message } = err.response.data;
      alert("There was an error creating the pokemon: " + message);
    });
  dispatch({
    type: CREATE_POKEMON,
    payload,
  });
};

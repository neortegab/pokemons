import {
    GET_POKEMONS,
    CHANGE_PAGE,
    SEARCH_NAME
} from './types';

import axios from 'axios';

export const getPokemons = () => async dispatch => {
    const res = await axios.get('http://localhost:3001/pokemons/');
    dispatch({
        type: GET_POKEMONS,
        payload: res.data
    });
}

export const changePage = (pageNumber) => async dispatch => {
    dispatch({
        type: CHANGE_PAGE,
        payload: pageNumber
    });
}

export const searchName = (name) => async dispatch => {
    const res = await axios.get(`http://localhost:3001/pokemons/?name=${name}`);
    dispatch({
        type: SEARCH_NAME,
        payload: res.data
    });
}

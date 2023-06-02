import {
    GET_POKEMONS
} from './types';

import axios from 'axios';

export const getPokemons = () => async dispatch => {
    const res = await axios.get('http://localhost:3000/pokemons/');
    dispatch({
        type: GET_POKEMONS,
        payload: res.data
    });
}
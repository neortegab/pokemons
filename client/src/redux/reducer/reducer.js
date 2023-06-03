import {
    GET_POKEMONS
} from '../actions/types';

const initialState = {
    allPokemons: []
}

export default function reducer(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: payload
            }
        default:
            return state;
    }
}
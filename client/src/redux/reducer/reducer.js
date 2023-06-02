import {
    GET_POKEMONS
} from '../actions/types';

const initialState = {
    allPokemons: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload
            }
        default:
            return state;
    }
}
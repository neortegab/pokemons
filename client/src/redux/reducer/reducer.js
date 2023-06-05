import {
    GET_POKEMONS,
    CHANGE_PAGE,
    SEARCH_NAME
} from '../actions/types';

const initialState = {
    allPokemons: [],
    pokemons: [],
    pageNumber: 1
}

export default function reducer(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: payload,
                pokemons: payload
            }
        case CHANGE_PAGE:
            return {...state, pageNumber: payload};
        case SEARCH_NAME:
            return {...state, pokemons: payload};
        default:
            return state;
    }
}
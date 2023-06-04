import {
    GET_POKEMONS,
    CHANGE_PAGE
} from '../actions/types';

const initialState = {
    allPokemons: [],
    pageNumber: 1
}

export default function reducer(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: payload
            }
        case CHANGE_PAGE:
            return {...state, pageNumber: payload};
        default:
            return state;
    }
}
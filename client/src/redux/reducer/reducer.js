import axios from 'axios';
import {
    GET_POKEMONS,
    GET_TYPES,
    CHANGE_PAGE,
    FILTER_POKEMONS,
    SEARCH_NAME
} from '../actions/types';

const initialState = {
    allPokemons: [],
    pokemons: [],
    types: [],
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
        case GET_TYPES:
            return {...state, types: payload};
        case FILTER_POKEMONS:
            return payload === "All" ? 
            {...state, pokemons: state.allPokemons} 
            : {
                ...state, 
                pokemons: state.pokemons.filter((pokemon) => 
                    pokemon.types.map((type) => type.name).includes(payload)
                )
            };
        default:
            return state;
    }
}
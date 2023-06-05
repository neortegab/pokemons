import {
    GET_POKEMONS,
    GET_TYPES,
    CHANGE_PAGE,
    FILTER_POKEMONS,
    FILTER_POKEMONS_ORIGIN,
    SEARCH_NAME,
    ORDER_POKEMONS_ATTACK,
    ORDER_POKEMONS_NAME
} from '../actions/types';

import {
    orderPokemonsNameAscending,
    orderPokemonsNameDescending,
    orderPokemonsAttackAscending,
    orderPokemonsAttackDescending
} from './utils/utils';

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
        case FILTER_POKEMONS_ORIGIN:
            switch(payload){
                case "All":
                    return {...state, pokemons: state.allPokemons};
                case "Api":
                    return {...state, pokemons: state.allPokemons.filter((pokemon) => pokemon.id * 0 === 0)};
                default:
                    return {...state, pokemons: state.allPokemons.filter((pokemon) => pokemon.id * 0 !== 0)};
            }
        case ORDER_POKEMONS_NAME:
            switch(payload){
                case "D":
                    return {
                        ...state, 
                        pokemons: state.pokemons
                                    .sort((a,b)=> orderPokemonsNameDescending(a,b))
                    };
                default:
                    return {
                        ...state, 
                        pokemons: state.pokemons
                                    .sort((a,b)=> orderPokemonsNameAscending(a,b))
                    };
            }
        case ORDER_POKEMONS_ATTACK:
            switch(payload){
                case "D":
                    return {
                        ...state, 
                        pokemons: [...state.pokemons]
                                    .sort((a,b)=> orderPokemonsAttackAscending(a,b))
                    };
                default:
                    return {
                        ...state, 
                        pokemons: [...state.pokemons]
                                    .sort((a,b)=> orderPokemonsAttackDescending(a,b))
                    };
            }
        default:
            return state;
    }
}
import axios from 'axios';

const URL = 'https://pokeapi.co/api/v2/pokemon/';


export const FETCH_POKEMON = 'FETCH_POKEMON';

export function fetchPokemon(name) {
    const url = `${URL}${name}`; 
    const req = axios.get(url);
    console.log('request:', req);
    return {
        type: FETCH_POKEMON,
        payload: req
    };
}
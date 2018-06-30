import { combineReducers } from 'redux';
import PokemonReducer from './reducer_pokemon';


const rootReducer = combineReducers({
  pokemons: PokemonReducer
});

export default rootReducer;
import React, { Component } from 'react';
import './App.css';
import SearchBar from '../containers/searchBar';
import PokemonList from '../containers/pokemon_list';

class App extends Component {
  render() {
    return (
      <div>
        <div className="search-bar">
            <SearchBar/>
        </div>
        <div>
            <PokemonList />          
        </div>
      </div>
        

    );
  }
}

export default App;

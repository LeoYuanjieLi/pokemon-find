import React, { Component } from 'react';
import './App.css';
import SearchBar from '../containers/searchBar';


class App extends Component {
  render() {
    return (
      <div className="search-bar">
          <SearchBar />
      </div>
    );
  }
}

export default App;

import React, { Component }from 'react';

import '../index.css';
export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state= {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onInputChange(e) {
        this.setState({term: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <label className="sr-only" htmlFor="inlineFormInput">PokemonName</label>
                    <input 
                        type="text" 
                        className="form-control mb-2 mr-sm-2 mb-sm-0 col-sm-9" 
                        id="inlineFormInput" 
                        placeholder="Type a Pokemon Name!" 
                        value={this.state.term}
                        onChange={this.onInputChange}
                        />
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
        )
    }
}
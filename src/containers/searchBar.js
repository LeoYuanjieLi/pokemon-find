import React, { Component }from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPokemon } from '../actions/index';

import '../index.css';
class SearchBar extends Component {
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
        this.props.fetchPokemon(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return (
                <form className="form-inline mb-4" onSubmit={this.handleSubmit}>
                    <label className="sr-only text-16px" htmlFor="inlineFormInput">PokemonName</label>
                    <input 
                        type="text" 
                        className="form-control mb-2 mr-sm-2 mb-sm-0 col-sm-9" 
                        id="inlineFormInput" 
                        placeholder="Type a Pokemon Name!" 
                        value={this.state.term}
                        onChange={this.onInputChange}
                        required
                        />
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchPokemon}, dispatch);
}

export default connect (null, mapDispatchToProps)(SearchBar);
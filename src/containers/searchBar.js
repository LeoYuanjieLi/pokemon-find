import React, { Component }from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPokemon } from '../actions/index';

import '../index.css';
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state= {
            term: '',
            searched: []
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toLowerCase = this.toLowerCase.bind(this);
    }
    toLowerCase(term) {
        return term.toLowerCase();
    }
    onInputChange(e) {
        this.setState({term: this.toLowerCase(e.target.value)});
    }

    handleSubmit(e) {
        e.preventDefault();
        if(parseInt(this.state.term, 10) > 151) {
            alert('We are classic, so we only have the original 151 pokemons!');
        }else if (parseInt(this.state.term, 10) < 1) {
            alert('Come on! You know that pokemon index cannot go below 1!');
        }
        else{
            this.props.fetchPokemon(this.state.term);
            this.setState({term: ''});            
        }

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
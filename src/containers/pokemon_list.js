import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProgressBar } from 'react-bootstrap';

class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.renderPokemon = this.renderPokemon.bind(this);
        this.titleCase = this.titleCase.bind(this);
    }

    titleCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    renderPokemon(pokemonData) {
        if(!pokemonData) {
            return
        }

        return (

                <div className="card d-inline-block pokemon-card shadow" key={pokemonData.id}>
                    <img className="card-img-top" src={pokemonData.sprites.front_default} alt="Card" />
                    <div className="card-body">
                        <h5>Index: {pokemonData.id}</h5><h2 className="card-title">{this.titleCase(pokemonData.name)}</h2>

                        <span className='no-margin'>Height: {pokemonData.height} </span><span className='no-margin'> Weight: {pokemonData.weight}</span>
                        <p className='no-margin'>Speed</p>
                        <ProgressBar className='no-margin' bsStyle="success" now={pokemonData.stats[0].base_stat} />
                        <p className='no-margin'>Special Defense</p>
                        <ProgressBar className='no-margin' bsStyle="success" now={pokemonData.stats[1].base_stat} />
                        <p className='no-margin'>Special Attack</p>
                        <ProgressBar className='no-margin' bsStyle="success" now={pokemonData.stats[2].base_stat} />
                        <p className='no-margin'>Defense</p>
                        <ProgressBar className='no-margin' bsStyle="success" now={pokemonData.stats[3].base_stat} />
                        <p className='no-margin'>Attack</p>
                        <ProgressBar className='no-margin' bsStyle="success" now={pokemonData.stats[4].base_stat} />
                        <p className='no-margin'>HP</p>
                        <ProgressBar className='no-margin' bsStyle="success" now={pokemonData.stats[5].base_stat} />
                    </div>
                </div>

        )
    } 

    render() {
        return (
            <div className="pokemon-cards-list">
                {this.props.pokemons.map(this.renderPokemon)}
            </div>

        )

    }
}


function mapStateToProps({pokemons}) {
    return {pokemons};
}

export default connect (mapStateToProps)(PokemonList);
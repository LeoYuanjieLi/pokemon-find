import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProgressBar } from 'react-bootstrap';

class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.renderPokemon = this.renderPokemon.bind(this);
    }

    renderPokemon(pokemonData) {
        return (
            // <tr key={pokemonData.id}>
            //     <td><img src={pokemonData.sprites.front_default} alt="temp"/></td>
            //     <td>{pokemonData.name}</td>
            //     <td>{pokemonData.stats[0].base_stat}</td>
            //     <td>{pokemonData.stats[1].base_stat}</td>    
            //     <td>{pokemonData.stats[2].base_stat}</td>    
            //     <td>{pokemonData.stats[3].base_stat}</td>    
            //     <td>{pokemonData.stats[4].base_stat}</td>    
            //     <td>{pokemonData.stats[5].base_stat}</td>                    
            // </tr>

                <div className="card d-inline-block pokemon-card shadow" key={pokemonData.id}>
                    <img className="card-img-top" src={pokemonData.sprites.front_default} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{pokemonData.name}</h5>
                        <p>Speed</p>
                        <ProgressBar bsStyle="success" now={pokemonData.stats[0].base_stat} />
                        <p>Special Defense</p>
                        <ProgressBar bsStyle="success" now={pokemonData.stats[1].base_stat} />
                        <p>Special Attack</p>
                        <ProgressBar bsStyle="success" now={pokemonData.stats[2].base_stat} />
                        <p>Defense</p>
                        <ProgressBar bsStyle="success" now={pokemonData.stats[3].base_stat} />
                        <p>Attack</p>
                        <ProgressBar bsStyle="success" now={pokemonData.stats[4].base_stat} />
                        <p>HP</p>
                        <ProgressBar bsStyle="success" now={pokemonData.stats[5].base_stat} />
                    </div>
                </div>

        )
    } 

    render() {
        return (
            <div>
                {this.props.pokemons.map(this.renderPokemon)}
            </div>

        )

    }
}


function mapStateToProps({pokemons}) {
    return {pokemons};
}

export default connect (mapStateToProps)(PokemonList);
import React, { Component } from 'react';
import { connect } from 'react-redux';


class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.renderPokemon = this.renderPokemon.bind(this);
    }

    renderPokemon(pokemonData) {
        return (
            <tr key={pokemonData.id}>
                <td><img src={pokemonData.sprites.front_default} alt="temp"/></td>
                <td>{pokemonData.name}</td>
                <td>{pokemonData.stats[0].base_stat}</td>
                <td>{pokemonData.stats[1].base_stat}</td>    
                <td>{pokemonData.stats[2].base_stat}</td>    
                <td>{pokemonData.stats[3].base_stat}</td>    
                <td>{pokemonData.stats[4].base_stat}</td>    
                <td>{pokemonData.stats[5].base_stat}</td>                    
            </tr>
        )
    } 

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Icon</th>   
                        <th>Name</th>
                        <th>Speed</th>
                        <th>Special Defense</th>
                        <th>Special Attack</th>
                        <th>Defense</th>
                        <th>Attack</th>
                        <th>HP</th>                                             
                    </tr>
                </thead>
                <tbody>
                    {this.props.pokemons.map(this.renderPokemon)}
                </tbody>
            </table>

        )

    }
}


function mapStateToProps({pokemons}) {
    return {pokemons};
}

export default connect (mapStateToProps)(PokemonList);
import React, { Component } from 'react';

export default class PokemonList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Speed</th>
                        <th>Special Defense</th>
                        <th>Special Attack</th>
                        <th>Defense</th>
                        <th>Attack</th>
                        <th>HP</th>                                                
                    </tr>
                </thead>
            </table>

        )

    }
}
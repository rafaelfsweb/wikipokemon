import React, { Component } from 'react';
import axios from 'axios';

export default class PokemonDetail extends Component {
    state = {
        name: '',
        pokemonIndex: '',
        imageUrl: '',
    };

    async componentDidMount() {
        const { pokemonIndex } = this.props.match.params;

        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`;
        const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}`;

        const pokemonRes = await axios.get(pokemonUrl);

        const name = pokemonRes.data.name;
        const imageUrl = pokemonRes.data.sprites.front_default;
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

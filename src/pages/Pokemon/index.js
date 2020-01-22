import React, { Component } from 'react';
import axios from 'axios';

export default class PokemonDetail extends Component {
    state = {
        name: '',
        pokemonIndex: '',
        imageUrl: '',
        types: [],
        description: '',
        height: '',
        weight: '',
    };

    async componentDidMount() {
        const { pokemonIndex } = this.props.match.params;

        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`;
        const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}`;

        const pokemonRes = await axios.get(pokemonUrl);

        const name = pokemonRes.data.name;
        const imageUrl = pokemonRes.data.sprites.front_default;

        const height = pokemonRes.data.height;
        const weight = pokemonRes.data.weight;

        const types = pokemonRes.data.types.map(t => t.type.name);

        await axios.get(pokemonSpeciesUrl).then(res => {
            let description = '';
            res.data.flavor_text_entires.some(f => {
                if (f.language.name === 'en') {
                    description = f.flavor_text;
                    return;
                }
            })
        })
    }

    render() {
        return (
            <div>
asasas
            </div>
        )
    }
}

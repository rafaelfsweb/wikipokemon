import React, { useState } from './node_modules/react'
import axios from './node_modules/axios'

export default function PokemonItem({ pokemonName }) {

    let apiDomain = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;

    const [pokemonImg, setPokemonImg] = useState()

    axios.get(apiDomain)
    .then(function(response){
        setPokemonImg(response.data.sprites.front_default)
    }); 

    return (
        <header>
            <img src={pokemonImg} alt="Pokemon" />
            <div className="pokemon-info">
                <strong>{pokemonName}</strong>
            </div>
        </header>
    )
}

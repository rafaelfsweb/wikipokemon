import React, { Component } from 'react';

import PokemonList from './../../Components/PokemonList';

export default class Pokedex extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <PokemonList />
          </div>    
        </div>
      </div>
    )
  }
}

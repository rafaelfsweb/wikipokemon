import React, { Component } from 'react';
import axios from 'axios';

import PokemonCard from './PokemonCard';
import Pagination from './Pagination';

export default class PokemonList extends Component {

  state = {
    urlApi : "https://pokeapi.co/api/v2/pokemon",
    pokemon: null,
    nextPage: null,
    previousPage: null,
  };

  async componentDidMount() {
    const resp = await axios.get(this.state.urlApi);
    this.setState({pokemon: resp.data['results']});
    this.setState({currentPage: this.state.urlApi});
    this.setState({nextPage: resp.data.next});
    this.setState({previousPage: resp.data.previous});
    console.log(this.state.pokemon)
  }

  render() {
    return (
      <React.Fragment>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(p => (
              <>
              <PokemonCard 
                key={p.name}
                name={p.name}
                url={p.url}
              />
              </>
            ))}
              <Pagination 
                  nextPage={this.state.nextPage} 
                  previousPage={this.state.previousPage}
              />
          </div>
        ) : (
          <h1>Loading ... </h1>
        )}
      </React.Fragment>
    );
  }
}

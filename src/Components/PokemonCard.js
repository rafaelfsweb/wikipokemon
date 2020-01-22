import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';

const Sprite = styled.img`
    width: 80px;
    height: 80px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus,
    &:hover,
    &:visited,
    &link,
    &:active {
        text-decoration: none;
    }
`;

export default class PokemonCard extends Component {

    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: '',
    };

    componentDidMount() {
        const { name, url } = this.props;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

        this.setState({
            name,
            imageUrl,
            pokemonIndex
        })
    }

    render() {
        return (
            <div className="col-md-3 col-sm-6 mb-5"> 
                <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
                    <div className="card">
                        <h5 className="card-header">{this.state.pokemonIndex}</h5>
                        <Sprite className="card-img-top rounded mx-auto mt-2"
                            src={this.state.imageUrl}>
                        </Sprite>
                        <div className="card-body mx-auto">
                            <h6 className="card-title">{this.state.name}</h6>
                        </div>
                    </div>
                </StyledLink>
            </div>
        )
    }
}

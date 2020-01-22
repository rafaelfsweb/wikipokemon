import React from 'react';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import Pokedex from './pages/Pokedex';
import Berries from './pages/Berries';

export default function Routes() {
    return (
        <BrowserRouter>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li><Link to={'/'} className="nav-link"> Pokedex </Link></li>
                    <li><Link to={'/berries'} className="nav-link">Berries</Link></li>
                </ul>
            </nav>
            <hr />
                <Switch>
                    <Route path="/" exact component={Pokedex} />
                    <Route path="/pokedex" exact component={Pokedex} />
                    <Route path="/berries" component={Berries} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

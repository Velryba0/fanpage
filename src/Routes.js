import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Header from "./common/Header";

const Routes = () => {
    return (
        <>
        <Header />
        <Switch>
            <Route exact path = '/' component={Home} />
        </Switch>
        </>
    )
}

export default Routes;
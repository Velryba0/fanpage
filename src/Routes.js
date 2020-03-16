import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './views/Home';

const Routes = () => {
    return (
        <>
        <Switch>
            <Route exact path = '/' component={Home} />
        </Switch>
        </>
    )
}

export default Routes;
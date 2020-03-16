import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga';
import './index.css';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';

import mySaga from "./redux/sagas/sagas";
import rootReducer from './redux/index';

// create the saga middleware
const locationMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(
    rootReducer,
    compose(applyMiddleware(locationMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

// then run the saga
locationMiddleware.run(mySaga)


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

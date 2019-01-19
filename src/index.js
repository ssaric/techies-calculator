import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';

import { routerMiddleware } from 'react-router-redux';

import createSagaMiddleware from 'redux-saga';

import logger from 'redux-logger';
import App from './App';

import * as sagas from './sagas/sagas';
import rootReducer from './reducers/rootReducer';

const history = createHistory();

const routerMiddlewareInstance = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    rootReducer,
    process.env.NODE_ENV !== 'production'
        ? applyMiddleware(sagaMiddleware, routerMiddlewareInstance, logger)
        : applyMiddleware(sagaMiddleware, routerMiddlewareInstance)
);

sagaMiddleware.run(sagas.rootSagas);

ReactDOM.render(
    <App store={store} history={history} />,
    document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
        module.hot.accept('./App', () => {
            ReactDOM.render(
                <App store={store} history={history} />,
                document.getElementById('root')
            );
        });
        module.hot.accept('./reducers/rootReducer', () => {
            store.replaceReducer(rootReducer);
        });
    }
}

import thunk from 'redux-thunk';
import { routerMiddleware, routerReducer as router } from 'react-router-redux';
import {createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createHistory from 'history/createBrowserHistory';
// import { composeWithDevtools } from 'redux-devtools-extension';

import { testReducer } from '../reducers';

const reducer = combineReducers({
    register: testReducer,
    router
})


export const history = createHistory();

const store = createStore(reducer, undefined, compose(window.devToolsExtension ? window.devToolsExtension() : f => f, applyMiddleware(thunk, routerMiddleware(history))));

export default store;
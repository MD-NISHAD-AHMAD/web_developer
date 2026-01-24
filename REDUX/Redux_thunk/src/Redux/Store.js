import { applyMiddleware, legacy_createStore, compose } from "redux";

import { thunk } from 'redux-thunk';

import { todoReducer } from './Reducer';

const composeEnhancers = (typeof window !== 'undefined' && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_) || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const mystore = legacy_createStore(todoReducer, enhancer);
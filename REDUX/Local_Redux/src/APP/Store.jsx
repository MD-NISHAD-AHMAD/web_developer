import { combineReducers, legacy_createStore, applyMiddleware, compose } from 'redux';

import {  todoReducer } from '../Reducer/Todos/Reducer';
import { myOwnReducer } from '../Reducer/Counts/Reducer';
import { authReducer } from '../Reducer/AUTH/Reducer';


export const rootReducer = combineReducers({
    todos: todoReducer,
    counter: myOwnReducer,
    auths: authReducer
});

const logger = (store) => (next) => (action) => {
    return typeof action === 'function'
    ? action(store.dispatch, store.getStore) : next(action)
};

const composeEnhancers = (typeof window !== 'undefined' &&
 window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_) || 
 compose;

 const enhance = composeEnhancers(applyMiddleware(logger));

export const myOwnStore = legacy_createStore(rootReducer, enhance);




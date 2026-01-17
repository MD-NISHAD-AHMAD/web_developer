import { combineReducers, legacy_createStore } from 'redux';

import {  todoReducer } from '../Reducer/Todos/Reducer';
import { myOwnReducer } from '../Reducer/Counts/Reducer';
import { authReducer } from '../Reducer/AUTH/Reducer';


export const rootReducer = combineReducers({
    todos: todoReducer,
    counter: myOwnReducer,
    auths: authReducer
})

export const myOwnStore = legacy_createStore(rootReducer, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_());




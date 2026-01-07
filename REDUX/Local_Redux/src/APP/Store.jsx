import { legacy_createStore } from 'redux';

import {  todoReducer } from '../Reducer/Todos/Reducer';

export const myOwnStore = legacy_createStore(todoReducer);
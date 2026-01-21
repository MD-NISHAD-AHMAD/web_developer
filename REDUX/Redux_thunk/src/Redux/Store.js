import { legacy_createStore } from "redux";

import { todoReducer } from './Reducer';

export const mystore = legacy_createStore(todoReducer);
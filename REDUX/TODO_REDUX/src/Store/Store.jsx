import { legacy_createStore } from 'redux';
import { todoReducer } from '../Components/TodoReducer.jsx';

export const store = legacy_createStore(todoReducer);

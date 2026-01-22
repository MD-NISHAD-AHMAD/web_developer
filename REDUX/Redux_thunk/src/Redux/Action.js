import * as types from '../Redux/ActionTypes';

const getTodosRequest = () => {
    return { type: types.GET_TODOS_SUCCESS};
};

const getTodosFailure = (payload) => {
    return { type: types.GET_TODOS_SUCCESS, payload};
};

const getTodosSuccess = (payload) => {
    return { type: types.GET_TODOS_SUCCESS, payload};
};

const addTodosRequest = () => {
    return{ type: types.ADD_TODO_SUCCESS }
};

const addTodosFailure = (payload) => {
    return { type: types.ADD_TODO_SUCCESS, payload }
};

const addTodosSuccess = (payload) => {
    return {type: types.ADD_TODO_SUCCESS, payload }
};

export { getTodosRequest, getTodosSuccess, getTodosFailure, addTodosRequest, addTodosFailure, addTodosSuccess };
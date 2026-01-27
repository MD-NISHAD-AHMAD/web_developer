import * as types from '../Redux/ActionTypes';
import axios from 'axios';

const getTodosRequest = () => {
    return { type: types.GET_TODOS_SUCCESS};
};

const getTodosFailure = (payload) => {
    return { type: types.GET_TODOS_SUCCESS, payload};
};

const getTodosSuccess = (payload) => {
    return { type: types.GET_TODOS_SUCCESS, payload};
};

const getApi = (dispatch) => {
    dispatch(getTodosRequest);
    axios
    .get('http://localhost:8080/todo')
    .then((res) => dispatch(getTodosSuccess(res.data)))
    .catch((err) => {
        dispatch(getTodosFailure);
        console.log(err);
    })
}

const addTodosRequest = () => {
    return{ type: types.ADD_TODO_SUCCESS }
};

const addTodosFailure = (payload) => {
    return { type: types.ADD_TODO_SUCCESS, payload }
};

const addTodosSuccess = (payload) => {
    return {type: types.ADD_TODO_SUCCESS, payload }
};



export { getTodosRequest, getTodosSuccess, getTodosFailure, addTodosRequest, addTodosFailure, getApi, addTodosSuccess };
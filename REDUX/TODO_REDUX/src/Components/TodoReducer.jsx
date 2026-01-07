import * as types from './TodoAction';

const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case types.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload),
      };

    case types.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, idx) =>
          idx === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };

    default:
      return state;
  }
};

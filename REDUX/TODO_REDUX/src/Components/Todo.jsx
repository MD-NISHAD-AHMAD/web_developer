import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as types from './TodoAction';

export const Todo = () => {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch({
      type: types.ADD_TODO,
      payload: { text, completed: false },
    });
    setText('');
  };

  const handleToggle = (index) => {
    dispatch({ type: types.TOGGLE_TODO, payload: index });
  };

  const handleDelete = (index) => {
    dispatch({ type: types.DELETE_TODO, payload: index });
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ margin: '10px 0' }}>Todo App</h1>

      <div>
        <input
          type="text"
          placeholder="Enter todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ padding: '5px', fontSize: '14px' }}
        />
        <button
          onClick={handleAdd}
          style={{ marginLeft: '5px', padding: '5px 10px', cursor: 'pointer' }}
        >
          Add
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ margin: '5px 0', display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(index)}
            />
            <span style={{
              marginLeft: '5px',
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}>
              {todo.text}
            </span>
            <button
              onClick={() => handleDelete(index)}
              style={{ marginLeft: '5px', padding: '2px 6px', cursor: 'pointer' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

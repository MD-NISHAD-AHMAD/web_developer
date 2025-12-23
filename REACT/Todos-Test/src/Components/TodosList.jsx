import React from "react";
import { TodoActions } from "./TodoActions";

export const TodoList = ({ todoData, setTodoData }) => {
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      isComplete: false,
      isEdits: false,
    };

    setTodoData((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodoData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <h1>Todo App</h1>

      <TodoActions onAdd={addTodo} />

      {todoData.map((item) => (
        <div key={item.id} style={{ marginTop: "10px" }}>
          <span>{item.text}</span>
          <button onClick={() => deleteTodo(item.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

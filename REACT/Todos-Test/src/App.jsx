import { useState } from "react";
import "./App.css";
import { TodoList } from "./Components/TodoList";
import { TodoAction } from "./Components/TodoAction";

function App() {
  const [todoData, setTodoData] = useState([]);

  return (
    <> 
    <TodosList />
    </>
  )
}

export { App };

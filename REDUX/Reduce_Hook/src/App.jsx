import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";

import PrivateRoute from "./Routes/Private_Route";

import { Todo } from "./Pages/Todo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/todo"
          element={
            <PrivateRoute>
              <Todo />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


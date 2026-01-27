import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App.jsx";
import { myStore } from "./REDUX/Store.js";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={myStore}>
    <App />
  </Provider>
);

import { useRef, useState } from "react";
import "./App.css";

function App() {
  const valueRef = useRef(null);
  const [text, setText] = useState("");

  const handleFunctions = () => {
    const value = valueRef.current.value;
    setText(value);
    valueRef.current.value = "";
  };

  return (
    <>
      <h1>useRef hook</h1>
      <h3>TEXT : {text}</h3>

      <input
        type="text"
        ref={valueRef}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleFunctions();
          }
        }}
      />
    </>
  );
}

export  {App}

import { useState } from "react";

import './App.css'

import { useLocalStorage } from "./HOOKS/UseLocalStorage";
import { useToggle } from "./HOOKS/useToggle";

function App() {
  const [string, setString] = useState('');

  const [value, setValue] = useLocalStorage('name', []);

  const [toggle, setToggle] = useToggle();
  // console.log('🚀 ~ App.jsx ~ useToggle:', useToggle);
  

  return (
    <>
      <input type="text" onChange={(e) => setString(e.target.value)} />
      
      <button onClick={() => setValue(string)}> click</button>

    {toggle && <h1>i am invoked</h1>}

    <button onClick={() => setToggle(true, false)}>on</button>
    {/* <button onClick={() => setToggle(true)}>on</button> */}
    </>
  );
}

export { App };
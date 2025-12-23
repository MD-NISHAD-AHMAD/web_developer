import { useState } from 'react'
import './App.css'

import { CounterEffect } from './Components/CounterEffect'

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
    {toggle && <CounterEffect />}
    <button 
    onClick={() => {
      setToggle((prev) => !prev);
    }}
    >Toggle</button>
    </>
  );
}

export default App;


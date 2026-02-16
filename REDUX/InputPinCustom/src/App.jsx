import { useState } from "react";

import { InputBox } from "./Components/InputBox";

export const App = () => {
  const style = {
    padding: "10px",
    margin: "5px",
    width: "15px",
    textAlign: "center"
  }

  const [Value, setValue] = useState("")
  console.log('🚀 ~ App.jsx ~ Value:', Value);

  return (
    <>
      <InputBox setMainVal={(v) => setValue(v)} perBox={1} length={4} style={style} />
    </>
  )

}
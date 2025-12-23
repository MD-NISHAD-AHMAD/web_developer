import { useContext, useState } from "react";
import { contextCreation } from "../context/ContextComponents";

import { Navigate } from "react-router-dom";

export const Login = () => {
  const { isLogin, setLogin } = useContext(contextCreation);
  const [text, setText] = useState("");
  const [textPass, setTextPass] = useState("");

  const handleSubmit = (e) => {
    console.log("hello form submit func");
    e.preventDefault();
    if (
      text.length <= 0 &&
      textPass.length <= 0 &&
      text === "" &&
      textPass === ""
    )
      return;
    setLogin(!isLogin);
  };

  if (isLogin) {
    console.log("hello");

    return <Navigate to="/" />;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="useName">user name</label>
          <input
            id="useName"
            type="text"
            placeholder="enter your name..."
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">user name</label>
          <input
            id="password"
            type="password"
            placeholder="enter your password..."
            onChange={(e) => setTextPass(e.target.value)}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

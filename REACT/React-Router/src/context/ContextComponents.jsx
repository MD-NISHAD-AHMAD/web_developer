import { createContext, useState } from "react";

export const ContextCreation = createContext(null);

export const ContextComponents = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLogin, setLogin] = useState({
    email: "mehfoozkhan33@gmail.com",
    pass: "11222333",
  });

  return (
    <ContextCreation.Provider value={{ data, setData, isLogin, setLogin }}>
      {children}
    </ContextCreation.Provider>
  );
};

import { useContext } from "react";

import { ContextCreation } from "../context/ContextComponents";

export const Home = () => {
  const { data, setData } = useContext(ContextCreation);

  console.log("home data", data, setData);

  return (
    <>
      <h1>Home</h1>
    </>
  );
};

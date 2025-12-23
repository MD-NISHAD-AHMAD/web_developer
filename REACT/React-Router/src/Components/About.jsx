import { useContext } from "react";

import { ContextCreation } from "../context/ContextComponents.jsx";

export const About = () => {
  const value = useContext(ContextCreation);
  console.log("about data", value);

  return (
    <>
      <h1>About</h1>
    </>
  );
};

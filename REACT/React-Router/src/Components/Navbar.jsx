import { useContext } from "react";
import { contextCreation } from "../context/ContextComponents";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { data, setData } = useContext(contextCreation);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </div>
    </>
  );
};

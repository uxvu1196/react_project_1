import React from "react";
import "./Navbar.css";
import reactLogo from "../../images/reactjs-icon.png";

const Navbar = () => {
  return (
    <nav>
      <img src={reactLogo} alt="react logo" />
      <h1 className="navName">ReactFacts</h1>
      <h2>React Course - Project 1</h2>
    </nav>
  );
};

export default Navbar;

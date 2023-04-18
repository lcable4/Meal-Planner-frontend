import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <h2> I am navbar</h2>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/Login">
        <button>Login</button>
      </Link>
      <Link to="/Register">
        <button>Register</button>
      </Link>
    </div>
  );
};

export default Navbar;

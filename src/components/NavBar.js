import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="bg-red-600">
      <nav>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/post">
          Post
        </NavLink>
        <NavLink to="/blog">
          blog
        </NavLink>
        <NavLink to="/project">
          Project
        </NavLink>
        <NavLink to="/about">
          About me
        </NavLink>


      </nav>
    </header>
  );
};

export default NavBar;

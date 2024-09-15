// src/components/NavBar.js
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar" role="navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/actors">Actors</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/movie/:id">Movie</NavLink>
    </nav>
  );
}

export default NavBar;

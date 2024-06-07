import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <nav className="navbar bg-success">
      <h1>
        <i className="fab fa-github" /> GitHub Finder
      </h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <label htmlFor="checkbox">Dark Mode: </label>
        <input
          id="checkbox"
          type="checkbox"
          value={darkMode}
          onClick={() => setDarkMode(!darkMode)}
        />
      </div>
    </nav>
  );
}

export default Navbar;

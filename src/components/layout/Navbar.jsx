import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

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
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            fontSize: "1.5em",
            marginLeft: "1rem",
          }}
        >
          {darkMode ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

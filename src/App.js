import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";
import { ThemeContext } from "./components/ThemeContext";
const App = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`App ${darkMode ? "bg-dark" : ""}`}>
      <Router>
        <Navbar />
        <Home />
      </Router>
    </div>
  );
};
export default App;

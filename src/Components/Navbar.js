import React from "react";
import "./Navbar.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">🤖 Bot Battlr</h1>
      <div className="navbar-links">
        <a href="#collection">Bot Collection</a>
        <a href="#army">Your Army</a>
      </div>
    </nav>
  );
}

export default Navbar;

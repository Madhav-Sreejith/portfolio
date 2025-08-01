import React from 'react';
import { Link } from 'react-router-dom';  

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/project">Projects</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

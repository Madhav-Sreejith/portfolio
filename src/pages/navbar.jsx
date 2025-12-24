import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <NavLink to="/" className="logo">
        MyPortfolio
      </NavLink>

      {/* HAMBURGER ICON (mobile) */}
      <div 
        className="menu-icon" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/project">
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

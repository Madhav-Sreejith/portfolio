import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <NavLink to="/" className="logo" onClick={closeMenu}>
        MyPortfolio
      </NavLink>

      {/* HAMBURGER ICON */}
      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div>

      {/* DESKTOP NAV */}
      <ul className="nav-links desktop">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/project">Projects</NavLink></li>
      </ul>

      {/* MOBILE NAV (ANIMATED) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="nav-links mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <li onClick={closeMenu}><NavLink to="/" end>Home</NavLink></li>
            <li onClick={closeMenu}><NavLink to="/about">About</NavLink></li>
            <li onClick={closeMenu}><NavLink to="/project">Projects</NavLink></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;

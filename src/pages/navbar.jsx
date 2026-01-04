import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Navbar.css";

/* ✅ Replace REPO_NAME with your actual repo name */
const RESUME_URL =
  "https://raw.githubusercontent.com/Madhav-Sreejith/REPO_NAME/main/resume.pdf";

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
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* DESKTOP NAV */}
      <ul className="nav-links desktop">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/project" className={({ isActive }) => isActive ? "active" : ""}>
            Projects
          </NavLink>
        </li>
        <li>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="nav-links mobile"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <li onClick={closeMenu}>
              <NavLink to="/" end>Home</NavLink>
            </li>
            <li onClick={closeMenu}>
              <NavLink to="/about">About</NavLink>
            </li>
            <li onClick={closeMenu}>
              <NavLink to="/project">Projects</NavLink>
            </li>
            <li onClick={closeMenu}>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;

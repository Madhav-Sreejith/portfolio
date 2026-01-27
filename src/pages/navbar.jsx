import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Navbar.css";

const RESUME_URL =
  "https://raw.githubusercontent.com/Madhav-Sreejith/portfolio/main/resume.pdf";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* LOGO */}
      <NavLink to="/" className="logo" onClick={closeMenu}>
        <span className="logo-mark">MS</span>
        <span className="logo-text">Portfolio</span>
      </NavLink>

      {/* HAMBURGER ICON */}
      <button
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* DESKTOP NAV */}
      <ul className="nav-links desktop">
        <li>
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/project" className={navLinkClass}>
            Projects
          </NavLink>
        </li>
        <li>
          <a
            className="nav-link nav-link-resume"
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <li onClick={closeMenu}>
              <NavLink to="/" end className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li onClick={closeMenu}>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li onClick={closeMenu}>
              <NavLink to="/project" className={navLinkClass}>
                Projects
              </NavLink>
            </li>
            <li onClick={closeMenu}>
              <a
                className="nav-link nav-link-resume"
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
    </motion.nav>
  );
}

export default Navbar;

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <h2 className="logo-text">
          Iyanu<span>Adisa</span>
        </h2>
      </div>

      <nav className="nav desktop-nav">
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#projects" className="nav-link">
          Works
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </nav>

      <div className="menu-icon" onClick={() => setMenuOpen(true)}>
        <FiMenu size={26} />
      </div>

      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <FiX className="close-icon" onClick={() => setMenuOpen(false)} />
        </div>

        <nav className="sidebar-nav">
          <a
            href="#home"
            className="sidebar-link"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="sidebar-link"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="sidebar-link"
            onClick={() => setMenuOpen(false)}
          >
            Works
          </a>
          <a
            href="#contact"
            className="sidebar-link"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>

      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}></div>
      )}
    </header>
  );
}

export default Header;

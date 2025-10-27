function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h2 className="logo-text">
          Iyanu<span>Adisa</span>
        </h2>
      </div>

      <nav className="nav">
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
    </header>
  );
}

export default Header;

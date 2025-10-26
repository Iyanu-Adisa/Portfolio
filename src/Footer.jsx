import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} <span>Iyanu Adisa</span>. All rights
          reserved.
        </p>

        <div className="footer-icons">
          <a
            href="https://github.com/Iyanu-Adisa"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/adisa-iyanu-09b513390/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:adisaiyanuakorede@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

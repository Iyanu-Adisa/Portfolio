import { FaArrowRight } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I’m <span>Iyanu Adisa</span>
          </h1>
          <h2 className="hero-subtitle">
            Crafting <span>Modern Front-End</span> Experiences
          </h2>
          <p className="hero-desc">
            A passionate front-end developer focused on building visually
            appealing, responsive, and high-performing web experiences. I turn
            creative ideas into clean, interactive interfaces using React,
            JavaScript, and modern design principles.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-btn">
              View My Work <FaArrowRight className="icon-inline" />
            </a>
            <a href="#contact" className="hero-btn-outline">
              Let’s Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

import { FaFigma, FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-text">
          <h1 className="about-title">
            About <span>Me</span>
          </h1>
          <p className="about-desc">
            I’m <span>Iyanu Adisa</span> a passionate and curious{" "}
            <span>Front-End Developer</span> taking my first steps into the tech
            world. I love transforming creative ideas into clean, responsive,
            and user-friendly web experiences.
          </p>
          <p className="about-desc">
            Though I’m still early in my journey, I’ve already built{" "}
            <span>MovieBox</span> a React-based project that reflects my growing
            interest in interactive UI design and smooth user experiences. I’m
            constantly learning, improving, and open to exploring new
            technologies that help me grow as a developer.
          </p>
          <p className="about-desc">
            Beyond coding, I’m someone who values learning, creativity, and
            collaboration. I’m eager to work on meaningful projects and
            contribute to teams that inspire growth and innovation.
          </p>
          <a href="#contact" className="about-btn">
            Let’s Connect
          </a>
          <div className="skills">
            <h3 className="skills-title">Skills</h3>
            <div className="tech-logos">
              <FaFigma className="tech-icon figma" title="Figma" />
              <FaCss3Alt className="tech-icon css" title="CSS" />
              <FaHtml5 className="tech-icon html" title="HTML" />
              <FaJs className="tech-icon js" title="JavaScript" />
              <FaReact className="tech-icon react" title="React" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

import {
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiFirebase, SiVite, SiVercel } from "react-icons/si";

function About() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="tech-icon html" /> },
    { name: "CSS3", icon: <FaCss3Alt className="tech-icon css" /> },
    { name: "JavaScript", icon: <FaJs className="tech-icon js" /> },
    { name: "React.js", icon: <FaReact className="tech-icon react" /> },
    { name: "Firebase", icon: <SiFirebase className="tech-icon firebase" /> },
    { name: "Git", icon: <FaGitAlt className="tech-icon git" /> },
    { name: "GitHub", icon: <FaGithub className="tech-icon github" /> },
    { name: "Vite", icon: <SiVite className="tech-icon vite" /> },
    { name: "Vercel", icon: <SiVercel className="tech-icon vercel" /> },
    { name: "Figma", icon: <FaFigma className="tech-icon figma" /> },
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-text">
          <h1 className="about-title">
            About <span>Me</span>
          </h1>
          <p className="about-desc">
            I’m <span>Iyanu Adisa</span>, a <span>Front-End Developer</span> and
            Computer Science graduate focused on building responsive,
            user-friendly web applications with React.js, JavaScript (ES6+), and
            standard CSS.
          </p>
          <p className="about-desc">
            From real-time database platforms like my{" "}
            <span>University Hostel Allocation System</span> to API-driven apps
            like <span>MovieBox</span> and utility tools like the{" "}
            <span>Universal CGPA Calculator</span>, I enjoy turning complex
            ideas into clean, intuitive interfaces.
          </p>
          <p className="about-desc">
            Backed by hands-on industry internship experience, I value clean
            code, thoughtful design, and team collaboration. I’m currently open
            to front-end roles and freelance opportunities where I can build
            impactful digital products.
          </p>
          <a href="#contact" className="about-btn">
            Let’s Connect
          </a>

          <div className="skills">
            <h3 className="skills-title">Skills & Tools</h3>
            <div className="tech-logos">
              {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  {skill.icon}
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

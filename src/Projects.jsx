import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "University Hostel Allocation System",
    image: "/Images/hostel-system.png",
    description:
      "A web-based platform designed to automate and streamline student housing assignments, featuring user authentication, real-time room availability tracking, and database management.",
    tech: ["React.js", "Standard CSS", "Firebase", "Vite"],
    liveUrl: "https://oui-hostel-management.vercel.app/",
    codeUrl: "https://github.com/Iyanu-Adisa/oui-hostel-management",
  },
  {
    title: "Universal CGPA Calculator",
    image: "/Images/cgpa-calculator.png",
    description:
      "A responsive academic utility supporting 4.0, 5.0, and 7.0 grading scales. Includes automatic localStorage persistence and one-click PDF transcript export.",
    tech: ["React.js", "JavaScript", "Standard CSS", "html2pdf.js"],
    liveUrl: "https://cgpa-calculator-nine-jet.vercel.app/",
    codeUrl: "https://github.com/Iyanu-Adisa/cgpa-calculator",
  },
  {
    title: "MovieBox",
    image: "/Images/Homepage.png",
    description:
      "An interactive movie discovery platform powered by the TMDB API. Features real-time search, detailed cast and movie pages, and a persistent favorites list saved in localStorage.",
    tech: ["React.js", "TMDB API", "Standard CSS", "Vercel"],
    liveUrl: "https://movie-box-ebon-ten.vercel.app/",
    codeUrl: "https://github.com/Iyanu-Adisa/Movie-Box",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="project-showcase">
        <motion.h1
          className="projects-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Recent <span>Work</span>
        </motion.h1>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-card-body">
                <h2 className="project-name">{project.title}</h2>
                <p className="project-overview">{project.description}</p>

                <div className="project-tags">
                  {project.tech.map((item, i) => (
                    <span className="tech-tag" key={i}>
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn"
                  >
                    Live Demo <FaExternalLinkAlt className="btn-icon" />
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn-outline"
                  >
                    Code <FaGithub className="btn-icon" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

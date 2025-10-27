import { FaReact, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiFramer, SiVercel } from "react-icons/si";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="project-showcase">
        <motion.h1
          className="projects-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Recent <span>Work</span>
        </motion.h1>

        <motion.div
          className="project-detail"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="project-text">
            <h2 className="project-name">MovieBox</h2>
            <p className="project-tagline">
              A sleek, interactive movie discovery platform built with React.
            </p>

            <p className="project-overview">
              MovieBox allows users to browse trending, top-rated, and popular
              movies using data fetched from the TMDB API. It includes features
              like real-time search, detailed movie pages, favorites system
              (likes saved in localStorage), and a smooth UI with animations and
              responsive design.
            </p>

            <h3 className="section-heading">Tech Stack</h3>
            <motion.div
              className="tech-logos"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <FaReact title="React.js" className="project-tech-icon react" />
              <SiJavascript
                title="JavaScript"
                className="project-tech-icon js"
              />
              <FaCss3Alt title="CSS3" className="project-tech-icon css" />
              <SiFramer
                title="Framer Motion"
                className="project-tech-icon framer"
              />
              <FaGithub title="GitHub" className="project-tech-icon github" />
              <SiVercel title="Vercel" className="project-tech-icon vercel" />
            </motion.div>
          </div>

          <motion.div
            className="project-gallery"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {[
              { src: "/Images/Homepage.png", label: "Homepage" },
              { src: "/Images/Detailspage.png", label: "Movie Details" },
              { src: "/Images/Favoritespage.png", label: "Favorite Movies" },
            ].map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="gallery-item"
              >
                <img src={img.src} alt={img.label} />
                <div className="img-overlay">{img.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="project-links"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <a
              href="https://movie-box-ebon-ten.vercel.app/"
              target="_blank"
              className="project-btn"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Iyanu-Adisa/Movie-Box"
              target="_blank"
              className="project-btn-outline"
            >
              View Code
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;

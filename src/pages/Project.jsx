import React from "react";
import { motion } from "framer-motion";
import "../styles/Project.css";

const projects = [
  {
    title: "MediKart",
    description:
      "An online medicine catalog & ordering system with search, category filters, and cart. Built with React for the frontend and a mock API for product data. Includes responsive UI and local-storage cart persistence.",
    link: "https://github.com/Madhav-Sreejith/MediKart",
    repo: "https://medi-kart-steel.vercel.app/",
    status: "Live",
    tags: ["React", "E‑commerce UI", "Local Storage", "Responsive"],
  },
  {
    title: "Seasons",
    description:
      "Interactive seasonal pages (Summer, Winter, Spring, Autumn) with audio explanations, keyboard navigation, GIF visuals, and accessible controls. Implemented using React hooks (useState, useEffect, useRef) and keyboard event handlers.",
    link: "",
    repo: "https://github.com/Madhav-Sreejith/Seasons",
    status: "Ongoing",
    tags: ["React", "Accessibility", "Audio", "Keyboard Controls"],
  },
  {
    title: "Portfolio",
    description:
      "My personal portfolio that showcases projects, skills, and contact details. Built with React and styled to match my site theme; includes responsive layout and deploy-ready config.",
    link: "https://madhav-sreejith.github.io/portfolio/",
    repo: "https://github.com/Madhav-Sreejith/portfolio",
    status: "Live",
    tags: ["React", "Personal Brand", "Animations", "Deployment"],
  },
];

function Project() {
  return (
    <motion.section
      className="projects-container"
      aria-labelledby="projects-heading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* TITLE */}
      <motion.div
        className="projects-heading-block"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 id="projects-heading" className="projects-title">
          My Projects
        </h1>
        <p className="projects-subtitle">
          A curated selection of things I&apos;ve been building recently —
          from practical web apps to experiments that help me learn by doing.
        </p>
      </motion.div>

      {/* PROJECT LIST */}
      <motion.div
        className="project-list"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {projects.map((project) => (
          <motion.article
            className="project-card"
            key={project.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
          >
            <header className="project-card-header">
              <h2 className="project-card-title">{project.title}</h2>
              <span
                className={`project-status project-status-${project.status.toLowerCase()}`}
                aria-hidden="true"
              >
                {project.status}
              </span>
            </header>

            <p className="project-card-description">
              {project.description}
            </p>

            {project.tags && (
              <div className="project-meta">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="project-links">
              {project.link && (
                <a
                  className="project-card-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} demo in new tab`}
                >
                  View Demo
                </a>
              )}

              {project.repo && (
                <a
                  className="project-card-repo"
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} repository in new tab`}
                >
                  Source
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Project;

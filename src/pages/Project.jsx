import React from "react";
import '../styles/project.css';

const projects = [
  {
    title: "Weather App",
    description: "A React-based weather application that fetches real-time data from OpenWeatherMap API and displays it beautifully.",
    link: "https://your-weather-app-link.com",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio site to showcase my skills, projects, and contact information with a modern UI.",
    link: "https://your-portfolio-site.com",
  },
  {
    title: "Task Manager",
    description: "A simple yet effective to-do app with local storage support, filters, and intuitive design.",
    link: "https://your-task-manager.com",
  },
];

function Project() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;

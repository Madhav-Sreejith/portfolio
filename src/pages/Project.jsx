export default function Project() {
  return (
    <div className="projects-container animation1">
      <h1 className="projects-title">My Projects 🚀</h1>
      
      <div className="project-list">
        <div className="project-card">
          <h2>Portfolio Website</h2>
          <p>A responsive portfolio built with React, showcasing my projects and skills.</p>
          <p><strong>Tech:</strong> React, CSS</p>
          <a href="https://github.com/madhav-sreejith/portfolio" target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </div>

        <div className="project-card">
          <h2>MediKart 🩺💊</h2>
          <p>MediKart is a smart online pharmacy platform where users can simply upload their prescriptions to order medicines. </p>
          <p><strong>Tech:</strong> JavaScript, HTML, CSS,ReactJS</p>
          <a href="https://github.com/madhav-sreejith/MediKart" target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </div>

        <div className="project-card">
          <h2>BasicCalculator➕✖️</h2>
          <p>Its just a claculator.</p>
          <p><strong>Tech:</strong> Python</p>
          <a href="https://github.com/yourusername/weather-cli" target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

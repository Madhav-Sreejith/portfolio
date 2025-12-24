import React from 'react';
import Education from './Education';
import '../styles/Education.css';
import '../styles/About.css';

export default function About() {
  return (
    <div className="about animation1">
      
      <h1 className="about_title">About Me</h1>

      <p className="about_para">
        Hey! I'm <strong>Madhav Sreejith</strong>, a B.Tech Computer Science undergraduate at 
        <strong> Amrita School of Engineering, Coimbatore</strong>. I’m passionate about software development 
        and love building clean, scalable, and meaningful tech solutions.
      </p>

      <p className="about_para">
        I enjoy <strong>problem-solving, full-stack development, and system design</strong>. Whether it’s 
        architecting a web app or breaking down complex DSA problems, I learn best by experimenting and building.
      </p>

      {/* Education Section */}
      <Education />

      {/* Focus Section */}
      <section>
        <h2 className="about_subtitle">💻 What I'm Currently Focused On</h2>
        <ul className="about_list">
          <li>⚛️ Developing full-stack applications using React and Node.js</li>
          <li>🧠 Strengthening DSA & competitive problem-solving</li>
          <li>📚 Deep-diving into OS, DBMS, and system architecture</li>
          <li>🚀 Participating in hackathons & collaborative coding events</li>
        </ul>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="about_subtitle">🌱 Technical Skills</h2>
        <ul className="about_list">
          <li><strong>Languages:</strong> C++, Python, JavaScript</li>
          <li><strong>Web Dev:</strong> React, Node.js, Express, MongoDB</li>
          <li><strong>Tools:</strong> Git, VS Code, Postman, Figma</li>
          <li><strong>Core CS:</strong> Data Structures, Algorithms, DBMS, OOP, REST APIs</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="about_subtitle">🧠 Projects & Hackathons</h2>
        <p className="about_para">
          I love building projects that challenge my thinking — from productivity tools and interactive 
          applications to full-stack systems. Hackathons help me test ideas fast and collaborate with 
          amazing teams.
        </p>
      </section>

      {/* Beyond Coding Section */}
      <section>
        <h2 className="about_subtitle">🎮 Beyond Coding</h2>
        <p className="about_para">
          Outside of tech, I enjoy gaming, exploring UI/UX design, reading tech blogs, and diving into 
          anything that sparks my curiosity — whether it's a new framework or a sci-fi adventure.
        </p>
      </section>

      {/* Social Section */}
      <section>
        <h2 className="about_subtitle">📬 Let's Connect</h2>
        <div className="social-links">
          <a href="https://github.com/madhav-sreejith" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/madhav-sreejith/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:madhavsreejith123@gmail.com">Email</a>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import Education from './Education';
import '../Education.css';

export default function About() {
  return (
    <div className="about animation1">
      <h1 className="about_title">About Me</h1>

      <p className="about_para">
        Hey! I'm <strong>Madhav Sreejith</strong>, a B.Tech Computer Science undergraduate at <strong>Amrita School of Engineering, Coimbatore</strong>. With a strong foundation in software development and a love for building creative tech solutions, I'm always eager to explore the endless possibilities in computer science.
      </p>

      <p>
        I’m passionate about <strong>problem solving, full-stack development, and exploring system design</strong>. Whether it’s cracking tough DSA problems or architecting clean and scalable web apps, I strive to learn by doing.
      </p>

      {/* ✅ This now renders your custom Education boxes */}
      <Education />

      <h2 className="about_subtitle">💻 What I'm Currently Focused On</h2>
      <ul className="about_list">
        <li>⚛️ Building full-stack web projects using React and Node.js</li>
        <li>📈 Mastering DSA & competitive programming (proud LeetCode warrior 🛡️)</li>
        <li>🧠 Deep-diving into OS, DBMS, and software architecture principles</li>
        <li>💡 Participating in hackathons and coding contests for real-world experience</li>
      </ul>

      <h2 className="about_subtitle">🌱 Technical Skills</h2>
      <ul className="about_list">
        <li><strong>Languages:</strong> C++, Python, JavaScript</li>
        <li><strong>Web Dev:</strong> React, Node.js, Express, MongoDB</li>
        <li><strong>Tools:</strong> Git, VS Code, Postman, Figma</li>
        <li><strong>Concepts:</strong> Data Structures, Algorithms, DBMS, OOP, REST APIs</li>
      </ul>

      <h2 className="about_subtitle">🧠 Projects & Hackathons</h2>
      <p>
        I'm always building something! From productivity tools and mini-games to full-blown web applications, I use every project as a learning experience. I've also participated in college hackathons and enjoy collaborating on impactful ideas.
      </p>

      <h2 className="about_subtitle">🎮 Beyond Coding</h2>
      <p>
        Outside the screen, I enjoy gaming, reading tech blogs, exploring design aesthetics, and diving into random topics that spark my curiosity. Whether it's a new framework or a sci-fi book, I’m all in.
      </p>

      <h2 className="about_subtitle">📬 Let's Connect</h2>
      <div className="social-links">
        <a href="https://github.com/madhav-sreejith" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto:madhavsreejith123@gmail.com">
          Email
        </a>
      </div>
    </div>
  );
}

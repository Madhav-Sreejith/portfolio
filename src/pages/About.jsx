import React from "react";
import { motion } from "framer-motion";
import Education from "./Education";
import "../styles/Education.css";
import "../styles/About.css";

export default function About() {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* TITLE */}
      <motion.h1
        className="about_title"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      {/* INTRO PARAGRAPHS */}
      <motion.p
        className="about_para"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Hey! I'm <strong>Madhav Sreejith</strong>, a B.Tech Computer Science undergraduate at
        <strong> Amrita School of Engineering, Coimbatore</strong>. I’m passionate about software development
        and love building clean, scalable, and meaningful tech solutions.
      </motion.p>

      <motion.p
        className="about_para"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I enjoy <strong>problem-solving, full-stack development, and system design</strong>. Whether it’s
        architecting a web app or breaking down complex DSA problems, I learn best by experimenting and building.
      </motion.p>

      {/* EDUCATION SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Education />
      </motion.div>

      {/* FOCUS SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="about_subtitle">💻 What I'm Currently Focused On</h2>

        <motion.ul
          className="about_list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {[
            "⚛️ Developing full-stack applications using React and Node.js",
            "🧠 Strengthening DSA & competitive problem-solving",
            "📚 Deep-diving into OS, DBMS, and system architecture",
            "🚀 Participating in hackathons & collaborative coding events",
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      {/* SKILLS SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="about_subtitle">🌱 Technical Skills</h2>

        <motion.ul
          className="about_list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {[
            <><strong>Languages:</strong> C++, Python, JavaScript</>,
            <><strong>Web Dev:</strong> React, Node.js, Express, MongoDB</>,
            <><strong>Tools:</strong> Git, VS Code, Postman, Figma</>,
            <><strong>Core CS:</strong> Data Structures, Algorithms, DBMS, OOP, REST APIs</>,
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      {/* PROJECTS SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="about_subtitle">🧠 Projects & Hackathons</h2>
        <p className="about_para">
          I love building projects that challenge my thinking — from productivity tools and interactive
          applications to full-stack systems. Hackathons help me test ideas fast and collaborate with
          amazing teams.
        </p>
      </motion.section>

      {/* BEYOND CODING SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="about_subtitle">🎮 Beyond Coding</h2>
        <p className="about_para">
          Outside of tech, I enjoy gaming, exploring UI/UX design, reading tech blogs, and diving into
          anything that sparks my curiosity — whether it's a new framework or a sci-fi adventure.
        </p>
      </motion.section>

      {/* SOCIAL SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="about_subtitle">📬 Let's Connect</h2>
        <motion.div
          className="social-links"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/madhav-sreejith" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/madhav-sreejith/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:madhavsreejith123@gmail.com">Email</a>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}

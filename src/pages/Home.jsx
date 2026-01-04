import "../styles/Home.css";
import { motion } from "framer-motion";

function Home() {
  const highlights = [
    "🌟 Web Development",
    "💡 Data Structures & Algorithms",
    "💻 Competitive Programming",
  ];

  const skills = [
    "🖥️ Full-Stack Web Development",
    "💡 Data Structures & Algorithms",
    "🧩 Problem Solving & Debugging",
    "🔍 Competitive Coding",
    "🌐 Networking & Real-Time Data",
  ];

  const techIcons = [
    { src: "/Python_logo.svg", alt: "Python" },
    { src: "/c++logo.png", alt: "C++" },
    { src: "/html2logo.png", alt: "HTML" },
    { src: "/JavaScript-logo.png", alt: "JavaScript" },
    { src: "/logo512.png", alt: "React" },
    { src: "/githublogo.png", alt: "Github" },
  ];

  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* TOP SECTION */}
      <section className="home-container">

        {/* LEFT SECTION */}
        <div className="left-block text-block">
          <motion.div
            className="home-photo"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={process.env.PUBLIC_URL + "/myfoto.jpg"}
              alt="Madhav"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="home-content"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h1 className="home-title">Madhav Sreejith</h1>
            <p className="tagline">
              CS undergrad passionate about full-stack development, DSA, and
              building real-world tech projects.
            </p>
          </motion.div>
        </div>

        {/* RIGHT SECTION */}
        <motion.div
          className="right-section text-block"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="highlight-card"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <motion.section
        className="skills-section text-block"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* TECH SECTION */}
      <motion.section
        className="TechImg text-block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Tech I Use</h2>
        <div className="IconsTech">
          {techIcons.map((icon, index) => (
            <motion.img
              key={index}
              src={process.env.PUBLIC_URL + icon.src}
              alt={icon.alt}
              loading="lazy"
              className="tech-icon"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </motion.section>

      {/* FOOTER */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p>© 2025 Madhav</p>
      </motion.footer>
    </motion.div>
  );
}

export default Home;

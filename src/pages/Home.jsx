import "../styles/Home.css";
import { motion } from "framer-motion";

function Home() {
  const highlights = [
    "🌟 Building clean, responsive web apps",
    "💡 Strong foundation in Data Structures & Algorithms",
    "💻 Active in competitive programming and problem solving",
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
      {/* HERO SECTION */}
      <section className="home-container">
        <div className="hero-inner">
          {/* PHOTO */}
          <motion.div
            className="home-photo"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="photo-ring" />
            <img
              src={process.env.PUBLIC_URL + "/myfoto.jpg"}
              alt="Madhav"
              loading="lazy"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            className="home-content"
            initial={{ y: 26, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            <p className="home-eyebrow">Hello, I&apos;m</p>
            <h1 className="home-title">Madhav Sreejith</h1>
            <p className="home-role">CS undergrad &amp; full‑stack developer</p>
            <p className="tagline">
              I design and build modern web experiences, solve challenging
              programming problems, and enjoy turning ideas into reliable,
              production‑ready projects.
            </p>

            <div className="cta-buttons">
              <a href="/project">View Projects</a>
              <a href="/about" className="ghost-cta">
                About Me
              </a>
            </div>

            <div className="hero-highlights">
              {highlights.map((item) => (
                <span key={item} className="hero-chip">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TECH SECTION */}
      <motion.section
        className="TechImg text-block"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
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
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
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

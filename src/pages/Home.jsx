import "../styles/home.css";

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
    <div className="home-page">

      {/* TOP SECTION */}
      <section className="home-container">

        {/* LEFT SECTION */}
        <div className="left-block text-block">
          <div className="home-photo">
            <img
              src={process.env.PUBLIC_URL + "/myfoto.jpg"}
              alt="Madhav"
              loading="lazy"
            />
          </div>

          <div className="home-content">
            <h1 className="home-title">Madhav Sreejith</h1>
            <p className="tagline">
              CS undergrad passionate about full-stack development, DSA, and
              building real-world tech projects.
            </p>

          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="right-section text-block">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card fade-in">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="skills-section text-block">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card fade-in">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* TECH SECTION */}
      <section className="TechImg text-block">
        <h2>Tech I Use</h2>
        <div className="IconsTech">
          {techIcons.map((icon, index) => (
            <img
              key={index}
              src={process.env.PUBLIC_URL + icon.src}
              alt={icon.alt}
              loading="lazy"
              className="tech-icon fade-in"
            />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Madhav</p>
      </footer>
    </div>
  );
}

export default Home;

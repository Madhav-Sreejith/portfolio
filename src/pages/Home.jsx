import "../styles/home.css"

function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="left-block">
          <div className="home-photo">
            <img src={process.env.PUBLIC_URL + "/myfoto.jpg"} alt="Madhav" />
          </div>
          <div className="home-content">
            <h1>Madhav Sreejith</h1>
            <p className="tagline">
              I'm <strong>Madhav Sreejith</strong>, a CS undergrad passionate about full-stack web development, DSA, and building real-world tech projects.
            </p>
          </div>
        </div>

        <div className="right-section">
          <div className="highlight-card">🌟 Aspiring Software Engineer</div>
          <div className="highlight-card">💡 Proud Leet Coder</div>
          <div className="highlight-card">💻 Full Stack Developer</div>
        </div>
      </div>

      <div className="skills-section">
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="skill-card">🖥️ Full-Stack Web Development</div>
          <div className="skill-card">💡 Data Structures & Algorithms</div>
          <div className="skill-card">🧩 Problem Solving & Debugging</div>
          <div className="skill-card">🔍 Competitive Coding</div>
          <div className="skill-card">🌐 Networking & Real-Time Data</div>
        </div>
      </div>

      <div className="TechImg">
        <h2>Tech I Use</h2>
        <div className="IconsTech">
          <img src={process.env.PUBLIC_URL + "/Python_logo.svg"} alt="Python" />
          <img src={process.env.PUBLIC_URL + "/c++logo.png"} alt="C++" />
          <img src={process.env.PUBLIC_URL + "/html2logo.png"} alt="Html" />
          <img src={process.env.PUBLIC_URL + "/JavaScript-logo.png"} alt="JavaScript" />
          <img src={process.env.PUBLIC_URL + "/logo512.png"} alt="React" />
          <img src={process.env.PUBLIC_URL + "/githublogo.png"} alt="Github" />
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 Madhav</p>
      </footer>
    </div>
  );
}

export default Home;

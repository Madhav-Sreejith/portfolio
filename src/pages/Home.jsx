export default function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="left-block">
          <div className="home-photo">
            <img src="/myfoto.jpg" alt="Madhav" />
          </div>
          <div className="home-content">
            <h1>Madhav Sreejith</h1>
            <p className="tagline">
              Fueled by coffee, powered by stack traces.<br/>
              I break things just to fix them better.
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
          <div className="skill-card">💻 Frontend Dev</div>
          <div className="skill-card">⚙️ DSA</div>
          <div className="skill-card">🚀 React & JS</div>
          <div className="skill-card">🐍 Python</div>
          <div className="skill-card">🔍 Problem Solving</div>
        </div>
      </div>

      <div className="TechImg">
        <h2>Tech I Use</h2>
        <div className="IconsTech">
          <img src="/Python_logo.svg" alt="Python" />
          <img src="/c++logo.png" alt="C++" />
          <img src="/html2logo.png" alt="Html" />
          <img src="/javascript-logo.png" alt="JavaScript" />
          <img src="/logo192.png" alt="React" />
          <img src="/githublogo.png" alt="Github" />
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 Madhav</p>
      </footer>
    </div>
  );
}

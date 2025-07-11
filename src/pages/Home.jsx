export default function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-photo">
          <img src="/myfoto.jpg" alt="Madhav" />
        </div>
        <div className="home-content">
          <h1> I'm Madhav Sreejith 👋</h1>
          <p>
                Fueled by coffee, powered by stack traces. I break things just to fix them better.

          </p>
          <div className="home-buttons">
            <a href="/about" className="btn">About Me</a>
            <a href="/project" className="btn">View Projects</a>
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h2>What I Do</h2>
        <div className="skills-list">
          <div className="skill-card">💻 Frontend Development</div>
          <div className="skill-card">⚙️ Data Structures & Algorithms</div>
          <div className="skill-card">🚀 React & Modern JavaScript</div>
          <div className="skill-card">🐍 Python Scripting</div>
          <div className="skill-card">🔍 Problem Solving</div>
        </div>
      </div>
    </div>
  );
}

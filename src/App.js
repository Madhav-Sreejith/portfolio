import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import './App.css';

function App() {
  return (
    <Router>
      <header className="navbar">
        <div className="nav-container">
          <nav className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/project" className="nav-link">Projects</Link>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="*" element={<Home />} /> {/* fallback route */}
      </Routes>
    </Router>
  );
}

export default App;

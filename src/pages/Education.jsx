import React from 'react';
import '../Education.css';

function Education() {
  return (
    <div className="education-container">
      <h2 className="education-title">Education</h2>

      <div className="education-grid">
        <div className="education-box">
          <img src="/amritalogo.jpeg" alt="College Logo" className="institution-logo" />
          <div className="education-content">
            <h3>College</h3>
            <p>Amrita Vishwa Vidyapeetham</p>
            <p>B.Tech in Computer Science</p>
            <p>2023 - 2027</p>
          </div>
        </div>

        <div className="education-box">
          <img src="/rijuandpsk.png" alt="School Logo" className="institution-logo" />
          <div className="education-content">
            <h3>School</h3>
            <p>ABC Higher Secondary School</p>
            <p>12th Grade - 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;

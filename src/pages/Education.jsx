import React from 'react';
import '../styles/Education.css';

function Education() {
  return (
    <div className="education-container">
      <h2 className="education-title">Education</h2>

      <div className="education-grid">
        <div className="education-box">
            <div className="logo-container">
                <img src={process.env.PUBLIC_URL + "/amritalogo.jpeg"} alt="College Logo"  className="institution-logo"/>
            </div>
          <div className="education-content">
            <p>Amrita Vishwa Vidyapeetham</p>
            <p>Bachelor of Technology- Computer Science</p>
            <p>2023-Present</p>
          </div>
        </div>

        <div className="education-box">
            <div className="logo-container">
                <img src={process.env.PUBLIC_URL + "/rijuandpsk.png"} alt="School Logo" className="institution-logo" />
            </div>
          <div className="education-content">
            <p>Gurukula Public School</p>
            <p>Grade: 96%</p>
            <p>2021-2023</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;

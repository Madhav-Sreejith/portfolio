import React from 'react';
import '../styles/Education.css';

export default function Education() {
  
  const educationData = [
    {
      logo: "/amritalogo.jpeg",
      alt: "Amrita University Logo",
      institution: "Amrita Vishwa Vidyapeetham",
      details: ["Bachelor of Technology - Computer Science", "2023 - Present"]
    },
    {
      logo: "/rijuandpsk.png",
      alt: "Gurukula Public School Logo",
      institution: "Gurukula Public School",
      details: ["Grade: 96%", "2021 - 2023"]
    }
  ];

  return (
    <section className="education-container">
      <h2 className="education-title">Education</h2>

      <div className="education-grid">
        {educationData.map((item, index) => (
          <div key={index} className="education-box">
            
            <div className="logo-container">
              <img 
                src={process.env.PUBLIC_URL + item.logo} 
                alt={item.alt}
                className="institution-logo"
                loading="lazy"
              />
            </div>

            <div className="education-content">
              <p className="institution-name">{item.institution}</p>
              {item.details.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

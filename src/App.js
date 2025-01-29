import React from 'react';
import './App.css';
import SocialLinks from './SocialLinks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <h2>Hi, I'm Meghana Katraju! <span role="img" aria-label="wave">👋</span></h2>
        <div className="profile-picture">
          <img src="/images/my-picture.jpg" alt="Meghana Katraju" />
        </div>
        <div className="intro">
          <h3>About Me</h3>
          <p>
           I Meghana, a graduate in Computer Science from the University of Texas at Arlington (UTA). I have about 3 years of experience as a Full Stack Java Developer, having worked at organizations like HIQ, Verzeo, Accenture, and Amazon. At HIQ, I focus on designing scalable applications, while my previous roles involved contributing to a customer-facing platform redesign and building a seamless SPA at verzeo, Accenture. I also completed an internship at Amazon, where I helped develop cloud solutions. I’m now seeking full-time opportunities where I can apply my experience in Java development, microservices, and cloud computing.
          </p>
        </div>
        <div className="education">
          <h3>Education</h3>
          <p>
            <strong>University of Texas at Arlington</strong><br />
            Master of Science in Computer Science<br />
            [2024]
          </p>
          <p>
            <strong>Jawaharlal Nehru Technological University</strong><br />
            Bachelor of Computer Science<br />
            [2022]
          </p>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <ul className="skills-list">
            <li className="skill-item">Java</li>
            <li className="skill-item">Python</li>
            <li className="skill-item">SQL</li>
            <li className="skill-item">PostgreSQL</li>
            <li className="skill-item">Spring Boot</li>
            <li className="skill-item">Maven</li>
            <li className="skill-item">Selenium</li>
            <li className="skill-item">AWS</li>
            <li className="skill-item">Git</li>
            <li className="skill-item">Gradle</li>
            <li className="skill-item">Junit</li>
            <li className="skill-item">React</li>
            <li className="skill-item">MongoDB</li>
            <li className="skill-item">Spring MVC</li>
            <li className="skill-item">C</li>
            <li className="skill-item">C++</li>
            <li className="skill-item">Hibernate</li>
          </ul>
        </div>
        <SocialLinks />
      </header>
    </div>
  );
}

export default App;







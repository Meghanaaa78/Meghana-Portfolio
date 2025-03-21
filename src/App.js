import React from 'react';
import './App.css';
import SocialLinks from './SocialLinks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <h2>Hi, I'm Meghana! <span role="img" aria-label="wave">👋</span></h2>
    <div className="profile-picture">
  <img src="/images/my-picture.jpg" alt="Meghana" />
</div>


        <div className="intro">
          <h3>About Me</h3>
          <p>
           Hi, I’m Meghana – A Problem Solver in Code! 🚀
I’m a Software Developer with a passion for building scalable, high-performance applications that make a real impact. With a strong foundation in Java, microservices, and cloud computing, I’ve spent the last few years transforming ideas into efficient and seamless digital experiences.

💡 What I Bring to the Table:

Architecting Scalable Solutions: Crafting microservices-driven applications that grow with business needs.
Cloud-Powered Development: Designing secure and resilient cloud-based systems.
Full-Stack Expertise: From intuitive UI/UX to robust backend logic, I build complete applications.
Performance Optimization: Ensuring applications run smoothly and efficiently, even at scale.
🔎 What Drives Me?
Innovation, efficiency, and problem-solving! Whether it’s optimizing backend performance, enhancing user experience, or building intelligent cloud-native solutions, I love tackling challenges head-on.

🚀 Let’s Build Something Amazing!
I’m actively seeking opportunities where I can contribute my skills and push the boundaries of what’s possible in software development.

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







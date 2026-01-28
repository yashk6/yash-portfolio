import { Typewriter } from "react-simple-typewriter";
import "../styles/Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>
          Hi, I’m <span className="highlight">Yash</span>
        </h1>

        <h2 className="typewriter">
          <Typewriter
            words={[
              "Frontend Developer",
              "React.js Developer",
              "UI/UX Enthusiast",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="description">
          I build modern, responsive, and user-friendly web applications using
          React, JavaScript, and clean UI principles.
        </p>

        <div className="cta">
          <a href="/resume.pdf" className="btn primary" download>
            📄 Download Resume
          </a>
          <a href="/projects" className="btn secondary">
            🚀 View Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;

// 📁 src/pages/Skills.jsx
const skills = [
    { name: "React.js", description: "Building dynamic UIs with reusable components." },
    { name: "JavaScript", description: "Strong understanding of ES6+ syntax and browser compatibility." },
    { name: "HTML5 & CSS3", description: "Creating responsive and accessible layouts." },
    { name: "Python", description: "Basic scripting and data manipulation skills." },
    { name: "Data Science", description: "Understanding of data visualization and analysis." },
    { name: "Social Media Marketing", description: "Experience with promotion strategies and content campaigns." },
  ];
  
  function Skills() {
    return (
      <div className="page">
        <h1>My Skills</h1>
        <div className="box-grid">
          {skills.map((skill, index) => (
            <div className="box" key={index}>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Skills;
  
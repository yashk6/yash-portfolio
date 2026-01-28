// 📁 src/pages/Projects.jsx
const projects = [
    {
      title: "React Essentials Page",
      description: "A documentation site built with React to explain React fundamentals.",
      image: "https://via.placeholder.com/300x180",
      link: "https://github.com/yash/react-essentials"
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "A fun and simple React-based game with state management.",
      image: "https://via.placeholder.com/300x180",
      link: "https://github.com/yash/tic-tac-toe"
    },
    {
      title: "Investment Calculator",
      description: "An interactive calculator to forecast investment growth over time.",
      image: "https://via.placeholder.com/300x180",
      link: "https://github.com/yash/investment-calculator"
    },
    {
      title: "ReactArt Login UI",
      description: "Beautiful and responsive login interface with animations.",
      image: "https://via.placeholder.com/300x180",
      link: "https://github.com/yash/reactart-login"
    },
    {
      title: "Shree Paithani E-commerce Site",
      description: "An online saree store built using React.js with full routing and cart features.",
      image: "https://via.placeholder.com/300x180",
      link: "https://github.com/yash/shree-paithani"
    }
  ];
  
  function Projects() {
    return (
      <div className="page">
        <h1>My Projects</h1>
        <div className="box-grid">
          {projects.map((project, index) => (
            <div className="box" key={index}>
              <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: '8px' }} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="primary-btn">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Projects;
  
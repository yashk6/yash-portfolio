import profileImg from '../assets/profile.jpg'; // Replace with your image path

function About() {
  return (
    <div className="page about-page">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-image">
          <img src={profileImg} alt="Yash" />
        </div>
        <div className="about-text">
          <p>
            Hello! I'm Yash, a dedicated and passionate Frontend Developer. I love crafting interactive,
            user-friendly interfaces using React.js and JavaScript. With a strong eye for design and performance,
            I strive to bring modern, efficient, and visually appealing web applications to life.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, biking through the outdoors,
            or playing volleyball with friends.
          </p>
          <ul className="fun-facts">
            <li>🏀 Loves volleyball</li>
            <li>🚴‍♂️ Avid biker</li>
            <li>🌐 Passionate about tech and UI design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
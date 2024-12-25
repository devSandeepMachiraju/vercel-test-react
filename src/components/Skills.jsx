const Skills = () => {
  const skillsList = [
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "React", icon: "fab fa-react" },
    { name: "Next.js", icon: "fab fa-node-js" },
    { name: "TypeScript", icon: "fas fa-code" },
  ];

  return (
    <section id="skills" className="container">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-card">
            <i className={skill.icon}></i>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

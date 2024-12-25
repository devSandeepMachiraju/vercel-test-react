const Projects = () => {
  const projectsList = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured online shopping platform built with Next.js and TypeScript",
    },
    {
      title: "Dashboard Analytics",
      description: "Real-time analytics dashboard using React and D3.js",
    },
    {
      title: "Social Media App",
      description:
        "Modern social networking application with React and Firebase",
    },
  ];

  return (
    <section id="projects" className="container">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projectsList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

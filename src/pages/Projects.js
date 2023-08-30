import React, { useState, useEffect } from 'react';
import './Projects.css'; // Import the custom styles for Projects

function Projects() {
  const [projects, setProjects] = useState(null);

  const getProjectsData = async () => {
    const response = await fetch('./projects.json');
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    getProjectsData();
  }, []);

  const loaded = () => {
    return projects.map((project, index) => (
      <div className="project-card" key={index}>
        <h2>{project.name}</h2>
        <img src={project.image} alt={project.name} />
        <div className="button-container">
          <a href={project.git}>
            <button className="github-button">Github</button>
          </a>
          <a href={project.live}>
            <button className="live-site-button">Live Site</button>
          </a>
        </div>
      </div>
    ));
  };

  return <div className="container">{projects ? loaded() : <h1>Loading...</h1>}</div>;
}

export default Projects;


import React, { useState, useEffect } from 'react';
import './Projects.css';

export default function Projects() {
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
        <div className="project-image-container">
          <img src={project.image} alt={project.name} className="project-image" />
        </div>
        <h2 className="project-title">{project.name}</h2>
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

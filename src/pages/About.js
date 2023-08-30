import React, { useState, useEffect } from "react";
import './About.css';

export default function About() {
  const [about, setAbout] = useState(null);

  const getAboutData = async () => {
    const response = await fetch("./about.json");
    const data = await response.json();
    setAbout(data);
  };

  useEffect(() => {
    getAboutData();
  }, []);

  const loaded = () => (
    <div className="about-container">
      <div className="about-header">
        <img className="headshot" src={about.headshot} alt="Harrison Mohney" />
        <div className="info">
          <h2>{about.name}</h2>
          <h3>{about.email}</h3>
        </div>
      </div>
      <p className="bio">{about.bio}</p>
    </div>
  );

  return about ? loaded() : <h1>Loading...</h1>;
}


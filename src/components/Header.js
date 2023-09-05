import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    borderBottom: '.2rem solid black',
    padding: '.5rem',
    width: '90%',
    margin: 'auto',
  };

  return (
    <header className="header">
      <div className="header-content">
        <img className="headshot" src="https://i.imgur.com/7ehIqPt.jpg" alt="Headshot" />
        <h1>My Portfolio Page</h1>
      </div>
      <nav style={navStyle}>
        <Link to="/">
          <div>INTRO</div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}
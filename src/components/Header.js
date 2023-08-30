import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the custom styles for Header

function Header() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    borderBottom: '.2rem solid black',
    padding: '.5rem',
    width: '90%',
    margin: 'auto',
  };

  return (
    <header>
      <div className="header-content">
        <img className="headshot" src="http://www.imgur.com/pictureofproject.png" alt="Headshot" />
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

export default Header;


import React, { useState } from 'react';  
import { FaBars, FaTimes } from 'react-icons/fa';  
import { Link } from 'react-scroll';
import '../styles/Header.css';



function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header-container">
      <a
        className="header-logo"
        href="https://github.com/sanikac10/resume/blob/main/Sanika_Chavan_Resume_ML.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li>
            <Link
              to="top"
              smooth={true}
              offset={0}
              duration={500}
              activeClass="active"
              spy= {false}
            >
              Home
            </Link>
          </li>
          <li>
            {/* <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              About
            </Link> */}
          </li>
          
          <li>
            <Link
              to="professional-academic"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="wall-of-love"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              Wall of Love
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

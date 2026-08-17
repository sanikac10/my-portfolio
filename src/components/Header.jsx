import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import '../styles/Header.css';

const resumePdf = `${import.meta.env.BASE_URL}assets/resume.pdf`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header-container">
      <Link
        className="header-logo"
        to="top"
        smooth={true}
        offset={0}
        duration={500}
      >
        Sanika Chavan
      </Link>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li>
            <Link to="top" smooth={true} offset={0} duration={500} activeClass="active" spy={false}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
              About
            </Link>
          </li>
          <li>
            <Link to="research" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
              Research
            </Link>
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
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
              Projects
            </Link>
          </li>
          <li>
            <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="nav-resume-link">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

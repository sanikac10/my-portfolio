// src/components/Header.jsx
import React from 'react'
import { Link } from 'react-scroll'
import '../styles/Header.css'

function Header() {
  return (
    <header className="header-container">
      <a
        className="header-logo"
        href="/assets/resume.pdf"
        download
      >
        Sanika Chavan
      </a>

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="hero" smooth={true} offset={-70} duration={300}>Home</Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-70} duration={300}>About</Link>
          </li>
          <li>
            <Link to="skills" smooth={true} offset={-70} duration={300}>Skills</Link>
          </li>
          <li>
            <Link to="professional-academic" smooth={true} offset={-70} duration={300}>Experience</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} offset={-70} duration={300}>Projects</Link>
          </li>
          <li>
            <Link to="academic-extracurricular" smooth={true} offset={-70} duration={300}>Extracurricular</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={-70} duration={300}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

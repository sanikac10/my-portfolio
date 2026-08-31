import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Typed from 'typed.js';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { TbBrandX } from 'react-icons/tb';
import { SiGooglescholar } from 'react-icons/si';
import '../styles/Hero.css';

const resumePdf = `${import.meta.env.BASE_URL}assets/resume.pdf`;

function Hero() {
  const typedRef = useRef(null);
  const typedElementRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, {
      strings: [
        'scalable eval infrastructure',
        'agentic LLM benchmarks',
        'automated testing pipelines',
        'reproducible ML systems',
      ],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
    });

    typedRef.current = typed;

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  return (
    <motion.section
      id="hero"
      className="hero-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-blob blob-1" />
        <span className="hero-blob blob-2" />
        <span className="hero-blob blob-3" />
        <span className="hero-grid" />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">Research Engineer · San Francisco Bay Area</p>
        <h1 className="hero-title">Hi, I&apos;m Sanika Chavan</h1>

        <p className="hero-subtitle">
          I build <span ref={typedElementRef}></span>
        </p>

        <p className="hero-description">
          Specializing in scalable evaluation infrastructure, benchmarking, and
          reproducibility for LLM and agentic systems, with experience in
          automated testing, metric design, and reliability analysis.
        </p>

        <div className="hero-cta">
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-resume-btn"
          >
            View Resume
          </a>
        </div>

        <div className="hero-contact-icons">
          <a
            href="https://github.com/sanikac10"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sanika-chavan/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://scholar.google.com/citations?hl=en&user=oiOf9EsAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Google Scholar"
          >
            <SiGooglescholar />
          </a>
          <a
            href="https://x.com/chavan_sanika_"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="X (Twitter)"
          >
            <TbBrandX />
          </a>
          <a href="mailto:sanikac10@gmail.com" className="contact-icon" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        <div className="scroll-arrow">
          <Link to="about" smooth={true} duration={600} className="arrow-link"></Link>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;

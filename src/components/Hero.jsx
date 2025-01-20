import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Typed from 'typed.js';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { TbBrandX } from "react-icons/tb";
import '../styles/Hero.css';
import myAIImage from '../assets/myAI.png';

function Hero({ scrolled }) {
  const heroRef = useRef(null);
  const typedRef = useRef(null);
  const typedElementRef = useRef(null);
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, {
      strings: [
        'interfaces',
        'LLM APIs',
        'data visualizations',
        'ML-driven solutions',
      ],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true
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
      className={`hero-section ${scrolled ? 'hero-scrolled' : ''}`}
      ref={heroRef}
      initial={{ opacity: 0, y: 20 }}      // Add this
      animate={{ opacity: 1, y: 0 }}       // Add this
      transition={{                        // Add this
        duration: 0.8,
        ease: 'easeOut'
      }}
    >
      <img src={myAIImage} alt="My AI" className="hero-image" />
      <h1 className="hero-title">Hi, I&apos;m Sanika</h1>

      <p className="hero-subtitle">
        I build <span ref={typedElementRef}></span>
      </p>

      <div className="hero-contact-icons">
        <a
          href="https://github.com/sanikac10"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sanika-chavan/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/chavan_sanika_"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <TbBrandX />
        </a>
        <a 
          href="mailto:sanikac10@gmail.com"
          className="contact-icon"
        >
          <FaEnvelope />
        </a>
      </div>

      {showArrow && (
        <div className="scroll-arrow">
          <Link to="about" smooth={true} duration={600} className="arrow-link">
          </Link>
        </div>
      )}
    </motion.section>
  );
}

export default Hero;
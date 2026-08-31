// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

function About() {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2>About Me</h2>
      <p>
        I&apos;m a Research Engineer specializing in scalable evaluation
        infrastructure, benchmarking, and reproducibility for LLM and agentic
        systems, with experience in automated testing, metric design, reliability
        analysis, and ML systems.
      </p>
      <div className="about-education">
        <h3>Education</h3>
        <p className="about-education-line">
          M.S. Computer Science — Arizona State University, Tempe, AZ
          <span className="about-education-date">May 2025</span>
        </p>
      </div>
    </motion.section>
  );
}

export default About;

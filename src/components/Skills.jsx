// src/components/Skills.jsx
import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Skills.css'

function Skills() {
  return (
    <motion.section
      id="skills"
      className="skills-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2>Skills</h2>
      <p className="skills-intro">
        I’m proficient in a variety of languages and tools, including:
      </p>

      <div className="skills-container">
        <div className="skill-category unboxed">
          <h3>Programming Languages</h3>
          <div className="skill-badges">
            <span className="skill-badge">Python</span>
            <span className="skill-badge">JavaScript</span>
            <span className="skill-badge">TypeScript</span>
            <span className="skill-badge">Java</span>
            <span className="skill-badge">Swift</span>
          </div>
        </div>

        <div className="skill-category unboxed">
          <h3>Tools &amp; Technologies</h3>
          <div className="skill-badges">
            <span className="skill-badge">React.js</span>
            <span className="skill-badge">Node.js</span>
            <span className="skill-badge">Docker</span>
            <span className="skill-badge">Kubernetes</span>
            <span className="skill-badge">AWS</span>
            <span className="skill-badge">Hadoop</span>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Skills

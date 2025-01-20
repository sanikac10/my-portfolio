// src/components/Experience.jsx
import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Experience.css'

function Experience() {
  const experiences = [
    // ...
  ]

  return (
    <motion.section
      id="experience"
      className="experience-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2>Professional Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-card unboxed">
            <h3>{exp.title}</h3>
            <h4>{exp.company} | {exp.duration}</h4>
            <ul>
              {exp.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default Experience

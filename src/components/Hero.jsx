// src/components/Hero.jsx
import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Hero.css'

function Hero() {
  return (
    <motion.section
      id="hero"
      className="hero-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="top-fade"></div>
      <h1 className="hero-title">Welcome to My Portfolio</h1>
      <p className="hero-subtitle">
        I build engaging interfaces, data visualizations, <br />
        and ML-driven solutions.
      </p>
    </motion.section>
  )
}

export default Hero


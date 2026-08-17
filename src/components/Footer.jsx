// src/components/Footer.jsx
import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="footer-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.0, ease: 'easeOut' }}
    >
      <p>&copy; {currentYear} Sanika Chavan. Built with React, Vite, and Framer Motion.</p>
    </motion.footer>
  )
}

export default Footer

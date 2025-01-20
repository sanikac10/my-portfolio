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
      <p>Loosely envisioned in Figma, lovingly coded in VS Code using React, Vite, and 
        sprinkled with Framer Motion animations. Deployed somewhere awesome. 
        All text set in Manrope for that extra flair.</p>
    </motion.footer>
  )
}

export default Footer

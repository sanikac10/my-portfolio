// src/components/AcademicExtracurricular.jsx
import React from 'react'
import { motion } from 'framer-motion'
import '../styles/AcademicExtracurricular.css'

function highlightNumbers(text) {
  return text.replace(
    /(\d+(\.\d+)?x?%?(\+\d+)?)/g,
    '<span class="number-highlight">$1</span>'
  )
}

function AcademicExtracurricular() {
  // We highlight "45" => <span class="number-highlight">45</span>-member
  const paragraph = `Organized 20+ CS-related events (hackathons, tech talks, competitions). Enhanced teamwork & event management for a 45-member organization.`

  const replaced = highlightNumbers(paragraph)

  return (
    <motion.section
      id="academic-extracurricular"
      className="acad-extra-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2>Academic &amp; Extracurricular</h2>

      <div className="extra-card unboxed">
        <h3>Vice President (Management)</h3>
        <h4>Information Technology Student Association | July <span class="number-highlight">2021</span></h4>
        <p
          dangerouslySetInnerHTML={{ __html: replaced }}
        />
      </div>
    </motion.section>
  )
}

export default AcademicExtracurricular

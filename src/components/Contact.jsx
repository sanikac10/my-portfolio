// src/components/Contact.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'
import '../styles/Contact.css'

function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2>Contact Me</h2>
      <p>Let’s connect on my socials or via email!</p>

      <div className="contact-buttons">
        <a
          href="https://www.linkedin.com/in/sanika-chavan/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          <FaLinkedin className="icon" />
        </a>

        <a
          href="https://github.com/sanikac10"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          <FaGithub className="icon" />
        </a>

        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          <FaTwitter className="icon" />
        </a>

        <a
          href="mailto:sanikac10@gmail.com"
          className="contact-btn"
        >
          <FaEnvelope className="icon" />
        </a>
      </div>
    </motion.section>
  )
}

export default Contact

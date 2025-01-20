import React from 'react';
import '../styles/Leadership.css';
import { motion } from 'framer-motion';

function Leadership() {
  return (
    <motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>

    <section id="leadership" className="leadership-section">
      <h2>Leadership</h2>
      <div className="leadership-card">
        <h3>Vice President (Management)</h3>
        <h4>Information Technology Student Association | July 2021</h4>
        <ul>
          <br>Organized 20+ CS-related events (hackathons, tech talks, competitions).</br>
          <li>Enhanced teamwork & event management skills for an org of 45 members.</li>
        </ul>
      </div>
    </section>
    </motion.section>
  );
}

export default Leadership;

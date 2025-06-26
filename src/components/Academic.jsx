import React from 'react';
import '../styles/Academic.css';
import { motion } from 'framer-motion';

function Academic() {
  return (
    <motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>

    
      <section id="academic" className="academic-section">
        <h2>Academic Experience</h2>
        <div className="academic-card">

          <h3>Graduate Services Assistant (Grader – CSE330, CSE355, CSE511, IFT166)</h3>
          <h4>Arizona State University 2024-25</h4>
          <ul>
            <li>Researched & developed spatial query algorithms using Apache Spark & SparkSQL.</li>
            <li>Conducted Hot Zone Analysis to optimize large-scale data processing workflows.</li>
            <li>Guided students in designing scalable data processing pipelines and integrating outputs into distributed database setups.</li>
          </ul>
        </div>
      </section>
    </motion.section>
  );
}

export default Academic;

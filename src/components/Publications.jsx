import React from 'react';
import '../styles/Publications.css';
import { motion } from 'framer-motion';

function Publications() {
  const pubs = [
    {
      title: 'WebDirect: A Web-based Project Repository',
      date: 'May 2023',
      description: `
        Presents a web-based project repository using ReactJS, MongoDB, and cosine similarity 
        for recommendations, addressing issues like complex UI and weak search filters.
      `,
      link: 'https://ieeexplore.ieee.org/document/xxxxxxx'
    },
    {
      title: 'A Web-based Project Repository using ReactJS',
      date: 'October 2022',
      description: `
        Tackles issues with project portals by introducing improved search filters, 
        project recommendations, trending sections, and user collaboration features.
      `,
      link: 'https://ieeexplore.ieee.org/document/yyyyyyy'
    }
  ];

  return (
    <motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>

    <section id="publications" className="publications-section">
      <h2>Publications</h2>
      <div className="publications-list">
        {pubs.map((pub, idx) => (
          <div key={idx} className="publication-card">
            <h3>{pub.title}</h3>
            <p><strong>Date:</strong> {pub.date}</p>
            <p>{pub.description}</p>
            {pub.link && (
              <a href={pub.link} target="_blank" rel="noopener noreferrer">
                Read on IEEE Xplore
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
    </motion.section>
  );
}

export default Publications;

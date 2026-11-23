import React from 'react';
import { motion } from 'framer-motion';
import { SiGooglescholar } from 'react-icons/si';
import { publications } from '../data/content';
import '../styles/Research.css';

const SCHOLAR_URL = 'https://scholar.google.com/citations?hl=en&user=oiOf9EsAAAAJ';


const Research = () => {
  return (
    <motion.section
      id="publications"
      className="research-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2>Publications</h2>

      <ul className="research-list">
        {publications.map((pub) => (
          <li key={pub.title} className="research-item">
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="research-item-title"
            >
              {pub.title}
            </a>
            <span className={pub.venue ? 'research-item-venue' : 'research-item-year'}>
              {pub.venue || pub.year}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={SCHOLAR_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="research-scholar-btn"
      >
        <SiGooglescholar />
        View full profile on Google Scholar
      </a>
    </motion.section>
  );
};

export default Research;

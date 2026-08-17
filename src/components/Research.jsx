import React from 'react';
import { motion } from 'framer-motion';
import { SiGooglescholar } from 'react-icons/si';
import '../styles/Research.css';

const SCHOLAR_URL = 'https://scholar.google.com/citations?hl=en&user=oiOf9EsAAAAJ';

const stats = [
  { label: 'Citations', value: '11' },
  { label: 'h-index', value: '2' },
  { label: 'i10-index', value: '0' },
];

const publications = [
  { title: 'Implicit Reasoning Steering via Concept Chaining', year: '2026' },
  {
    title:
      'Rhythm of the Deep: A Computational-Linguistic Test of Duality of Patterning in Sperm Whale Codas',
    year: '2026',
  },
  {
    title: 'Hiding in Plain Floats: Steganographic Carriers for Indirect Prompt and Content Injection',
    year: '2026',
  },
  { title: 'VisAnalog: A Diagnostic Suite for Visual Concept Transfer on Natural Images', year: '2026' },
  { title: 'WebDirect: A Web-based Project Repository', year: '2023' },
  { title: 'A web-based project repository using ReactJS', year: '2022' },
];

const Research = () => {
  return (
    <motion.section
      id="research"
      className="research-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2>Research</h2>

      <div className="research-stats">
        {stats.map((stat) => (
          <div key={stat.label} className="research-stat">
            <span className="research-stat-value">{stat.value}</span>
            <span className="research-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <ul className="research-list">
        {publications.map((pub) => (
          <li key={pub.title} className="research-item">
            <span className="research-item-title">{pub.title}</span>
            <span className="research-item-year">{pub.year}</span>
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

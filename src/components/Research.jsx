import React from 'react';
import { motion } from 'framer-motion';
import { SiGooglescholar } from 'react-icons/si';
import '../styles/Research.css';

const SCHOLAR_URL = 'https://scholar.google.com/citations?hl=en&user=oiOf9EsAAAAJ';

const publications = [
  {
    title: 'Implicit Reasoning Steering via Concept Chaining',
    year: '2026',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oiOf9EsAAAAJ&citation_for_view=oiOf9EsAAAAJ:IjCSPb-OGe4C',
  },
  {
    title:
      'Rhythm of the Deep: A Computational-Linguistic Test of Duality of Patterning in Sperm Whale Codas',
    year: '2026',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oiOf9EsAAAAJ&citation_for_view=oiOf9EsAAAAJ:qjMakFHDy7sC',
  },
  {
    title: 'Hiding in Plain Floats: Steganographic Carriers for Indirect Prompt and Content Injection',
    year: '2026',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oiOf9EsAAAAJ&citation_for_view=oiOf9EsAAAAJ:2osOgNQ5qMEC',
  },
  {
    title: 'VisAnalog: A Diagnostic Suite for Visual Concept Transfer on Natural Images',
    year: '2026',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oiOf9EsAAAAJ&citation_for_view=oiOf9EsAAAAJ:UeHWp8X0CEIC',
  },
  {
    title: 'WebDirect: A Web-based Project Repository',
    year: '2023',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oiOf9EsAAAAJ&citation_for_view=oiOf9EsAAAAJ:9yKSN-GCB0IC',
  },
  {
    title: 'A web-based project repository using ReactJS',
    year: '2022',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oiOf9EsAAAAJ&citation_for_view=oiOf9EsAAAAJ:d1gkVwhDpl0C',
  },
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

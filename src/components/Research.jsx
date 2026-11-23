import React from 'react';
import { motion } from 'framer-motion';
import { SiGooglescholar } from 'react-icons/si';
import '../styles/Research.css';

const SCHOLAR_URL = 'https://scholar.google.com/citations?hl=en&user=oiOf9EsAAAAJ';

// venue: only set for accepted papers. Workshops use the WORKSHOP@CONF short form.
// Papers without a venue show just the year.
const publications = [
  {
    title: 'Hiding in Plain Floats: Steganographic Carriers for Indirect Prompt and Content Injection',
    year: '2026',
    venue: 'FAGEN@ICML 2026',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oiOf9EsAAAAJ&citation_for_view=oiOf9EsAAAAJ:2osOgNQ5qMEC',
  },
  {
    title: 'VisAnalog: A Diagnostic Suite for Visual Concept Transfer on Natural Images',
    year: '2026',
    venue: 'VisCon@CVPR 2026',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oiOf9EsAAAAJ&citation_for_view=oiOf9EsAAAAJ:UeHWp8X0CEIC',
  },
  {
    title: 'Implicit Reasoning Steering via Concept Chaining',
    year: '2026',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oiOf9EsAAAAJ&citation_for_view=oiOf9EsAAAAJ:IjCSPb-OGe4C',
  },
  {
    title: 'How Well Do LLMs Reason with Noisy Evidence? An Active Visual Reasoning Benchmark',
    year: '2026',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oiOf9EsAAAAJ&citation_for_view=oiOf9EsAAAAJ:_FxGoFyzp5QC',
  },
  {
    title: 'Music of the Deep: An Acoustic Blueprint of Sperm Whale Codas',
    year: '2026',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oiOf9EsAAAAJ&citation_for_view=oiOf9EsAAAAJ:LkGwnXOMwfcC',
  },
  {
    title: 'Structure Across Voices: Comparing Acoustic-Event Type Accumulation and Sequence Dependence Across Four Vocal Corpora Using Frozen Audio Encoders',
    year: '2026',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oiOf9EsAAAAJ&citation_for_view=oiOf9EsAAAAJ:roLk4NBRz8UC',
  },
  {
    title: 'Rhythm of the Deep: A Computational-Linguistic Test of Duality of Patterning in Sperm Whale Codas',
    year: '2026',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oiOf9EsAAAAJ&citation_for_view=oiOf9EsAAAAJ:qjMakFHDy7sC',
  },
  {
    title: 'WebDirect: A Web-based Project Repository',
    year: '2023',
    venue: 'ICICCS 2023',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oiOf9EsAAAAJ&citation_for_view=oiOf9EsAAAAJ:9yKSN-GCB0IC',
  },
  {
    title: 'A Web-based Project Repository using ReactJS',
    year: '2022',
    venue: 'ICCCNT 2022',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oiOf9EsAAAAJ&citation_for_view=oiOf9EsAAAAJ:d1gkVwhDpl0C',
  },
];

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

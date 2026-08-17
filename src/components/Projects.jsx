import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Data Memorization Benchmark for LLMs',
    date: 'March 2026',
    bullets: [
      'Designed and operationalized a 6-layer perturbation-based evaluation benchmark to systematically quantify memorization depth in open-weight LLMs, introducing a controlled perturbation hierarchy (paraphrastic, entity-swapped, structural abstraction, domain shift) to stress-test detection methods beyond surface-level recall.',
      'Trained and analyzed OLMo-2 7B models via SFT and GRPO across isolated data strata, uncovering cross-layer generalization artifacts and latent memorization leakage signals.',
      'Benchmarked state-of-the-art memorization detection methods against multi-layer synthetic controls, revealing significant blind spots beyond shallow lexical overlap, and produced research-grade evaluation reports.',
    ],
    tags: ['OLMo-2 7B', 'SFT', 'GRPO'],
  },
  {
    title: 'Multimodal Reasoning Framework — ARC-AGI-2',
    date: 'April 2025 · Strong Compute Hackathon Winner, $2,500 compute prize',
    bullets: [
      'Engineered a synthetic data generation pipeline for the ARC-AGI-2 challenge benchmark, demonstrating superior general pattern recognition capabilities in a vision-LLM model.',
      'Structured model responses using three custom token blocks (visual explanation, logical planning, transformation code), improving interpretability and enabling systematic reasoning on abstract visual patterns.',
      'Achieved a 75+% resolution rate by training a reward model with SFT and GRPO alongside LIMO-based reasoning, significantly enhancing generalization across unseen pattern-recognition tasks.',
    ],
    tags: ['Vision-LLM', 'SFT', 'GRPO', 'LIMO'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3>{project.title}</h3>
            <p className="project-date">{project.date}</p>
            <ul className="project-bullets">
              {project.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

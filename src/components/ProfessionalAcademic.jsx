import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ProfessionalAcademic.css';

const experiences = [
  {
    title: 'Research Engineer – Evals Lead',
    subheading: 'AGI, Inc. · May 2026 – Present',
    bullets: [
      'Building a scalable benchmarking and evaluation automation system for agentic LLMs, defining metrics and testing protocols for continuous automated evaluation, regression detection, and reproducible model comparisons.',
      'Engineering state-control and orchestration infrastructure for live mobile-app benchmarks, automating device/application reset and pre-run validation to enable reproducible evaluation despite dynamic external state.',
      'Designed QA rubrics and golden-trajectory review processes for long-horizon tasks, establishing auditable evaluation frameworks that separate model failures from judge, task, environment, and harness errors.',
    ],
    tags: [],
  },
  {
    title: 'AI Research — Google Gemini Project Team at Turing',
    subheading: 'Turing · September 2025 – May 2026',
    bullets: [
      'Designed a multimodal evaluation framework for technically grounded image-generation tasks.',
      'Benchmarked frontier multimodal LLMs, including Gemini variants, for stability, variance, and consistency across repeated runs.',
      'Built automated evaluation pipelines that cut analysis turnaround by 60% and produced research reports translating visual performance gaps into model-improvement signals.',
    ],
    tags: [],
  },
  {
    title: 'Research Assistant',
    subheading: 'Arizona State University · January 2025 – Present',
    bullets: [
      'Implemented distributed training of large language models (Qwen 2.5 Math 7B) with CUDA, PyTorch, FlashAttention, and vLLM on A100 GPUs, achieving a 2.8x training throughput increase through system optimization.',
      'Replicated and enhanced the Tiny Zero reasoning framework using iterative SFT in place of GRPO, improving model performance by 15% through self-learning.',
      'Designed a comprehensive evaluation framework with automated metrics tracking and effective resource allocation, reducing assessment time by 70% while increasing result reliability.',
    ],
    tags: ['CUDA', 'PyTorch', 'FlashAttention', 'vLLM'],
  },
];

const ProfessionalAcademic = () => {
  return (
    <motion.section
      id="professional-academic"
      className="professional-academic-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2>Experience</h2>
      <div className="experience-container">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.title}
            className="experience-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3>{experience.title}</h3>
            <h4>{experience.subheading}</h4>
            <ul className="experience-bullets">
              {experience.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            {experience.tags.length > 0 && (
              <div className="experience-tags">
                {experience.tags.map((tag) => (
                  <span key={tag} className="experience-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProfessionalAcademic;

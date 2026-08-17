import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const skillCategories = {
  'ML/AI & Methods': [
    'TensorFlow',
    'PyTorch',
    'Hugging Face',
    'DeepSpeed/ZeRO',
    'FlashAttention',
    'Transformers',
    'RNNs',
    'CNNs',
    'Reinforcement Learning',
    'Transfer Learning',
    'Few-Shot Learning',
    'Hyperparameter Tuning',
    'Cross-Validation',
    'Bayesian Optimization',
  ],
  'Data/Systems & Deployment': [
    'Scikit-learn',
    'Pandas',
    'Matplotlib',
    'MATLAB',
    'MLOps',
    'MLflow',
    'CI/CD',
    'Git',
    'Docker',
    'CUDA',
    'Ray',
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>
      {Object.entries(skillCategories).map(([category, skills], catIndex) => (
        <div key={category} className="skills-category">
          <h3>{category}</h3>
          <div className="skills-pills">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                className="skill-pill"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: catIndex * 0.1 + i * 0.02 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;

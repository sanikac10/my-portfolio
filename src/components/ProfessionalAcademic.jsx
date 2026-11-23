import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/content';
import '../styles/ProfessionalAcademic.css';


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

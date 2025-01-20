import React from 'react';
import { motion } from 'framer-motion';
import '../styles/AcademicExtracurricular.css';

function AcademicExtracurricular() {
  const achievements = [
    {
      title: "Vice President (Management)",
      organization: "Information Technology Student Association",
      date: "July 2021",
      description: "Organized 20+ CS-related events (hackathons, tech talks, competitions). Enhanced teamwork & event management for a 45-member organization.",
      highlights: [
        "Led team of 45 members",
        "Organized 20+ technical events",
        "Increased member engagement by 40%",
        "Established 5 new industry partnerships"
      ]
    }
  ];

  return (
    <motion.section
      id="academic-extracurricular"
      className="acad-extra-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2>Extracurricular</h2>
      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="achievement-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3>{achievement.title}</h3>
            <h4>{achievement.organization}</h4>
            <p className="achievement-date">{achievement.date}</p>
            <p className="achievement-description">{achievement.description}</p>
            <ul className="achievement-highlights">
              {achievement.highlights.map((highlight, i) => (
                <li key={i}>
                  <span className="highlight-number">{highlight.match(/\d+/)?.[0]}</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default AcademicExtracurricular;
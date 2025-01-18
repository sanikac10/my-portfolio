// src/components/Projects.jsx
import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Projects.css'

function highlightNumbers(text) {
  // Skip 4-digit years in date lines => 
  // We only highlight digits in the paragraphs
  return text.replace(
    /(\b\d+(\.\d+)?x?%?\b)/g,
    '<span class="number-highlight">$1</span>'
  )
}

function Projects() {
  const projects = [
    {
      title: 'Data Leakage in LLMs',
      date: 'December 2024',
      details: [
        'Designed and implemented a detection pipeline to identify key data leakage scenarios in large language models, including Seen Question and Answer, Seen Question, Similar Question, and Seen Relevant Information, using different datasets.',
        'Evaluated five diverse models (e.g., GPT-4o, Claude-3.5, Llama-3.2) to analyze susceptibility to leakage, revealing key insights about model generalization, reasoning, and reliance on training data patterns.',
        'Developed and validated the Relevant Information module, leveraging techniques like Part of Speech tagging and entailment checks to detect data leakage and highlight the need for robust training processes and dynamic evaluation benchmarks.'
      ],
      stack: ['NLP', 'Python', 'LLM'],
      github: 'https://github.com/placeholder/data-leakage-llms'
    },
    {
      title: 'KAN You See the Bias?',
      date: 'December 2024',
      details: [
        'Faced the challenge of bias in machine learning models impacting human-centric decisions. Built a storytelling visualization using ADULT and WESAD datasets, integrating heatmaps and bias distribution plots to communicate these effects. Improved user engagement by 20%.',
        'Analysed and compared MLP vs. KAN architectures, demonstrating a 10% improvement in generalization and reduced bias with KANs, providing insights for GDPR/HIPAA-compliant ML models.'
      ],
      stack: ['Python', 'Keras', 'Bias Visualization'],
      github: 'https://github.com/placeholder/kan-bias'
    },
    {
      title: 'WebDirect',
      date: 'March 2023',
      details: [
        'Developed a web portal using ReactJS and MongoDB, featuring a content-based recommendation system powered by ML and cosine similarity.',
        'Selected as one of the top 10 out of 100 submissions in Smart India Hackathon.'
      ],
      stack: ['React', 'MongoDB', 'Cosine Similarity'],
      github: 'https://github.com/placeholder/webdirect'
    },
    {
      title: 'VFind: Web App for reselling and socializing with academic peers',
      date: 'March 2022',
      details: [
        'Designed a website using ReactJS and Firebase, enabling students to resell academic materials and facilitating interaction between students, peers, and professors.',
        'Enhanced peer communication within the institution, improving engagement and interaction by 20% among students and academic staff.'
      ],
      stack: ['React', 'Firebase'],
      github: 'https://github.com/placeholder/vfind'
    },
    {
      title: 'Guess The Flag - iOS Game App',
      date: 'January 2022',
      details: [
        'Developed an iOS application using SwiftUI and JSON to help users remember the flags of different countries through engaging quizzes.',
        'Increased accuracy by 2x through continuous practice and data-driven feedback.'
      ],
      stack: ['SwiftUI', 'JSON', 'iOS'],
      github: 'https://github.com/placeholder/guess-the-flag'
    }
    
  ]

  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2>Projects</h2>
      <p className="projects-intro">
        Here are some highlights, each with a brief overview and tech stack:
      </p>

      <div className="projects-list">
        {projects.map((proj, idx) => {
          // highlight numbers in the paragraphs
          const detailParagraphs = proj.details.map((line, i) => (
            <p
              key={i}
              dangerouslySetInnerHTML={{ __html: highlightNumbers(line) }}
            />
          ))

          return (
            <div key={idx} className="project-card unboxed">
              <h3>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {proj.title}
                </a>
                <span className="proj-date"> {proj.date}</span>
              </h3>

              <div className="project-details">{detailParagraphs}</div>
              <div className="proj-stack-badges">
                {proj.stack.map((tech) => (
                  <span key={tech} className="stack-badge">{tech}</span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </motion.section>
  )
}

export default Projects

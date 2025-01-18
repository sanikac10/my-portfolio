// src/components/ProfessionalAcademic.jsx
import React from 'react'
import { motion } from 'framer-motion'
import '../styles/ProfessionalAcademic.css'

/**
 * Only highlight numeric references (like 2x, 1.25x, 45, etc.) in paragraphs,
 * but do NOT highlight 4-digit years or date lines.
 */
function highlightNumbers(text) {
  return text.replace(
    /(\b\d+(\.\d+)?x?%?\b)/g, 
    '<span class="number-highlight">$1</span>'
  )
}

function ProfessionalAcademic() {
  const experiences = [
    {
      title: 'Frontend Engineer Intern',
      subheading: 'Conected VIT, Mumbai',
      date: 'March 2022',
      details: [
        'Designed a user interface for Conected VIT\'s startup website, ensuring adherence to design standards. Over 5 comprehensive visualizations were developed using Adobe XD and Figma.',
        'The meticulously crafted design significantly enhanced user experience, leading to a 1.25x increase in user engagement.'
      ],
      skills: ['UI/UX', 'Figma', 'Adobe XD']
    },
    {
      title: 'Software Developer Intern',
      subheading: 'Vidyalankar Institute of Technology, Mumbai',
      date: 'August 2021',
      details: [
        'Led the design and implementation of a Student Repository System using Java and MySQL, efficiently managing and monitoring students over 10 different types of extracurricular activities.',
        'Deployed the Student Repository System, resulting in its widespread adoption by the institute in 3 months.',
        'It led to a 2x reduction in overhead for schools in managing extracurricular activities and monitoring student participation.'
      ],
      skills: ['Java', 'MySQL']
    },
    {
      title: 'Research Assistant',
      subheading: 'Arizona State University',
      date: 'December 2024',
      details: [
        'Researched and developed spatial query algorithms, including ST_Contains and ST_Within, using Apache Spark and SparkSQL to optimize large-scale data processing workflows.',
        'Conducted performance evaluation and benchmarking for spatial query solutions, implementing Hot Zone Analysis to identify high-density regions in large datasets.'
      ],
      skills: ['SparkSQL', 'Spatial Queries', 'Benchmarking']
    },
    {
      title: 'Graduate Services Assistant (Grader – CSE330, CSE355, CSE511, IFT166)',
      subheading: 'Arizona State University, Tempe, AZ',
      date: 'May 2024 - May 2025',
      details: [
        'Evaluated assignments, projects, and exams across a variety of courses, including advanced topics such as SparkSQL, query optimization, finite automata, regular languages, Turing machines, computational complexity, and operating system concepts, ensuring precise and fair assessment of students’ understanding.',
        'Provided personalized guidance and conducted doubt-clearing sessions to help students navigate challenging concepts in data processing, formal language theory, and theoretical computer science, fostering deeper comprehension and academic success.',
        'Authored detailed project documentation and offered constructive feedback to enhance students’ understanding of scalable data pipelines, distributed Neo4j setups, and computational models, encouraging self-guided learning and exploration.',
        'Collaborated with faculty and teaching assistants to design comprehensive grading rubrics, ensuring consistent and fair evaluations across all courses while maintaining high academic standards.',
        'Guided students in designing a scalable data processing pipeline to process document streams and integrate outputs into a distributed Neo4j setup for near real-time analytics, showcasing expertise in data systems and applied computational methods.'
      ],
      skills: [
        'SparkSQL', 'Neo4j', 'Distributed Systems', 'Finite Automata', 'Turing Machines',
        'Computational Complexity', 'Operating Systems', 'Data Pipelines', 'Real-Time Analytics',
        'Grading', 'Documentation'
      ]
    },
    {
        title: 'Teaching Assistant, Artificial Intelligence',
      subheading: 'Vidyalankar Institute of Technology, Mumbai, India',
      date: 'June 2023',
      details: [
        'Successfully guided 100+ junior engineering students in AIDS concepts in performing 20+ laboratory experiments.',
        'Formulated more than 25 lab materials for Artificial Intelligence and Data Science courses utilizing Python libraries.',
        'Played a pivotal role in enhancing the institutes Data Science lab curriculum by conducting in-depth research and integrating relevant, up-to-date lab materials.'
      ],
      skills: [
        'NumPy', 'Keras', 'Apache Spark', 'Skikit-Learn', 'Seaborn', 'Tensorflow', 'Pandas'
      ]
    }

  ]

  return (
    <motion.section
      id="professional-academic"
      className="prof-acad-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2>Professional &amp; Academic Experience</h2>

      <div className="experience-list">
        {experiences.map((exp, idx) => {
          // Convert each paragraph in details with highlightNumbers
          const detailParagraphs = exp.details.map((d, i) => {
            const replaced = highlightNumbers(d)
            return (
              <p
                key={i}
                dangerouslySetInnerHTML={{ __html: replaced }}
              />
            )
          })

          return (
            <div key={idx} className="experience-card unboxed">
              {/* Title (1 line), Subheading (next line), Date (next line) */}
              <h3>{exp.title}</h3>
              <h4 className="experience-subheading">{exp.subheading}</h4>
              <div className="experience-date">{exp.date}</div>

              <div className="exp-details">{detailParagraphs}</div>

              {/* skill badges (dark background, green text) */}
              <div className="exp-skill-badges">
                {exp.skills.map((skill) => (
                  <span key={skill} className="exp-skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Additional role: Teaching Assistant (AI) at bottom */}
      
    </motion.section>
  )
}

export default ProfessionalAcademic

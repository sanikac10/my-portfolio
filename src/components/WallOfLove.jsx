import React from 'react';
import { motion } from 'framer-motion';
import '../styles/WallOfLove.css';

function WallOfLove() {
  const testimonials = [
    {
        text: 'Sanika is incredibly hardworking and always gives her best to whatever she takes on. Her dedication and ability to stay focused make her a reliable and inspiring person to work with.',
        name: 'Varnit Batheja',
        role: 'Data Science Intern, LEANIAR LLC',
      },
    {
      text: 'An outstanding React and Node.js developer whose deep expertise in TypeScript and modern JavaScript frameworks enables her to build robust, scalable applications. Her creative problem-solving abilities and strong technical understanding make her particularly effective at tackling complex development challenges, while her positive attitude and willingness to share knowledge make her an invaluable team member who elevates any development environment she joins.',
      name: 'Mudit Sinha',
      role: 'AI Lead, Lineaje',
    },
    {
      text: 'Sanika is an exceptional full-stack developer, distinguished by her remarkable problem-solving skills and expertise in technologies such as React, Node.js, and D3.js. What truly sets her apart, however, is her outstanding collaboration skills and unwavering commitment to producing clean, maintainable code. Her innate ability to craft intuitive and user-friendly applications is evident in every project she undertakes. Any team would greatly benefit from her talent, professionalism, and consistent delivery of high-quality work.',
      name: 'Mohammed Ilyas Ahmad',
      role: 'Cybersecurity DevOps Architect, Adobe',
    },
    {
      text: 'Sanika Chavan\'s expertise in building robust data processing systems and her deep understanding of secure application development are remarkable. Her ability to integrate technologies like Apache Spark and Neo4j with a focus on data integrity and scalability showcases a strong foundation in secure system architecture',
      name: 'Apoorwa Joshi',
      role: 'Security Engineer 2, Amazon',
    },
    {
        text: 'Sanika is a highly skilled and collaborative professional with expertise in software development and project management. Proficient in programming languages such as Java, React, and React Native, she combines technical excellence with a strong team-oriented approach. Sanika consistently delivers innovative solutions, fosters seamless collaboration across teams, and excels at adapting to complex challenges, making her an invaluable asset to any organization or project.',
        name: 'Tanish Mohanty',
        role: 'Backend SQL Developer, TCS'
    }
  ];

  return (
    <section id="wall-of-love" className="wall-of-love-section">
      <h2>Wall of Love</h2>
      <div className="testimonials-container">
        <div className="testimonials-scroll">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WallOfLove;
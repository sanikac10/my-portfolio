import React from "react";
import "../styles/Projects.css";
import { BiChart } from "react-icons/bi";

import { 
  FaPython, FaReact, FaDatabase,
  FaBrain, FaChartBar, FaFileCode, FaRobot,
  FaAws
} from "react-icons/fa";

import { 
  SiTensorflow, SiMongodb, SiFirebase,
  SiJupyter, SiScikitlearn, SiPandas,
  SiOpenai, SiD3Dotjs, SiNodedotjs,
  SiJavascript, SiTypescript, SiSwift, SiJson
} from "react-icons/si";

const techIcons = {
  python: FaPython,
  react: FaReact,
  mongodb: SiMongodb,
  firebase: SiFirebase,
  javascript: SiJavascript,
  typescript: SiTypescript,
  nodejs: SiNodedotjs,
  tensorflow: SiTensorflow,
  "gpt-api": SiOpenai,
  "claude-api": FaRobot,
  "data-analysis": SiJupyter,
  "data-visualization": SiD3Dotjs,
  d3: SiD3Dotjs,
  swift: SiSwift,
  json: FaFileCode,
  pandas: SiPandas,
  numpy: SiNumpy,
};

const brandColors = {
  python: "#3776AB",
  react: "#61DAFB",
  mongodb: "#47A248",
  firebase: "#FFCA28",
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  nodejs: "#339933",
  tensorflow: "#FF6F00",
  "gpt-api": "#412991",
  "claude-api": "#2EFCA3",
  d3: "#F9A03C",
  swift: "#FA7343",
  chartdot: "",
  FaFileCode: "#3A3D98",
  pandas: "#150458",
  numpy: "#013243",
};

const projects = [
  {
    title: "Multi-Stage Reasoning Framework for VLLMs",
    date: "April 2025",
    description: "A synthetic data generation pipeline for the ARC-AGI-2 challenge benchmark, demonstrating superior general pattern recognition capabilities in our vision-LLM model.",
    stack: ["python", "gpt-api", "tensorflow", "data-analysis"],
  },
  {
    title: "Data Leakage in LLMs",
    date: "December 2024",
    description:
      "Designed a detection pipeline to identify data leakage scenarios in LLMs, evaluating models like GPT-4o and Llama-3.2.",
    stack: ["python", "gpt-api", "claude-api", "tensorflow","data-analysis"],
  },
  {
    title: "KAN You See the Bias?",
    date: "December 2024",
    description:
      "Created a visualization to study bias in MLPs vs. KANs using ADULT and WESAD datasets, highlighting bias reduction techniques.",
    stack: ["python", "tensorflow", "javascript", "d3"],
  },
  {
    title: "WebDirect",
    date: "March 2023",
    description:
      "Built a web portal using ReactJS and MongoDB, featuring a content-based recommendation system powered by cosine similarity.",
    stack: ["react","javascript", "mongodb", "tensorflow"],
  },
  {
    title: "VFind: Reselling & socializing Web App",
    date: "March 2022",
    description:
      "Designed and developed a platform for students to resell academic materials and interact with peers.",
    stack: ["react","javascript", "firebase",],
  },
  {
    title: "Guess The Flag - iOS Game App",
    date: "January 2022",
    description:
      "Developed a game app using SwiftUI and JSON to help users learn flags through engaging quizzes.",
    stack: ["swift", "json", "firebase"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <p className="projects-intro">
        Here are some highlights, each with a brief overview and tech stack:
      </p>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-date">{project.date}</p>
            <p>{project.description}</p>
            <div className="project-stack">
              {project.stack.map((tech) => {
                const IconComponent = techIcons[tech];
                return IconComponent ? (
                  <IconComponent 
                    key={tech} 
                    size={50} 
                    color={brandColors[tech] || "#2efca3"}
                    style={{
                      backgroundColor: tech === 'github' ? '#fff' : 'transparent',
                      borderRadius: tech === 'github' ? '50%' : '0',
                      padding: tech === 'github' ? '4px' : '0'
                    }}
                  />
                ) : (
                  <span key={tech} className="fallback-icon">
                    {tech.charAt(0).toUpperCase()}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
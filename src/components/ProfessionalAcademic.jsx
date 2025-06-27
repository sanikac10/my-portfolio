import React from "react";
import { motion } from "framer-motion";
import { DiDatabase } from "react-icons/di";
import "../styles/ProfessionalAcademic.css";
import { 
    FaPython, FaJava, FaFigma, FaDatabase,
    FaBrain, FaChartBar, FaCode, FaRobot,
    FaAws
  } from "react-icons/fa";
  
  import { 
    SiPostgresql, SiMysql, SiNumpy, 
    SiScikitlearn, SiTensorflow, SiPandas, 
    SiAdobexd, SiGraphql, SiGit, SiGithub,
    SiD3Dotjs, SiNodedotjs, SiReact, SiJavascript,
    SiTypescript, SiApache, SiJupyter, SiPytorch, SiDocker, SiApachekafka, SiSwift, SiLinux, SiOpenai
  } from "react-icons/si";
  
  const techIcons = {
    python: FaPython,
    java: FaJava,
    aws: FaAws,
    figma: FaFigma,
    pytorch: SiPytorch,
    linux: SiLinux,
    javascript: SiJavascript,
    typescript: SiTypescript,
    jupyter: SiJupyter,
    kafka: SiApachekafka,
    react: SiReact,
    nodejs: SiNodedotjs,
    postgresql: SiPostgresql,
    "data-pipelines": FaChartBar,
    mysql: SiMysql,
    git: SiGit,
    github: SiGithub,
    "adobe-xd": SiAdobexd,
    "ui-ux": FaFigma,
    "apache-spark": SiApache,
    numpy: SiNumpy,
    "scikit-learn": SiScikitlearn,
    tensorflow: SiTensorflow,
    pandas: SiPandas,
    d3: SiD3Dotjs,
    docker: SiDocker,
    swift: SiSwift,
    "gpt-api": SiOpenai,
    "claude-api": FaRobot,
  };
  
  const brandColors = {
    python: "#3776AB",
    java: "#007396",
    linux: "#FCC624",
    "data-pipelines": "#FF6B6B",
    FaChartBar: "#2C699A",
    aws: "#FF9900",
    javascript: "#F7DF1E",
    typescript: "#3178C6",
    react: "#61DAFB",
    nodejs: "#339933",
    postgresql: "#4169E1",
    mysql: "#4479A1",
    git: "#F05032",
    github: "#181717",
    figma: "#F24E1E",
    "adobe-xd": "#FF61F6",
    "apache-spark": "#E25A1C",
    numpy: "#013243",
    "scikit-learn": "#F7931E",
    tensorflow: "#FF6F00",
    pandas: "#150458",
    d3: "#F9A03C",
    pytorch: "#EE4C2C",
    docker:"#2496ED",
    kafka: "#00C7B7",
    "gpt-api": "#412991",
    "claude-api": "#2EFCA3",
  };

const experiences = [
  
  {
    title: "AI Researcher",
    subheading: "Arizona State University",
    date: "June 2025",
    description: "Working on mulitmodel retrieval embeddings and object-object similarity relationship, along with data leakage pipeline to detect potential ways for data leakage in Large Language Models",
    stack: ["python", "pytorch", "gpt-api", "claude-api","tensorflow", "numpy", "pandas", "git"],
  },
  {
    title: "AI Reseach",
    subheading: "Arizona State University",
    date: "January 2025",
    description: "Implemented distributed training of large language models (Qwen 2.5 Math 7B) with CUDA, with distributed training with A100 GPUs, achieving a 2.8x training throughput increase through system optimization, parallel processing. Replicated and enhanced Tiny Zero reasoning framework using iterative SFT instead of GRPO, incorporating iterative fine-tuning with correct/incorrect labels (Reinforcement Learning) to improve model performance by 15%. Designed a comprehensive evaluation framework with automated metrics tracking, reducing assessment time by 70% while increasing result reliability. Engineered SLURM scripts for efficient resource allocation and batch processing, enabling 24/7 training utilization across shared compute infrastructure.",
    stack: ["python", "pytorch", "tensorflow", "gpt-api", "claude-api", "numpy", "pandas", "git"],
  },
  {
    title: "Research Assistant",
    subheading: "Arizona State University",
    date: "December 2024",
    description:
      "Researched and developed spatial query algorithms and conducted performance benchmarking for SparkSQL.",
    stack: ["postgresql", "apache-spark", "kafka", "linux", "git"],
  },
  {
    title: "Teaching Assistant, Artificial Intelligence",
    subheading: "Vidyalankar Institute of Technology, Mumbai",
    date: "June 2023",
    description:
      "Guided 100+ students in AI and Data Science lab experiments, utilizing Python libraries and tools for hands-on learning.",
    stack: ["numpy", "tensorflow", "scikit-learn", "pandas", "pytorch", "jupyter"],
  },
  {
    title: "Frontend Engineer Intern",
    subheading: "Conected VIT, Mumbai",
    date: "March 2022",
    description:
      "Designed and implemented UI/UX components using Figma and Adobe XD, resulting in a 1.25x increase in user engagement.",
    stack: ["react", "adobe-xd", "ui-ux"],
  },
  {
    title: "Software Developer Intern",
    subheading: "Vidyalankar Institute of Technology, Mumbai",
    date: "August 2021",
    description:
      "Implemented a student repository system using Java and MySQL, reducing overhead for school officials.",
    stack: ["java", "mysql", "git", "docker"],
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
      <h2>Professional & Academic Experience</h2>
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
            <p>{experience.date}</p>
            <p>{experience.description}</p>
            <div className="experience-stack">
                {experience.stack.map((tech) => {
                    const IconComponent = techIcons[tech];
                    return IconComponent ? (
                    <IconComponent 
                        key={tech} 
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
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProfessionalAcademic;
import React from "react";
import { 
  SiPython, SiJavascript, SiTypescript, 
  SiReact, SiNodedotjs, SiBootstrap, SiTailwindcss,
  SiDocker, SiKubernetes, SiJenkins, SiGit, SiGithub,
  SiFirebase, SiPostgresql, SiMongodb,
  SiApache, SiTensorflow, SiPytorch, SiSelenium,
  SiNumpy, SiPandas, SiScikitlearn, 
  SiGraphql, SiC, SiFigma, SiAdobexd, SiOpenai,
  SiHtml5, SiCss3, SiSwift, SiD3Dotjs, SiApachekafka, SiFastapi, SiApachespark, SiLinux
} from "react-icons/si";
import { FaRobot, FaBrain, FaDatabase, FaSearch, FaAws,FaJava } from "react-icons/fa";
import "../styles/Skills.css";

const skillCategories = {
  "Programming Languages": [
    "python",
    "javascript",
    "typescript",
    "java",
    "swift",
    "c",
    "html",
    "css",
  ],
  "Frameworks & Libraries": [
    "react",
    "nodejs",
    "d3",
    "numpy",
    "pandas",
    "scikit-learn",
    "tensorflow",
    "pytorch",
    "graphql",
    "bootstrap",
    "tailwind",
    "fastapi"
  ],
  "Tools & Technologies": [
    "openai",
    "claude",
    "llama",
    "transformer",
    "rag",
    "docker",
    "kafka",
    "apachespark",
    "kubernetes",
    "jenkins",
    "git",
    "github",
    "firebase",
    "aws",
    "postgresql",
    "mongodb",
    "apache",
    "selenium",
    "figma",
    "adobe",
    "linux"
  ],
};

const brandColors = {
  python: "#3776AB",
  linux: "#FCC624",
  apachespark: "#E25A1C",
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  java: "#007396",
  swift: "#FA7343",
  d3: "#F9A03C",
  c: "#A8B9CC",
  html: "#E34F26",
  css: "#1572B6",
  react: "#61DAFB",
  nodejs: "#339933",
  graphql: "#E10098",
  bootstrap: "#7952B3",
  tailwind: "#06B6D4",
  numpy: "#013243",
  pandas: "#150458",
  SiFastapi: "#009688",
  "scikit-learn": "#F7931E",
  openai: "#412991",
  claude: "#2EFCA3",
  llama: "#2EFCA3",
  transformer: "#FF6B6B",
  rag: "#4CAF50",
  docker: "#2496ED",
  kubernetes: "#326CE5",
  jenkins: "#D24939",
  git: "#F05032",
  github: "#181717",
  firebase: "#FFCA28",
  aws: "#FF9900",
  postgresql: "#4169E1",
  mongodb: "#47A248",
  apache: "#D22128",
  tensorflow: "#FF6F00",
  pytorch: "#EE4C2C",
  selenium: "#43B02A",
  figma: "#F24E1E",
  adobe: "#FF0000",
  kafka: "#00C7B7"
};

const techIcons = {
  python: SiPython,
  kafka: SiApachekafka,
  fastapi: SiFastapi,
  linux: SiLinux,
  javascript: SiJavascript,
  typescript: SiTypescript,
  d3: SiD3Dotjs,
  java: FaJava,
  swift: SiSwift,
  c: SiC,
  html: SiHtml5,
  css: SiCss3,
  react: SiReact,
  nodejs: SiNodedotjs,
  graphql: SiGraphql,
  bootstrap: SiBootstrap,
  tailwind: SiTailwindcss,
  numpy: SiNumpy,
  pandas: SiPandas,
  apachespark: SiApachespark,
  "scikit-learn": SiScikitlearn,
  openai: SiOpenai,
  claude: FaRobot,
  llama: FaDatabase,
  transformer: FaBrain,
  rag: FaSearch,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  jenkins: SiJenkins,
  git: SiGit,
  github: SiGithub,
  firebase: SiFirebase,
  aws: FaAws,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  apache: SiApache,
  tensorflow: SiTensorflow,
  pytorch: SiPytorch,
  selenium: SiSelenium,
  figma: SiFigma,
  adobe: SiAdobexd
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="skills-category">
          <h3>{category}</h3>
          <div className="skills-container">
            {skills.map((skill) => {
              const IconComponent = techIcons[skill];
              return (
                <div key={skill} className="skill-card">
                  {IconComponent ? (
                    <div className="icon-wrapper">
                      <IconComponent
                        size={40}
                        color={brandColors[skill] || "#2efca3"}
                        style={{
                          backgroundColor: skill === 'github' ? '#fff' : 'transparent',
                          borderRadius: skill === 'github' ? '50%' : '0',
                          padding: skill === 'github' ? '4px' : '0'
                        }}
                      />
                    </div>
                  ) : (
                    <span className="fallback-icon">
                      {skill.charAt(0).toUpperCase()}
                    </span>
                  )}
                  <p>{skill.replace(/-/g, " ").toUpperCase()}</p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
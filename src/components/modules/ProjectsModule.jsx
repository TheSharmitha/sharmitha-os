import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Terminal, ArrowUpRight, ExternalLink, Activity } from 'lucide-react';

const GithubIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
import audioController from '../AudioController';

export default function ProjectsModule({ onClose }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 0,
      title: "Vision System Online",
      subtitle: "REAL-TIME FACE DETECTION",
      tech: ["OpenCV", "Python", "Docker", "Jenkins", "DevOps"],
      desc: "An automated computer vision scanning network utilizing image matrix analysis for high-fidelity facial tracking and real-time detection.",
      bullets: [
        "Developed a robust real-time face detection system using OpenCV and Python.",
        "Created an automated CI/CD pipeline using Docker and Jenkins for microservice deployment.",
        "Utilized containerization to scale detection nodes dynamically under varying CPU loads."
      ],
      diagnostics: {
        accuracy: "98.2%",
        inferenceTime: "12ms",
        deployment: "Docker Container",
        pipelineStatus: "SUCCESSFUL"
      },
      github: "https://github.com/TheSharmitha",
      demo: null
    },
    {
      id: 1,
      title: "NLP Engine Online",
      subtitle: "RESUME ANALYZER FULL STACK",
      tech: ["React", "Node.js", "Express.js", "MySQL", "NLP", "NLTK"],
      desc: "A natural language parsing system designed to scan text inputs, extract critical technical coordinates, and evaluate matches against parameters.",
      bullets: [
        "Developed a responsive full-stack web interface with React and Node.js.",
        "Implemented NLP tokenization algorithms to extract skills and experience blocks from PDF resumes.",
        "Built relational database mappings in MySQL for automatic candidate-to-job pairing."
      ],
      diagnostics: {
        parsingSpeed: "0.4s",
        accuracy: "92.5%",
        dbLatency: "18ms",
        apiStatus: "ACTIVE"
      },
      github: "https://github.com/TheSharmitha",
      demo: null
    },
    {
      id: 2,
      title: "Threat Analysis Module",
      subtitle: "AI-BASED FRAUD DETECTION",
      tech: ["Isolation Forest", "Autoencoders", "SMOTE", "Scikit-Learn", "Python"],
      desc: "An anomaly detection algorithm auditing data transactions. Identifies unauthorized access, suspicious behaviors, and potential vulnerabilities.",
      bullets: [
        "Constructed deep Autoencoders and Isolation Forest models for transaction outlier mapping.",
        "Utilized SMOTE techniques to resolve extreme minority-class imbalance in training telemetry.",
        "Evaluated model performance using ROC-AUC, precision, and recall ratios to minimize false alarms."
      ],
      diagnostics: {
        rocAuc: "0.988",
        recallRatio: "96.4%",
        precision: "94.2%",
        engineStatus: "SHIELDED"
      },
      github: "https://github.com/TheSharmitha",
      demo: null
    },
    {
      id: 3,
      title: "Knowledge Core Active",
      subtitle: "INTELLIGENT RESEARCH ASSISTANT",
      tech: ["Transformers", "NLTK", "Python", "Streamlit", "AI"],
      desc: "An intelligent query terminal summarizing and index-linking massive academic journals and research reports.",
      bullets: [
        "Engineered an NLP summarizer using transformer-based embeddings and NLTK text processing.",
        "Constructed a clean, recruiter-friendly search interface using Streamlit.",
        "Reduced information extraction time for research papers by 80% through automatic core extraction."
      ],
      diagnostics: {
        modelSize: "340M params",
        compression: "5:1 Ratio",
        apiResponse: "24ms",
        coreStatus: "ONLINE"
      },
      github: "https://github.com/TheSharmitha",
      demo: null
    },
    {
      id: 4,
      title: "Scientific Data Analysis Module",
      subtitle: "PARTICLE COLLISION ANALYSIS",
      tech: ["K-Means", "DBSCAN", "Pandas", "Matplotlib", "Plotly"],
      desc: "A simulation grid parsing high-energy collision vectors, classifying cluster configurations and isolating outlier noise.",
      bullets: [
        "Simulated and analyzed complex particle collision coordinates using cluster models.",
        "Deployed unsupervised K-Means and DBSCAN algorithms to detect anomalous collision events.",
        "Built interactive visual graphs using Matplotlib and Plotly for vector tracking."
      ],
      diagnostics: {
        clusterResolution: "10-D space",
        outlierDetection: "DBSCAN (minPts:5)",
        visRender: "Plotly Interactive",
        stabilization: "STABLE"
      },
      github: "https://github.com/TheSharmitha",
      demo: null
    }
  ];

  const handleProjectSelect = (proj) => {
    setSelectedProject(proj);
    audioController.playClick();
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
    audioController.playClick();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="relative w-[92%] md:w-full md:flex-1 max-w-3xl max-h-none md:max-h-full overflow-y-visible md:overflow-y-auto hud-glass p-6 rounded-lg pointer-events-auto z-20 text-[#d2e5ff] hud-scrollbar border-jarvis-blue/30 mx-auto my-4 md:my-0 md:mx-auto"
    >
      {/* Header */}
      <div className="flex justify-between items-center hud-glass-header pb-2 mb-5">
        <div className="flex items-center gap-2 text-jarvis-blue">
          <Briefcase size={16} />
          <span className="font-orbitron tracking-widest text-sm font-bold uppercase">ACTIVE AI MODULE DIRECTORY // SYS_03</span>
        </div>
        <button
          onClick={onClose}
          className="text-jarvis-blue/70 hover:text-jarvis-blue text-xs font-bold font-orbitron border border-jarvis-blue/30 px-2 py-0.5 rounded hover:bg-jarvis-blue/10"
        >
          CLOSE
        </button>
      </div>

      <AnimatePresence mode="wait">
        {!selectedProject ? (
          /* Projects grid */
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {projects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => handleProjectSelect(proj)}
                className="border border-jarvis-blue/25 hover:border-jarvis-blue/70 bg-jarvis-dark/50 hover:bg-jarvis-blue/5 p-5 rounded-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Visual scanner bars */}
                <div className="absolute top-0 left-0 w-2.5 h-full bg-jarvis-blue/20 group-hover:bg-jarvis-blue transition-colors duration-300" />
                
                <div className="pl-3">
                  <div className="text-[10px] text-jarvis-blue/60 font-bold tracking-widest mb-1 font-mono uppercase">
                    {proj.subtitle}
                  </div>
                  <h3 className="font-orbitron font-extrabold text-[#d2e5ff] group-hover:text-jarvis-blue text-sm tracking-wider transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-[#8eb0d9] tracking-wider leading-relaxed my-3 line-clamp-2">
                    {proj.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pl-3 mt-3">
                  {proj.tech.slice(0, 3).map((t, idx) => (
                    <span key={idx} className="text-[8px] border border-jarvis-blue/20 bg-jarvis-blue/5 px-2 py-0.5 rounded text-jarvis-blue font-bold">
                      {t}
                    </span>
                  ))}
                  {proj.tech.length > 3 && (
                    <span className="text-[8px] text-jarvis-blue/60 font-bold">+{proj.tech.length - 3} MORE</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          /* Project details display */
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-5 border border-jarvis-blue/20 bg-jarvis-dark/40 p-5 rounded-lg"
          >
            {/* Top info and back button */}
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] text-jarvis-blue/60 font-bold tracking-widest font-mono uppercase">
                  {selectedProject.subtitle}
                </span>
                <h3 className="font-orbitron font-black text-jarvis-blue text-lg md:text-xl tracking-wider">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={handleCloseDetail}
                className="text-jarvis-blue/80 hover:text-jarvis-blue text-[10px] font-bold font-orbitron border border-jarvis-blue/30 px-2 py-1 rounded hover:bg-jarvis-blue/10 transition-colors"
              >
                &lt; BACK TO CATALOG
              </button>
            </div>

            <p className="text-xs text-[#b0cfef] leading-relaxed tracking-wider border-l-2 border-jarvis-blue/40 pl-3">
              {selectedProject.desc}
            </p>

            {/* Bullets */}
            <div className="flex flex-col gap-2.5">
              <h4 className="text-xs font-orbitron font-bold tracking-widest text-jarvis-blue">ENGINE ANALYSIS REPORT:</h4>
              <ul className="flex flex-col gap-2 text-xs text-[#90aecf]">
                {selectedProject.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-jarvis-blue font-mono font-bold mt-0.5 shrink-0">-</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Diagnostics Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-jarvis-dark/65 border border-jarvis-blue/15 p-4 rounded-lg">
              {Object.entries(selectedProject.diagnostics).map(([key, val]) => (
                <div key={key} className="flex flex-col gap-0.5">
                  <span className="text-[8px] text-[#81a5cc] font-bold tracking-widest uppercase font-mono">{key.replace(/([A-Z])/g, ' $1')}</span>
                  <span className="text-xs font-bold font-orbitron text-jarvis-blue tracking-wider">{val}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack list */}
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-[10px] text-jarvis-blue/50 font-bold tracking-widest font-mono mr-1">STACK:</span>
              {selectedProject.tech.map((t, idx) => (
                <span key={idx} className="text-[10px] border border-jarvis-blue/20 bg-jarvis-blue/5 px-2 py-0.5 rounded text-jarvis-blue font-bold">
                  {t}
                </span>
              ))}
            </div>

            {/* External buttons */}
            <div className="flex gap-3 pt-3 border-t border-jarvis-blue/15">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => audioController.playClick()}
                className="flex items-center gap-1.5 px-4 py-2 bg-jarvis-blue/10 border border-jarvis-blue/35 text-jarvis-blue hover:bg-jarvis-blue/20 text-xs font-bold font-orbitron tracking-wider rounded transition-all flex justify-center"
              >
                <GithubIcon size={12} /> REPOSITORY FILE
              </a>
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => audioController.playClick()}
                  className="flex items-center gap-1.5 px-4 py-2 bg-jarvis-blue/20 border border-jarvis-blue text-jarvis-blue hover:bg-jarvis-blue/30 text-xs font-bold font-orbitron tracking-wider rounded shadow-glow-cyan transition-all"
                >
                  <ExternalLink size={12} /> INTERACTION OVERRIDE
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

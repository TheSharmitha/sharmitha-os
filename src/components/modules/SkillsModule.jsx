import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Eye, Code, ShieldAlert, GitPullRequest, Database, Zap } from 'lucide-react';
import audioController from '../AudioController';

export default function SkillsModule({ onClose }) {
  const [selectedMark, setSelectedMark] = useState(0);

  const skillsData = [
    {
      mark: "MARK I",
      name: "PYTHON CORE",
      icon: <Code size={18} />,
      desc: "Base programming layer. Algorithms, scripting, mathematical computations, and custom logic pipelines.",
      details: [
        { name: "Core Scripting", level: 90 },
        { name: "NumPy & Scientific Comp", level: 85 },
        { name: "Data Structures", level: 80 },
        { name: "File & I/O Handling", level: 85 }
      ]
    },
    {
      mark: "MARK II",
      name: "MACHINE LEARNING",
      icon: <Cpu size={18} />,
      desc: "Predictive algorithms, classification models, clustering engines, and statistical modeling.",
      details: [
        { name: "Scikit-Learn", level: 88 },
        { name: "K-Means & DBSCAN Clustering", level: 85 },
        { name: "Isolation Forest / Autoencoders", level: 82 },
        { name: "SMOTE (Class Imbalance)", level: 80 }
      ]
    },
    {
      mark: "MARK III",
      name: "COMPUTER VISION",
      icon: <Eye size={18} />,
      desc: "Holographic scan systems. Image matrix operations, feature extraction, real-time object tracking, and face detection.",
      details: [
        { name: "OpenCV Library", level: 86 },
        { name: "Image Filtering & Kernels", level: 80 },
        { name: "Real-Time Video Streams", level: 85 },
        { name: "Object & Pattern Recognition", level: 78 }
      ]
    },
    {
      mark: "MARK IV",
      name: "NLP SYSTEMS",
      icon: <ShieldAlert size={18} />,
      desc: "Natural language processing. Sentiment classification, skill parsing, tokenization, and transformers integration.",
      details: [
        { name: "Transformer Models", level: 80 },
        { name: "NLTK Engine", level: 85 },
        { name: "Resume Parsing Techniques", level: 88 },
        { name: "Text Summarization Core", level: 82 }
      ]
    },
    {
      mark: "MARK V",
      name: "DEVOPS INFRASTRUCTURE",
      icon: <GitPullRequest size={18} />,
      desc: "Automation and containerization for scalable, autonomous modular deployments.",
      details: [
        { name: "Docker Containerization", level: 82 },
        { name: "Jenkins CI/CD Automations", level: 78 },
        { name: "Git Control Protocol", level: 88 },
        { name: "Scalability Diagnostics", level: 75 }
      ]
    },
    {
      mark: "MARK VI",
      name: "WEB DEVELOPMENT",
      icon: <Zap size={18} />,
      desc: "Interactive overlays. Immersive user interfaces, full-stack frameworks, and database APIs.",
      details: [
        { name: "React Framework", level: 85 },
        { name: "Node.js & Express.js", level: 80 },
        { name: "HTML5 & Tailwind CSS", level: 88 },
        { name: "JavaScript Engine", level: 84 }
      ]
    },
    {
      mark: "MARK VII",
      name: "DATA ANALYTICS",
      icon: <Database size={18} />,
      desc: "Data modeling, visualization grids, metric analysis, and telemetry reports.",
      details: [
        { name: "Pandas DataFrames", level: 88 },
        { name: "MySQL Datastores", level: 82 },
        { name: "Matplotlib Plots", level: 84 },
        { name: "Plotly Interactive Charts", level: 80 }
      ]
    }
  ];

  const handleMarkSelect = (idx) => {
    setSelectedMark(idx);
    audioController.playClick();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl max-h-[85vh] overflow-y-auto hud-glass p-6 rounded-lg pointer-events-auto z-20 text-[#d2e5ff] hud-scrollbar border-jarvis-blue/30"
    >
      {/* Header */}
      <div className="flex justify-between items-center hud-glass-header pb-2 mb-5">
        <div className="flex items-center gap-2 text-jarvis-blue">
          <Cpu size={16} />
          <span className="font-orbitron tracking-widest text-sm font-bold uppercase">ARMOR SUIT MODULE DIAGNOSTICS // SYS_02</span>
        </div>
        <button
          onClick={onClose}
          className="text-jarvis-blue/70 hover:text-jarvis-blue text-xs font-bold font-orbitron border border-jarvis-blue/30 px-2 py-0.5 rounded hover:bg-jarvis-blue/10"
        >
          CLOSE
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Side: Suit Marks selector */}
        <div className="md:col-span-5 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 scrollbar-none">
          {skillsData.map((data, idx) => (
            <button
              key={idx}
              onClick={() => handleMarkSelect(idx)}
              className={`flex items-center gap-3 px-3 py-3 border rounded text-left transition-all duration-300 font-orbitron tracking-widest text-[10px] md:text-xs font-bold w-full ${
                selectedMark === idx
                  ? 'border-jarvis-blue text-jarvis-blue bg-jarvis-blue/15 shadow-glow-cyan'
                  : 'border-jarvis-blue/25 text-[#8eb0d9] hover:border-jarvis-blue/50 hover:bg-jarvis-blue/5'
              }`}
            >
              <div className="p-1 border border-current rounded shrink-0">
                {data.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] opacity-60 font-mono">{data.mark}</span>
                <span>{data.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Right Side: Detailed Diagnostics panel */}
        <div className="md:col-span-7 flex flex-col justify-between border border-jarvis-blue/20 bg-jarvis-dark/40 rounded-lg p-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMark}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col justify-between h-full"
            >
              <div>
                {/* Selected Mark Header */}
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-orbitron font-extrabold text-jarvis-blue text-sm md:text-base tracking-widest">
                    {skillsData[selectedMark].name}
                  </h3>
                  <span className="text-[10px] text-jarvis-blue/60 font-bold tracking-widest font-mono">
                    {skillsData[selectedMark].mark} INTEGRITY
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-xs text-[#9ebcd9] leading-relaxed tracking-wider mb-6 bg-jarvis-blue/5 border border-jarvis-blue/10 p-3 rounded">
                  {skillsData[selectedMark].desc}
                </p>

                {/* Subsystem Bars */}
                <div className="flex flex-col gap-4">
                  {skillsData[selectedMark].details.map((sub, sIdx) => (
                    <div key={sIdx} className="flex flex-col gap-1.5">
                      <div className="flex justify-between text-[10px] font-bold tracking-widest font-mono">
                        <span className="uppercase text-[#8eb0d9]">{sub.name}</span>
                        <span className="text-jarvis-blue">{sub.level}%</span>
                      </div>
                      
                      {/* Telemetry bar */}
                      <div className="w-full h-2 bg-jarvis-dark/80 border border-jarvis-blue/20 rounded-sm overflow-hidden p-[1px]">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${sub.level}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="h-full bg-jarvis-blue shadow-glow-cyan rounded-sm"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* HUD Calibration Status footer */}
              <div className="mt-8 pt-4 border-t border-jarvis-blue/15 flex justify-between items-center text-[10px] font-bold tracking-wider text-jarvis-blue/60">
                <div>SYSTEM STATUS: ACTIVE</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-jarvis-blue rounded-full animate-pulse-fast inline-block shadow-glow-cyan" />
                  CALIBRATED
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </motion.div>
  );
}

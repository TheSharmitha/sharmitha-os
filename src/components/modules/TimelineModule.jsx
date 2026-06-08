import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Circle } from 'lucide-react';

export default function TimelineModule({ onClose }) {
  const timelineData = [
    {
      year: "2023",
      title: "Started AIML Engineering",
      status: "COMPLETED",
      desc: "Began Bachelor of Engineering in Artificial Intelligence & Machine Learning. Formed strong foundations in algorithms, programming, and mathematical structures.",
      details: ["Python & C Programming Foundations", "Mathematics for ML", "SA Engineering College Core Curriculum"]
    },
    {
      year: "2024",
      title: "Built AI Projects",
      status: "COMPLETED",
      desc: "Transitioned to building real-world machine learning models. Built full-stack interfaces, integrated databases, and specialized in anomaly detection and data clustering.",
      details: ["Resume Analyzer Full Stack Application", "Fraud Detection with Autoencoders/SMOTE", "Data Visualization & Anomaly Modeling"]
    },
    {
      year: "2025",
      title: "Computer Vision & NLP",
      status: "COMPLETED",
      desc: "Delved into cognitive computing fields. Engineered automated OpenCV tracking pipelines and Transformer model implementations for summarization engines.",
      details: ["Real-time Face Detection Systems", "Intelligent Research Assistants", "Transformer Embeddings & Text Processing"]
    },
    {
      year: "2026",
      title: "Associate Trainee & DevOps",
      status: "IN PROGRESS",
      desc: "Embraced infrastructure automation, automated deployment flows, and industrial operations pipelines to build scalable products.",
      details: ["Docker Containerization Operations", "Jenkins CI/CD Automations", "System Scale Auditing"]
    },
    {
      year: "FUTURE",
      title: "Robotics Research Ambitions",
      status: "LOCKED",
      desc: "Ambitious path focusing on intelligent robotics integrations, industrial automation, and robotic pathing systems (ROS).",
      details: ["Robot Operating System (ROS) Mapping", "Embedded Systems Integrations", "Autonomous Sensor Fusion"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="relative w-[92%] md:w-full md:flex-1 max-w-2xl max-h-none md:max-h-full overflow-y-visible md:overflow-y-auto hud-glass p-6 rounded-lg pointer-events-auto z-20 text-[#d2e5ff] hud-scrollbar border-jarvis-blue/30 mx-auto my-4 md:my-0 md:mx-auto"
    >
      {/* Header */}
      <div className="flex justify-between items-center hud-glass-header pb-2 mb-5">
        <div className="flex items-center gap-2 text-jarvis-blue">
          <Calendar size={16} />
          <span className="font-orbitron tracking-widest text-sm font-bold uppercase">ENGINEERING TIMELINE ARCHIVES // SYS_04</span>
        </div>
        <button
          onClick={onClose}
          className="text-jarvis-blue/70 hover:text-jarvis-blue text-xs font-bold font-orbitron border border-jarvis-blue/30 px-2 py-0.5 rounded hover:bg-jarvis-blue/10"
        >
          CLOSE
        </button>
      </div>

      {/* Timeline flow */}
      <div className="relative border-l border-jarvis-blue/20 ml-4 pl-6 flex flex-col gap-6 py-2">
        {timelineData.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline node icon */}
            <div className="absolute -left-[35px] top-1.5 w-4.5 h-4.5 rounded-full bg-jarvis-dark flex items-center justify-center text-jarvis-blue z-10 shrink-0">
              {item.status === "COMPLETED" ? (
                <CheckCircle2 size={18} className="text-jarvis-blue shadow-glow-cyan bg-[#010a15] rounded-full" />
              ) : item.status === "IN PROGRESS" ? (
                <Circle size={18} className="text-jarvis-amber fill-jarvis-amber/20 animate-pulse bg-[#010a15] rounded-full" />
              ) : (
                <Circle size={18} className="text-jarvis-red bg-[#010a15] rounded-full" />
              )}
            </div>

            {/* Time Card */}
            <div className="border border-jarvis-blue/15 hover:border-jarvis-blue/45 bg-jarvis-dark/45 p-4 rounded-lg transition-all duration-300">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="font-orbitron font-extrabold text-base text-jarvis-blue tracking-wider">{item.year}</span>
                  <span className="h-4 w-px bg-jarvis-blue/20 hidden sm:inline" />
                  <h3 className="font-orbitron font-bold text-sm text-[#e2f1ff] tracking-wide">{item.title}</h3>
                </div>
                
                {/* Status Badge */}
                <span className={`text-[8px] font-bold tracking-widest font-mono border px-2 py-0.5 rounded ${
                  item.status === 'COMPLETED'
                    ? 'border-jarvis-blue/30 bg-jarvis-blue/5 text-jarvis-blue'
                    : item.status === 'IN PROGRESS'
                    ? 'border-jarvis-amber/30 bg-jarvis-amber/5 text-jarvis-amber'
                    : 'border-jarvis-red/30 bg-jarvis-red/5 text-jarvis-red'
                }`}>
                  {item.status}
                </span>
              </div>

              <p className="text-xs text-[#90b2d6] leading-relaxed mb-3">
                {item.desc}
              </p>

              {/* Sub items */}
              <div className="flex flex-wrap gap-1.5">
                {item.details.map((det, dIdx) => (
                  <span key={dIdx} className="text-[9px] border border-jarvis-blue/10 bg-jarvis-dark/80 px-2 py-0.5 rounded text-[#719cd2] font-semibold">
                    {det}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

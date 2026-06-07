import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Mail, MapPin, UserCheck } from 'lucide-react';

export default function AboutModule({ onClose }) {
  const certifications = [
    "Robotics: Basics and Advanced Concepts",
    "Machine Learning (Core/Advanced)",
    "Image Processing & Computer Vision",
    "Cloud Computing & Virtualization",
    "Kotlin Mobile Development"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[85vh] overflow-y-auto hud-glass p-6 rounded-lg pointer-events-auto z-20 text-[#d2e5ff] hud-scrollbar border-jarvis-blue/30"
    >
      {/* Module Header */}
      <div className="flex justify-between items-center hud-glass-header pb-2 mb-5">
        <div className="flex items-center gap-2 text-jarvis-blue">
          <UserCheck size={16} />
          <span className="font-orbitron tracking-widest text-sm font-bold uppercase">PROFILE DATA BRIDGE // SYS_01</span>
        </div>
        <button
          onClick={onClose}
          className="text-jarvis-blue/70 hover:text-jarvis-blue text-xs font-bold font-orbitron border border-jarvis-blue/30 px-2 py-0.5 rounded hover:bg-jarvis-blue/10"
        >
          CLOSE
        </button>
      </div>

      {/* Main Details */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Holographic Avatar Mock */}
        <div className="w-full md:w-48 flex flex-col items-center gap-3">
          <div className="w-32 h-32 rounded-full border-2 border-dashed border-jarvis-blue/40 flex items-center justify-center bg-jarvis-blue/5 relative p-1">
            {/* Holographic scanner indicator */}
            <div className="absolute inset-0 rounded-full border border-jarvis-blue/10 animate-ping-slow" />
            <div className="w-full h-full rounded-full bg-jarvis-blue/10 border border-jarvis-blue/40 flex items-center justify-center text-jarvis-blue font-orbitron font-extrabold text-2xl tracking-widest">
              S J
            </div>
            <div className="absolute bottom-0 w-3/4 h-1/5 bg-jarvis-blue/20 blur-sm rounded" />
          </div>
          <div className="text-center font-orbitron font-bold text-jarvis-blue tracking-wider text-sm mt-1">
            SHARMITHA J.
          </div>
          <div className="text-[10px] text-jarvis-blue/60 tracking-wider">
            AGENT AUTHORIZATION: STARK-08
          </div>
        </div>

        {/* Biography */}
        <div className="flex-1 flex flex-col gap-4 text-sm leading-relaxed">
          <div className="border border-jarvis-blue/20 bg-jarvis-blue/5 p-4 rounded text-[#a5c5ee] tracking-wide">
            <h3 className="font-orbitron font-bold text-jarvis-blue text-xs tracking-widest mb-1.5 uppercase">CORE DIRECTIVE</h3>
            Passionate Artificial Intelligence and Robotics student with a strong interest in research-driven problem solving, scientific data analysis, and intelligent system design. Skilled in machine learning, data analysis, and system development, with hands-on experience in building AI-based applications.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Info Grid */}
            <div className="flex items-center gap-3 text-xs tracking-wider">
              <MapPin size={14} className="text-jarvis-blue" />
              <span>Chennai, Tamil Nadu, India</span>
            </div>
            <div className="flex items-center gap-3 text-xs tracking-wider">
              <Mail size={14} className="text-jarvis-blue" />
              <a href="mailto:thesharmitha17@gmail.com" className="hover:underline text-jarvis-blue/90">thesharmitha17@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-jarvis-blue/20 my-5" />

      {/* Academic Credentials */}
      <div className="mb-5">
        <h3 className="font-orbitron font-bold text-jarvis-blue text-xs tracking-widest mb-3 uppercase flex items-center gap-2">
          <GraduationCap size={15} /> ACADEMIC LOGS
        </h3>
        <div className="flex flex-col gap-4">
          <div className="border border-jarvis-blue/15 bg-jarvis-dark/50 p-4 rounded flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
            <div>
              <div className="text-sm font-bold text-jarvis-blue font-orbitron">S.A Engineering College</div>
              <div className="text-xs text-[#95bcf2] tracking-wider mt-0.5">Bachelor of Engineering (AI & ML)</div>
            </div>
            <div className="flex flex-col md:items-end text-left md:text-right">
              <span className="text-xs text-jarvis-blue font-bold">CGPA: 8.45</span>
              <span className="text-[10px] text-jarvis-blue/60 tracking-wider">2023 - 2027</span>
            </div>
          </div>

          <div className="border border-jarvis-blue/15 bg-jarvis-dark/50 p-4 rounded flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
            <div>
              <div className="text-sm font-bold text-[#b5d3ff] font-orbitron">St. Joseph’s MHSS</div>
              <div className="text-xs text-[#95bcf2] tracking-wider mt-0.5">Higher Secondary Certificate (HSC)</div>
            </div>
            <div className="flex flex-col md:items-end text-left md:text-right">
              <span className="text-xs text-jarvis-blue font-bold">SCORE: 84%</span>
              <span className="text-[10px] text-jarvis-blue/60 tracking-wider">2022 - 2023</span>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h3 className="font-orbitron font-bold text-jarvis-blue text-xs tracking-widest mb-3 uppercase flex items-center gap-2">
          <Award size={15} /> CREDENTIAL VERIFICATIONS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 bg-jarvis-blue/5 border border-jarvis-blue/10 p-2.5 rounded hover:border-jarvis-blue/30 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-jarvis-blue shadow-glow-cyan" />
              <span className="tracking-wide font-medium">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

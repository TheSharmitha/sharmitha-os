import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import audioController from './AudioController';

export default function BootSequence({ onComplete }) {
  const [logs, setLogs] = useState([]);
  const [step, setStep] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [isAccessing, setIsAccessing] = useState(false);

  const logSequence = [
    { text: "SYSTEM INIT: SHARMITHA OS v5.08", delay: 300 },
    { text: "ESTABLISHING SECURE CONNECTION CODES...", delay: 400 },
    { text: "INITIALIZING SHARMITHA OS CORE PROTOCOL...", delay: 500 },
    { text: "LOADING AI MODULES...", delay: 600 },
    { text: "  -> VISION SYSTEM ONLINE [CV2/OPENCV]...", delay: 200 },
    { text: "  -> NLP ENGINE ONLINE [TRANSFORMERS/NLTK]...", delay: 200 },
    { text: "  -> THREAT ANALYSIS MODULE ONLINE [AUTOENCODERS]...", delay: 200 },
    { text: "  -> KNOWLEDGE CORE ACTIVE [LLM]...", delay: 200 },
    { text: "  -> SCIENTIFIC DATA ENGINE ONLINE [K-MEANS/DBSCAN]...", delay: 200 },
    { text: "CONNECTING TO JARVIS CORE...", delay: 600 },
    { text: "CALIBRATING HOLOGRAPHIC INTERFACE OVERLAYS...", delay: 400 },
    { text: "ENVIRONMENT SCAN COMPLETE: RESOLUTION CALIBRATED.", delay: 300 },
  ];

  useEffect(() => {
    // Initial click trigger hint
    audioController.playBoot();
  }, []);

  useEffect(() => {
    if (step < logSequence.length) {
      const timer = setTimeout(() => {
        setLogs((prev) => [...prev, logSequence[step].text]);
        setStep((prev) => prev + 1);
        audioController.playHover();
      }, logSequence[step].delay);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowButton(true);
        audioController.playAccessGranted();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleStart = () => {
    setIsAccessing(true);
    audioController.playAccessGranted();
    audioController.startAmbientHum();
    setTimeout(() => {
      onComplete();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start md:items-center bg-[#010a15] font-mono p-6 overflow-y-auto">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-10 pointer-events-none" />
      
      {/* HUD Circular Telemetry Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-jarvis-blue/10 bg-radial-gradient from-jarvis-blue/5 to-transparent pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        className="w-full max-w-2xl bg-jarvis-dark/85 border border-jarvis-panelBorder p-8 rounded-lg shadow-glow-cyan relative z-10 my-auto"
      >
        {/* Terminal Header */}
        <div className="flex justify-between items-center hud-glass-header pb-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-jarvis-blue animate-pulse-fast inline-block shadow-glow-cyan" />
            <span className="text-jarvis-blue font-orbitron tracking-widest text-sm font-bold">SHARMITHA OS v5.08 SECURITY GATEWAY</span>
          </div>
          <div className="text-xs text-jarvis-blue/60 tracking-wider">
            SECURE BRIDGE // AL-88
          </div>
        </div>

        {/* Diagnostic Logs console */}
        <div className="h-64 overflow-y-auto hud-scrollbar pr-2 mb-6 flex flex-col gap-1 text-[#a5d5ff] text-sm font-semibold tracking-wider">
          {logs.map((log, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
            >
              <span className="text-jarvis-blue font-bold mr-2">&gt;</span> {log}
            </motion.div>
          ))}
          {step < logSequence.length && (
            <div className="text-jarvis-blue animate-pulse-fast font-bold">&gt; _</div>
          )}
        </div>

        {/* JARVIS greeting and final prompt */}
        <AnimatePresence>
          {showButton && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="border-t border-jarvis-panelBorder pt-6"
            >
              <div className="bg-jarvis-blue/5 border border-jarvis-blue/20 p-4 rounded mb-6 text-center text-jarvis-blue font-semibold tracking-widest text-sm relative">
                {/* JARVIS Dialogue */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="glow-pulse-text font-orbitron mb-2"
                >
                  "Welcome. I am JARVIS. Accessing Engineer Profile: SHARMITHA J."
                </motion.div>
                <div className="text-xs text-jarvis-blue/70">
                  SYSTEM OVERRIDE DETECTED // AUTHORIZATION CODES MATCH STARK INTEGRITY STANDARD
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleStart}
                  disabled={isAccessing}
                  className={`relative px-8 py-3 font-orbitron font-bold tracking-widest text-sm border-2 rounded overflow-hidden transition-all duration-300 ${
                    isAccessing
                      ? 'border-jarvis-amber text-jarvis-amber shadow-glow-amber bg-jarvis-amber/10'
                      : 'border-jarvis-blue text-jarvis-blue shadow-glow-cyan hover:bg-jarvis-blue/10 bg-transparent'
                  }`}
                >
                  {isAccessing ? (
                    <span className="inline-block animate-pulse-fast">ESTABLISHING BRIDGE...</span>
                  ) : (
                    <span>ENTER SHARMITHA OS</span>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Screen Telemetry Details */}
      <div className="absolute bottom-4 left-6 text-xs text-jarvis-blue/40 tracking-wider">
        SYS.LOC: CHENNAI, IN // 12.9716 N, 80.2408 E
      </div>
      <div className="absolute bottom-4 right-6 text-xs text-jarvis-blue/40 tracking-wider">
        COGNITIVE INTEGRITY STATUS: 100%
      </div>
    </div>
  );
}

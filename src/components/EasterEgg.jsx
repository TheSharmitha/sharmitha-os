import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Terminal, LockOpen, X, RefreshCw } from 'lucide-react';
import audioController from './AudioController';

export default function EasterEgg({ isOpen, onClose }) {
  
  // Listen for keyboard secret sequence
  useEffect(() => {
    let buffer = '';
    const secretCodes = ['jarvis', 'iamironman'];

    const handleKeyDown = (e) => {
      // Append characters
      if (e.key.length === 1) {
        buffer += e.key.toLowerCase();
        // Limit buffer length
        if (buffer.length > 20) buffer = buffer.substring(buffer.length - 20);
        
        // Check triggers
        if (buffer.includes('jarvis') || buffer.includes('iamironman') || buffer.includes('stark')) {
          buffer = ''; // clear buffer
          audioController.playAccessGranted();
          onClose(true); // Open the easter egg (triggers parent open)
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 font-mono p-4 md:p-6 select-none overflow-y-auto">
      {/* Red Alert scanline overlays */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:30px_30px] opacity-15 pointer-events-none" />
      
      {/* Glitch Overlay bars */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-jarvis-red/5 to-transparent animate-scanline pointer-events-none" />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 20 }}
        className="w-full max-w-3xl bg-black border border-jarvis-red p-6 md:p-8 rounded-lg shadow-glow-red relative z-10 text-jarvis-red"
      >
        {/* Absolute Exit button */}
        <button 
          onClick={() => {
            audioController.playClick();
            onClose(false); // Close easter egg
          }}
          className="absolute top-4 right-4 p-1.5 border border-jarvis-red/40 hover:border-jarvis-red rounded hover:bg-jarvis-red/10 text-jarvis-red transition-all"
        >
          <X size={18} />
        </button>

        {/* Security override banner */}
        <div className="flex items-center gap-3 border-b border-jarvis-red/30 pb-4 mb-6 animate-pulse-fast">
          <ShieldAlert size={26} className="text-jarvis-red" />
          <div>
            <h1 className="font-orbitron font-black tracking-widest text-lg md:text-xl text-jarvis-red">
              STARK INDUSTRIES // SECURITY BYPASS ENGAGED
            </h1>
            <p className="text-[10px] text-jarvis-red/70 tracking-widest uppercase">
              DECRYPTING SYSTEM DATABASE // PROJECT COORDINATES MATCH: CLASSIFIED
            </p>
          </div>
        </div>

        {/* Security logs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
          {/* Diagnostic status block */}
          <div className="md:col-span-5 flex flex-col gap-4 border border-jarvis-red/25 bg-jarvis-red/5 p-4 rounded">
            <h3 className="font-orbitron font-extrabold text-xs tracking-widest text-jarvis-red flex items-center gap-2">
              <LockOpen size={14} /> SECURITY CLEARANCE
            </h3>
            
            <div className="text-xs flex flex-col gap-1.5 text-jarvis-red/80 font-mono">
              <div>USER: <span className="text-[#ff9595] font-bold">SHARMITHA J</span></div>
              <div>LEVEL: <span className="text-[#ff9595] font-bold">STARK INTERN CORE</span></div>
              <div>OS COMPAT: <span className="text-[#ff9595] font-bold">JARVIS COGNITIVE</span></div>
              <div>PALLADIUM FUEL: <span className="text-[#ff9595] font-bold">99.84%</span></div>
              <div>REACTOR FREQ: <span className="text-[#ff9595] font-bold">14.8 THz</span></div>
              <div>SUIT SCHEMATIC: <span className="text-[#ff9595] font-bold">MARK LXXXV v2</span></div>
            </div>

            <div className="h-px bg-jarvis-red/20 my-1" />

            <div className="flex justify-between items-center text-[10px] font-bold">
              <span>SUIT ARMOR POWER:</span>
              <span className="text-[#ff9595]">120% OVERLOADED</span>
            </div>
            <div className="w-full h-2 bg-jarvis-red/25 rounded-sm p-[1px] border border-jarvis-red/40 overflow-hidden">
              <div className="w-full h-full bg-jarvis-red shadow-glow-red rounded-sm" />
            </div>
          </div>

          {/* Classified diagnostic report */}
          <div className="md:col-span-7 flex flex-col justify-between border border-jarvis-red/25 bg-black p-4 rounded">
            <h3 className="font-orbitron font-extrabold text-xs tracking-widest text-jarvis-red mb-3 flex items-center gap-2">
              <Terminal size={14} /> CORE OVERRIDE LOGS
            </h3>

            <div className="flex-1 overflow-y-auto max-h-48 hud-scrollbar text-[11px] text-[#ff8080] font-mono flex flex-col gap-1 pr-1.5 leading-normal">
              <div>[SEC] ACCESS CODES MATCH. STARK-OS ENGAGED.</div>
              <div>[OS] COGNITIVE CORE EMULATION DETECTED.</div>
              <div>[OS] BYPASSING CHENNAI LOC GATEWAY METRICS... Done.</div>
              <div>[OS] ACCESS AUTHORIZED FOR INTERN SHARMITHA J.</div>
              <div>[OS] MARK I - VII SYSTEMS DETECTED:</div>
              <div className="text-[#ffa0a0]">  - MARK I (Python): LOADED</div>
              <div className="text-[#ffa0a0]">  - MARK II (Machine Learning): LOADED</div>
              <div className="text-[#ffa0a0]">  - MARK III (Computer Vision): LOADED</div>
              <div className="text-[#ffa0a0]">  - MARK IV (NLP Systems): LOADED</div>
              <div className="text-[#ffa0a0]">  - MARK V (DevOps Scale): LOADED</div>
              <div className="text-[#ffa0a0]">  - MARK VI (Web Dev Integration): LOADED</div>
              <div className="text-[#ffa0a0]">  - MARK VII (Data Analytics): LOADED</div>
              <div>[ROB] ROBOTICS CORE ENGAGED: PROJECTED INTEGRATION AT 100%</div>
              <div className="text-[#ffb5b5] animate-pulse">[WARN] PROJECTED FUTURE RESEARCH LOCK CODE DECRYPTED.</div>
            </div>
          </div>
        </div>

        {/* Override status footer */}
        <div className="border-t border-jarvis-red/30 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-[10px] font-bold text-jarvis-red/60 flex items-center gap-1.5">
            <RefreshCw size={12} className="animate-spin" />
            STABILIZING SYNAPSE BRIDGE
          </div>
          <button
            onClick={() => {
              audioController.playClick();
              onClose(false);
            }}
            className="px-6 py-2 border border-jarvis-red hover:bg-jarvis-red/15 rounded text-xs font-orbitron font-extrabold tracking-widest transition-all shadow-glow-red"
          >
            DISMISS OVERRIDE
          </button>
        </div>
      </motion.div>
    </div>
  );
}

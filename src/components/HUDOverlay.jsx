import React, { useState, useEffect } from 'react';
import { 
  User, Cpu, Briefcase, Calendar, Zap, Mail, 
  Volume2, VolumeX, FileText, Terminal 
} from 'lucide-react';

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import audioController from './AudioController';

export default function HUDOverlay({ 
  activeSection, 
  setActiveSection, 
  onTriggerEasterEgg,
  children
}) {
  const [time, setTime] = useState(new Date());
  const [isMuted, setIsMuted] = useState(false);
  const [consoleInput, setConsoleInput] = useState('');
  const [jarvisDialogue, setJarvisDialogue] = useState(
    "Systems operational. Awaiting command, Agent. Feel free to explore my core modules."
  );

  // Tick time
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    audioController.playClick();
    
    // Customize JARVIS speaking dialogue based on active section
    switch (section) {
      case 'about':
        setJarvisDialogue("Accessing profile: SHARMITHA J. Academics: B.E. AI & ML, SA Engineering College. CGPA: 8.45.");
        break;
      case 'skills':
        setJarvisDialogue("Diagnostics: MARK suit skill modules calibrated. MARK I to MARK VII subsystems fully integrated.");
        break;
      case 'projects':
        setJarvisDialogue("Scanning project directory: Loaded 5 active AI modules. Core telemetry online.");
        break;
      case 'timeline':
        setJarvisDialogue("Retrieving engineering timeline records: 2023 to present day logs decrypted.");
        break;
      case 'robotics':
        setJarvisDialogue("WARNING: Robotics Division under development. Security restrictions display future integration goals.");
        break;
      case 'contact':
        setJarvisDialogue("Opening secure quantum bridge. Preparing communication dispatch.");
        break;
      default:
        setJarvisDialogue("Overview mode engaged. Monitoring reactor stability.");
    }
  };

  const handleMuteToggle = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    audioController.setMute(nextMute);
    audioController.playClick();
  };

  const handleConsoleSubmit = (e) => {
    e.preventDefault();
    const command = consoleInput.trim().toLowerCase();
    setConsoleInput('');

    if (command === 'jarvis' || command === 'i am iron man' || command === 'override') {
      audioController.playAccessGranted();
      setJarvisDialogue("SECURITY OVERRIDE DETECTED. Stark Industries Engineer Profile unlocked.");
      onTriggerEasterEgg();
    } else if (command === 'help') {
      audioController.playClick();
      setJarvisDialogue("Available console inputs: 'jarvis', 'i am iron man', 'clear', 'mute', 'help'.");
    } else if (command === 'clear') {
      audioController.playClick();
      setJarvisDialogue("Console log cleared. Core stabilized.");
    } else if (command === 'mute') {
      handleMuteToggle();
      setJarvisDialogue(isMuted ? "Audio feedback enabled." : "Audio feedback silenced.");
    } else {
      audioController.playError();
      setJarvisDialogue(`Command '${command}' not recognized by JARVIS core. Type 'help' for diagnostics.`);
    }
  };

  // Format time and date
  const formatTime = (d) => {
    return d.toTimeString().split(' ')[0];
  };

  const formatDate = (d) => {
    return d.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase();
  };

  return (
    <div className="relative w-full min-h-screen z-10 pointer-events-none flex flex-col justify-between p-4 md:p-6 font-mono">
      
      {/* TOP BAR - Telemetry & Status HUD */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pointer-events-auto bg-jarvis-panel border border-jarvis-panelBorder p-4 rounded-lg hud-glass">
        {/* Core telemetry details */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-jarvis-blue animate-pulse shadow-glow-cyan" />
            <h1 
              onClick={() => handleNavClick('')}
              className="text-lg md:text-xl font-orbitron font-extrabold tracking-widest text-jarvis-blue cursor-pointer hover:glow-pulse-text transition-all"
            >
              SHARMITHA OS
            </h1>
          </div>
          <div className="text-xs text-jarvis-blue/70 tracking-widest">
            AI & ROBOTICS CORE COMMAND // DEPLOYED v5.08
          </div>
        </div>

        {/* Central diagnostics summary */}
        <div className="hidden lg:flex items-center gap-6 text-xs text-jarvis-blue/70">
          <div>
            CORE TEMP: <span className="text-jarvis-blue font-bold">34.2 °C</span>
          </div>
          <div className="h-4 w-px bg-jarvis-blue/20" />
          <div>
            REACTOR ENERGY: <span className="text-jarvis-blue font-bold">98.45%</span>
          </div>
          <div className="h-4 w-px bg-jarvis-blue/20" />
          <div>
            LOC: <span className="text-jarvis-blue font-bold">12.9716° N, 80.2408° E</span>
          </div>
        </div>

        {/* Clock & Sound Control */}
        <div className="flex items-center gap-4 ml-auto md:ml-0">
          <div className="flex flex-col items-end text-right">
            <div className="text-sm font-bold text-jarvis-blue font-orbitron tracking-widest">{formatTime(time)}</div>
            <div className="text-[10px] text-jarvis-blue/60 tracking-wider">{formatDate(time)}</div>
          </div>
          
          <button 
            onClick={handleMuteToggle}
            className="p-2 border border-jarvis-blue/30 rounded hover:border-jarvis-blue/80 hover:bg-jarvis-blue/10 transition-all text-jarvis-blue"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
      </div>

      {/* MID SECTION - Nav and Dialog Panels */}
      <div className="flex-1 my-4 flex flex-col md:flex-row justify-start items-stretch gap-6 relative min-h-0">
        
        {/* Left Side: Navigation Controls */}
        <div className="flex md:flex-col justify-start items-stretch gap-2.5 pointer-events-auto overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 scrollbar-none w-full md:w-56 shrink-0 md:sticky md:top-0 md:self-start">
          
          <button
            onClick={() => handleNavClick('about')}
            className={`flex items-center justify-between gap-3 px-4 py-3 border rounded text-left transition-all duration-300 font-orbitron text-xs font-bold tracking-widest shrink-0 w-44 md:w-full md:shrink ${
              activeSection === 'about'
                ? 'border-jarvis-blue text-jarvis-blue bg-jarvis-blue/10 shadow-glow-cyan'
                : 'border-jarvis-blue/30 text-jarvis-blue/70 hover:border-jarvis-blue/60 hover:text-jarvis-blue hover:bg-jarvis-blue/5'
            }`}
          >
            <span className="flex items-center gap-2.5"><User size={14} /> ABOUT ME</span>
            <span className="text-[9px] opacity-60">SYS_01</span>
          </button>

          <button
            onClick={() => handleNavClick('skills')}
            className={`flex items-center justify-between gap-3 px-4 py-3 border rounded text-left transition-all duration-300 font-orbitron text-xs font-bold tracking-widest shrink-0 w-44 md:w-full md:shrink ${
              activeSection === 'skills'
                ? 'border-jarvis-blue text-jarvis-blue bg-jarvis-blue/10 shadow-glow-cyan'
                : 'border-jarvis-blue/30 text-jarvis-blue/70 hover:border-jarvis-blue/60 hover:text-jarvis-blue hover:bg-jarvis-blue/5'
            }`}
          >
            <span className="flex items-center gap-2.5"><Cpu size={14} /> ARMOR SKILLS</span>
            <span className="text-[9px] opacity-60">SYS_02</span>
          </button>

          <button
            onClick={() => handleNavClick('projects')}
            className={`flex items-center justify-between gap-3 px-4 py-3 border rounded text-left transition-all duration-300 font-orbitron text-xs font-bold tracking-widest shrink-0 w-44 md:w-full md:shrink ${
              activeSection === 'projects'
                ? 'border-jarvis-blue text-jarvis-blue bg-jarvis-blue/10 shadow-glow-cyan'
                : 'border-jarvis-blue/30 text-jarvis-blue/70 hover:border-jarvis-blue/60 hover:text-jarvis-blue hover:bg-jarvis-blue/5'
            }`}
          >
            <span className="flex items-center gap-2.5"><Briefcase size={14} /> AI MODULES</span>
            <span className="text-[9px] opacity-60">SYS_03</span>
          </button>

          <button
            onClick={() => handleNavClick('timeline')}
            className={`flex items-center justify-between gap-3 px-4 py-3 border rounded text-left transition-all duration-300 font-orbitron text-xs font-bold tracking-widest shrink-0 w-44 md:w-full md:shrink ${
              activeSection === 'timeline'
                ? 'border-jarvis-blue text-jarvis-blue bg-jarvis-blue/10 shadow-glow-cyan'
                : 'border-jarvis-blue/30 text-jarvis-blue/70 hover:border-jarvis-blue/60 hover:text-jarvis-blue hover:bg-jarvis-blue/5'
            }`}
          >
            <span className="flex items-center gap-2.5"><Calendar size={14} /> LOG TIMELINE</span>
            <span className="text-[9px] opacity-60">SYS_04</span>
          </button>

          <button
            onClick={() => handleNavClick('robotics')}
            className={`flex items-center justify-between gap-3 px-4 py-3 border rounded text-left transition-all duration-300 font-orbitron text-xs font-bold tracking-widest shrink-0 w-44 md:w-full md:shrink ${
              activeSection === 'robotics'
                ? 'border-jarvis-red text-jarvis-red bg-jarvis-red/10 shadow-glow-red'
                : 'border-jarvis-red/30 text-jarvis-red/70 hover:border-jarvis-red/60 hover:text-jarvis-red hover:bg-jarvis-red/5'
            }`}
          >
            <span className="flex items-center gap-2.5"><Zap size={14} /> ROBOTICS DIV</span>
            <span className="text-[9px] opacity-60">SYS_LOCK</span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`flex items-center justify-between gap-3 px-4 py-3 border rounded text-left transition-all duration-300 font-orbitron text-xs font-bold tracking-widest shrink-0 w-44 md:w-full md:shrink ${
              activeSection === 'contact'
                ? 'border-jarvis-blue text-jarvis-blue bg-jarvis-blue/10 shadow-glow-cyan'
                : 'border-jarvis-blue/30 text-jarvis-blue/70 hover:border-jarvis-blue/60 hover:text-jarvis-blue hover:bg-jarvis-blue/5'
            }`}
          >
            <span className="flex items-center gap-2.5"><Mail size={14} /> TRANSMISSIONS</span>
            <span className="text-[9px] opacity-60">SYS_05</span>
          </button>

        </div>

        {/* Render active module inline in flow on mobile, absolute centered on desktop */}
        {children}

        {/* Empty mid area: lets the 3D Arc Reactor be visible */}
        {!activeSection && <div className="flex-1 pointer-events-none" />}

      </div>

      {/* BOTTOM HUD - JARVIS Console & Social Links */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-stretch gap-4 pointer-events-auto">
        
        {/* Left/Bottom: JARVIS Dialogue Interface */}
        <div className="flex-1 bg-jarvis-panel border border-jarvis-panelBorder rounded-lg p-4 flex flex-col md:flex-row items-center gap-4 hud-glass max-w-4xl">
          <div className="w-12 h-12 rounded-full border border-jarvis-blue/40 flex items-center justify-center bg-jarvis-blue/5 text-jarvis-blue relative shrink-0">
            <Cpu size={20} className="animate-pulse" />
            <div className="absolute inset-0 rounded-full border border-jarvis-blue/20 animate-ping-slow" />
          </div>
          
          <div className="flex-1 flex flex-col gap-1.5 w-full">
            <div className="text-xs text-jarvis-blue/50 tracking-wider font-bold">JARVIS FEEDBACK TERMINAL</div>
            <div className="text-sm text-jarvis-blue/90 font-semibold tracking-wide leading-relaxed">
              "{jarvisDialogue}"
            </div>
          </div>

          {/* Prompt override input */}
          <form onSubmit={handleConsoleSubmit} className="w-full md:w-56 shrink-0 flex items-center border border-jarvis-blue/30 rounded px-2 py-1.5 bg-jarvis-dark/50">
            <Terminal size={14} className="text-jarvis-blue/50 mr-1.5" />
            <input 
              type="text" 
              placeholder="ENTER OVERRIDE CODE..."
              value={consoleInput}
              onChange={(e) => setConsoleInput(e.target.value)}
              className="bg-transparent text-jarvis-blue text-xs font-semibold focus:outline-none placeholder-jarvis-blue/30 w-full tracking-wider"
            />
          </form>
        </div>

        {/* Right/Bottom: Recruiter Core Social Actions */}
        <div className="flex lg:flex-col xl:flex-row justify-center lg:justify-end items-center gap-3">
          
          {/* Download Resume button */}
          <a
            href="/resume.pdf"
            download="Sharmitha_J_Resume.pdf"
            onClick={() => audioController.playClick()}
            className="flex items-center gap-2 px-5 py-3 border border-jarvis-blue text-jarvis-blue hover:bg-jarvis-blue/15 shadow-glow-cyan rounded font-orbitron text-xs font-bold tracking-widest transition-all w-full lg:w-48 text-center justify-center cursor-pointer pointer-events-auto"
          >
            <FileText size={14} /> DOWNLOAD RESUME
          </a>

          {/* Social icons */}
          <div className="flex gap-2">
            <a
              href="https://github.com/TheSharmitha"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => audioController.playClick()}
              className="p-3 border border-jarvis-blue/30 rounded text-jarvis-blue/70 hover:border-jarvis-blue hover:text-jarvis-blue hover:bg-jarvis-blue/10 hover:shadow-glow-cyan transition-all flex items-center justify-center"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://linkedin.com/in/the-sharmitha"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => audioController.playClick()}
              className="p-3 border border-jarvis-blue/30 rounded text-jarvis-blue/70 hover:border-jarvis-blue hover:text-jarvis-blue hover:bg-jarvis-blue/10 hover:shadow-glow-cyan transition-all flex items-center justify-center"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}

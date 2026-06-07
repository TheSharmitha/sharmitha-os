import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Cpu, Settings, Target, Eye } from 'lucide-react';

export default function RoboticsModule({ onClose }) {
  const roboticsGoals = [
    {
      title: "Embedded Systems",
      icon: <Cpu size={18} />,
      desc: "Hardware programming using microcontroller logic, integrating sensory networks and actuator controls."
    },
    {
      title: "Robot Operating System (ROS)",
      icon: <Settings size={18} />,
      desc: "Deploying modular framework systems for node-to-node telemetry communications, path mappings, and automation cycles."
    },
    {
      title: "Industrial Automation",
      icon: <Target size={18} />,
      desc: "Designing autonomous workflows for hardware components, factory robotics arms, and high-throughput assembly logic."
    },
    {
      title: "Computer Vision Robotics",
      icon: <Eye size={18} />,
      desc: "Merging real-time OpenCV mapping filters with robotic spatial tracking and obstacle avoidance configurations."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[85vh] overflow-y-auto hud-glass p-6 rounded-lg pointer-events-auto z-20 text-[#d2e5ff] hud-scrollbar border-jarvis-red/40"
    >
      {/* Header */}
      <div className="flex justify-between items-center border-b border-jarvis-red/30 pb-2 mb-5">
        <div className="flex items-center gap-2 text-jarvis-red">
          <ShieldAlert size={16} className="animate-pulse" />
          <span className="font-orbitron tracking-widest text-sm font-bold uppercase">CLASSIFIED: ROBOTICS ARCHIVES // SEC_LOCK</span>
        </div>
        <button
          onClick={onClose}
          className="text-jarvis-red/70 hover:text-jarvis-red text-xs font-bold font-orbitron border border-jarvis-red/30 px-2 py-0.5 rounded hover:bg-jarvis-red/10"
        >
          CLOSE
        </button>
      </div>

      {/* Warning Box */}
      <div className="border border-jarvis-red/30 bg-jarvis-red/5 p-4 rounded-lg flex flex-col md:flex-row items-center gap-4 text-center md:text-left mb-6 shadow-glow-red">
        <div className="w-12 h-12 rounded-full border border-jarvis-red/40 flex items-center justify-center bg-jarvis-red/15 text-jarvis-red shrink-0 animate-pulse">
          <ShieldAlert size={24} />
        </div>
        <div className="flex-1">
          <h3 className="font-orbitron font-extrabold text-jarvis-red text-sm tracking-widest uppercase mb-1">
            ROBOTICS DIVISION: UNDER DEVELOPMENT
          </h3>
          <p className="text-xs text-jarvis-red/80 tracking-wide leading-relaxed">
            CRITICAL ACCESS NOTICE: Authorized access is restricted. Full hardware drivers, kinematic simulations, and sensor hubs are locked until academic milestones are calibrated. 
          </p>
        </div>
      </div>

      {/* Overview Blueprint Section */}
      <div className="mb-6">
        <h4 className="font-orbitron font-bold text-xs tracking-widest text-[#e2f1ff] mb-3 uppercase">
          PROJECTED ROBOTICS SYSTEM ROADMAP
        </h4>
        <p className="text-xs text-[#a5c5ee] leading-relaxed mb-4">
          Future ambitions are directed towards merging deep learning algorithms with physical machinery, implementing smart sensory networks, and deploying autonomous robotic agents.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {roboticsGoals.map((goal, idx) => (
            <div 
              key={idx}
              className="border border-jarvis-blue/15 bg-jarvis-dark/50 p-4 rounded-lg flex gap-3.5"
            >
              <div className="p-2 border border-jarvis-blue/20 bg-jarvis-blue/5 rounded text-jarvis-blue shrink-0 h-fit">
                {goal.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h5 className="font-orbitron font-bold text-xs text-[#d2e5ff] tracking-wide">
                  {goal.title}
                </h5>
                <p className="text-[11px] text-[#8eaecf] leading-relaxed">
                  {goal.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Blueprint diagram mock */}
      <div className="border border-jarvis-blue/20 bg-jarvis-blue/5 rounded-lg p-5 flex flex-col items-center justify-center relative overflow-hidden h-40">
        {/* Mock holographic wireframe grids */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        
        {/* Glowing visual indicator circles */}
        <div className="w-24 h-24 rounded-full border border-dashed border-jarvis-blue/30 animate-spin-slow flex items-center justify-center">
          <div className="w-18 h-18 rounded-full border border-jarvis-blue/20 animate-spin-reverse-slow flex items-center justify-center">
            <div className="w-10 h-10 rounded-full border border-dashed border-jarvis-red/40 flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-jarvis-red shadow-glow-red animate-pulse" />
            </div>
          </div>
        </div>
        
        <span className="font-orbitron font-bold text-[9px] text-jarvis-red tracking-widest uppercase mt-3 animate-pulse">
          SECURE KINEMATICS BRIDGE ENGAGED // AUTONOMOUS DRIVERS LOCKED
        </span>
      </div>
    </motion.div>
  );
}

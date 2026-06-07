import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, ShieldCheck } from 'lucide-react';

const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import audioController from '../AudioController';

export default function ContactModule({ onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('IDLE'); // IDLE, SENDING, SUCCESS, ERROR
  const [transmissionId, setTransmissionId] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      audioController.playError();
      return;
    }

    setStatus('SENDING');
    audioController.playClick();

    // Generate mock transmission ID
    const randomId = "TRX-" + Math.floor(100000 + Math.random() * 900000);
    setTransmissionId(randomId);

    // Simulate sending transmission
    setTimeout(() => {
      setStatus('SUCCESS');
      audioController.playAccessGranted();
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl max-h-[85vh] overflow-y-auto hud-glass p-6 rounded-lg pointer-events-auto z-20 text-[#d2e5ff] hud-scrollbar border-jarvis-blue/30"
    >
      {/* Header */}
      <div className="flex justify-between items-center hud-glass-header pb-2 mb-5">
        <div className="flex items-center gap-2 text-jarvis-blue">
          <Mail size={16} />
          <span className="font-orbitron tracking-widest text-sm font-bold uppercase">COMMUNICATION BRIDGE // SYS_05</span>
        </div>
        <button
          onClick={onClose}
          className="text-jarvis-blue/70 hover:text-jarvis-blue text-xs font-bold font-orbitron border border-jarvis-blue/30 px-2 py-0.5 rounded hover:bg-jarvis-blue/10"
        >
          CLOSE
        </button>
      </div>

      <AnimatePresence mode="wait">
        {status !== 'SUCCESS' ? (
          /* Form interface */
          <motion.form 
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-4"
          >
            <p className="text-xs text-[#9ebcd9] leading-relaxed tracking-wider mb-2">
              ESTABLISHING ENCRYPTED DATALINK. Please supply your credentials and input text parameters to dispatch your telemetry to Sharmitha's command core.
            </p>

            {/* Name input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] text-jarvis-blue font-bold tracking-widest font-mono">SENDER IDENTIFICATION (NAME)</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={status === 'SENDING'}
                placeholder="ENTER NAME OR CALLSIGN..."
                className="bg-jarvis-dark/50 border border-jarvis-blue/30 focus:border-jarvis-blue rounded px-3 py-2 text-sm text-[#e2f1ff] placeholder-jarvis-blue/30 focus:outline-none tracking-wider uppercase font-semibold"
              />
            </div>

            {/* Email input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] text-jarvis-blue font-bold tracking-widest font-mono">TRANSMISSION BRIDGE COORDS (EMAIL)</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={status === 'SENDING'}
                placeholder="ENTER EMAIL ADDRESS..."
                className="bg-jarvis-dark/50 border border-jarvis-blue/30 focus:border-jarvis-blue rounded px-3 py-2 text-sm text-[#e2f1ff] placeholder-jarvis-blue/30 focus:outline-none tracking-wider font-semibold"
              />
            </div>

            {/* Message input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] text-jarvis-blue font-bold tracking-widest font-mono">TELEMETRY PACKET DATA (MESSAGE)</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                disabled={status === 'SENDING'}
                placeholder="ENTER TRANSMISSION DETAILS..."
                className="bg-jarvis-dark/50 border border-jarvis-blue/30 focus:border-jarvis-blue rounded px-3 py-2 text-sm text-[#e2f1ff] placeholder-jarvis-blue/30 focus:outline-none tracking-wider font-semibold hud-scrollbar resize-none"
              />
            </div>

            {/* Submit button */}
            <div className="flex justify-between items-center mt-3 pt-3 border-t border-jarvis-blue/15">
              <div className="flex gap-2">
                <a
                  href="https://github.com/TheSharmitha"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => audioController.playClick()}
                  className="p-2.5 border border-jarvis-blue/20 rounded text-jarvis-blue/70 hover:border-jarvis-blue hover:text-jarvis-blue hover:bg-jarvis-blue/10 transition-colors flex items-center justify-center"
                >
                  <GithubIcon size={14} />
                </a>
                <a
                  href="https://linkedin.com/in/the-sharmitha"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => audioController.playClick()}
                  className="p-2.5 border border-jarvis-blue/20 rounded text-jarvis-blue/70 hover:border-jarvis-blue hover:text-jarvis-blue hover:bg-jarvis-blue/10 transition-colors flex items-center justify-center"
                >
                  <LinkedinIcon size={14} />
                </a>
              </div>

              <button
                type="submit"
                disabled={status === 'SENDING'}
                className="flex items-center gap-2 px-6 py-2.5 bg-jarvis-blue/10 border border-jarvis-blue text-jarvis-blue hover:bg-jarvis-blue/20 rounded font-orbitron text-xs font-bold tracking-widest transition-all shadow-glow-cyan"
              >
                {status === 'SENDING' ? (
                  <span className="animate-pulse">DISPATCHING DATA...</span>
                ) : (
                  <>
                    <Send size={12} /> DISPATCH PACKET
                  </>
                )}
              </button>
            </div>
          </motion.form>
        ) : (
          /* Success Message screen */
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-8 text-center"
          >
            <div className="w-14 h-14 rounded-full border-2 border-jarvis-blue flex items-center justify-center text-jarvis-blue bg-jarvis-blue/10 shadow-glow-cyan mb-4 animate-bounce">
              <ShieldCheck size={32} />
            </div>

            <h3 className="font-orbitron font-extrabold text-jarvis-blue tracking-widest text-base uppercase mb-2">
              TRANSMISSION SUCCESSFUL
            </h3>
            
            <div className="bg-jarvis-blue/5 border border-jarvis-blue/20 rounded p-4 max-w-sm mb-6 text-xs text-[#a5c5ee] tracking-wide font-mono">
              <div className="font-bold text-jarvis-blue mb-1">TRANSMISSION DIAL CODES:</div>
              <div>ID: <span className="text-[#e2f1ff] font-bold">{transmissionId}</span></div>
              <div>ROUTE: SECURE_STARK_CORE_08</div>
              <div>STATUS: SENT & DECRYPTED</div>
            </div>

            <p className="text-xs text-[#8eaecf] leading-relaxed max-w-xs mb-6">
              Your telemetry coordinates have been successfully cataloged. JARVIS will prompt Sharmitha J. as soon as the secure line clears.
            </p>

            <button
              onClick={() => setStatus('IDLE')}
              className="text-xs font-bold font-orbitron border border-jarvis-blue/40 hover:border-jarvis-blue px-4 py-2 rounded text-jarvis-blue hover:bg-jarvis-blue/10 transition-colors"
            >
              DISPATCH ANOTHER PACKET
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import BootSequence from './components/BootSequence';
import ThreeCanvas from './components/ThreeCanvas';
import HUDOverlay from './components/HUDOverlay';
import AboutModule from './components/modules/AboutModule';
import SkillsModule from './components/modules/SkillsModule';
import ProjectsModule from './components/modules/ProjectsModule';
import TimelineModule from './components/modules/TimelineModule';
import RoboticsModule from './components/modules/RoboticsModule';
import ContactModule from './components/modules/ContactModule';
import EasterEgg from './components/EasterEgg';

export default function App() {
  const [bootComplete, setBootComplete] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [easterEggOpen, setEasterEggOpen] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-[#010a15]">
      
      {/* 1. Introductory Boot Sequence */}
      <AnimatePresence mode="wait">
        {!bootComplete && (
          <BootSequence onComplete={() => setBootComplete(true)} />
        )}
      </AnimatePresence>

      {/* 2. Main Interface (Rendered after boot completes) */}
      {bootComplete && (
        <>
          {/* 3D WebGL Canvas Layer */}
          <ThreeCanvas activeSection={activeSection} />

          {/* Interactive HUD HUD overlay framework */}
          <HUDOverlay 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} 
            onTriggerEasterEgg={() => setEasterEggOpen(true)}
          />

          {/* Content Overlays Layer */}
          <AnimatePresence mode="wait">
            {activeSection === 'about' && (
              <AboutModule onClose={() => setActiveSection('')} />
            )}
            {activeSection === 'skills' && (
              <SkillsModule onClose={() => setActiveSection('')} />
            )}
            {activeSection === 'projects' && (
              <ProjectsModule onClose={() => setActiveSection('')} />
            )}
            {activeSection === 'timeline' && (
              <TimelineModule onClose={() => setActiveSection('')} />
            )}
            {activeSection === 'robotics' && (
              <RoboticsModule onClose={() => setActiveSection('')} />
            )}
            {activeSection === 'contact' && (
              <ContactModule onClose={() => setActiveSection('')} />
            )}
          </AnimatePresence>

          {/* Stark Override Secret Screen */}
          <AnimatePresence>
            {easterEggOpen && (
              <EasterEgg isOpen={easterEggOpen} onClose={setEasterEggOpen} />
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

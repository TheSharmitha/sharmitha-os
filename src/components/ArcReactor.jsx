import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus, Cylinder, Box, Sparkles } from '@react-three/drei';
import gsap from 'gsap';

export default function ArcReactor({ isActive }) {
  const coreRef = useRef();
  const innerRingRef = useRef();
  const outerRingRef = useRef();
  const particlesRef = useRef();
  
  const [hovered, setHovered] = useState(false);
  const rotationSpeed = useRef({ inner: 0.8, outer: -0.4, core: 1.2 });
  const glowIntensity = useRef({ value: 1.5 });

  // Handle hover speed-up using GSAP
  useEffect(() => {
    if (hovered) {
      gsap.to(rotationSpeed.current, {
        inner: 4.5,
        outer: -2.5,
        core: 6.0,
        duration: 0.8,
        ease: 'power2.out',
      });
      gsap.to(glowIntensity.current, {
        value: 3.5,
        duration: 0.5,
      });
    } else {
      gsap.to(rotationSpeed.current, {
        inner: 0.8,
        outer: -0.4,
        core: 1.2,
        duration: 1.5,
        ease: 'power2.inOut',
      });
      gsap.to(glowIntensity.current, {
        value: 1.5,
        duration: 1.2,
      });
    }
  }, [hovered]);

  // Frame animation loop
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (innerRingRef.current) {
      innerRingRef.current.rotation.z += rotationSpeed.current.inner * delta;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += rotationSpeed.current.outer * delta;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y += rotationSpeed.current.core * delta;
      coreRef.current.rotation.x += rotationSpeed.current.core * 0.3 * delta;
      // Pulse scale slightly
      const pulse = 1 + Math.sin(time * 6) * 0.05 * (hovered ? 2 : 1);
      coreRef.current.scale.set(pulse, pulse, pulse);
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.z += 0.2 * delta;
    }
  });

  // Calculate 10 spokes (coils) for the Arc Reactor
  const spokeCount = 10;
  const spokes = Array.from({ length: spokeCount }).map((_, i) => {
    const angle = (i / spokeCount) * Math.PI * 2;
    const radius = 1.35;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const rotZ = angle + Math.PI / 2;
    return { x, y, rotZ };
  });

  return (
    <group 
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={[1.1, 1.1, 1.1]}
    >
      {/* CENTRAL CORE - Glowing Vibranium Core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshBasicMaterial 
          color="#00f0ff" 
          transparent 
          opacity={0.9}
        />
        
        {/* Core Inner Core Glint */}
        <mesh scale={[0.6, 0.6, 0.6]}>
          <sphereGeometry args={[0.55, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </mesh>

      {/* CORE LIGHT FLUX SHIELD - Wireframe Cage */}
      <mesh scale={[0.7, 0.7, 0.7]}>
        <sphereGeometry args={[0.8, 12, 12]} />
        <meshBasicMaterial 
          color="#00dcff" 
          wireframe 
          transparent 
          opacity={0.35}
        />
      </mesh>

      {/* INNER COIL RING - Holds the copper wire coils */}
      <group ref={innerRingRef}>
        {/* The Torus Ring Base */}
        <Torus args={[1.35, 0.12, 16, 100]}>
          <meshStandardMaterial 
            color="#112233" 
            roughness={0.2} 
            metalness={0.9} 
          />
        </Torus>

        {/* Copper wire segments (10 coils around the ring) */}
        {spokes.map((spoke, idx) => (
          <group key={idx} position={[spoke.x, spoke.y, 0]} rotation={[0, 0, spoke.rotZ]}>
            {/* The Copper Coil Cylinder */}
            <Cylinder args={[0.16, 0.16, 0.32, 16]}>
              <meshStandardMaterial 
                color="#e57c23" // Copper color
                metalness={0.9}
                roughness={0.3}
              />
            </Cylinder>
            {/* Metal Ring Bracket around coil */}
            <Torus args={[0.2, 0.04, 8, 16]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial color="#334e68" metalness={0.9} />
            </Torus>
          </group>
        ))}

        {/* Inner glow line ring */}
        <Torus args={[1.15, 0.02, 8, 64]}>
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.6} />
        </Torus>
      </group>

      {/* OUTER HOUSING AND SEGMENTED SHIELDING */}
      <group ref={outerRingRef}>
        {/* Outer Heavy Steel Housing Ring */}
        <Torus args={[1.8, 0.08, 12, 8]} rotation={[0, 0, Math.PI / 8]}>
          <meshStandardMaterial 
            color="#2d3748" 
            metalness={0.95} 
            roughness={0.1} 
          />
        </Torus>

        {/* Outer Glowing Diagnostics Ring */}
        <Torus args={[1.95, 0.02, 8, 100]}>
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.4} />
        </Torus>

        {/* Heavy metal support mounts (spokes pointing outwards) */}
        {Array.from({ length: 4 }).map((_, idx) => {
          const angle = (idx / 4) * Math.PI * 2 + Math.PI / 4;
          return (
            <group 
              key={idx} 
              position={[Math.cos(angle) * 1.9, Math.sin(angle) * 1.9, 0]} 
              rotation={[0, 0, angle + Math.PI / 2]}
            >
              <Box args={[0.12, 0.3, 0.15]}>
                <meshStandardMaterial color="#486581" metalness={0.9} roughness={0.1} />
              </Box>
            </group>
          );
        })}
      </group>

      {/* AMBIENT LIGHT SOURCE EMITTED BY CORE */}
      <pointLight 
        position={[0, 0, 0.5]} 
        color="#00f0ff" 
        intensity={glowIntensity.current.value * 2.5} 
        distance={6} 
      />

      {/* ORBITING STAR SPARKLES - Flux Emissions */}
      <group ref={particlesRef}>
        <Sparkles 
          count={hovered ? 60 : 30} 
          scale={2.2} 
          size={hovered ? 2.5 : 1.5} 
          speed={hovered ? 2.0 : 0.8} 
          color="#00f0ff" 
        />
      </group>
    </group>
  );
}

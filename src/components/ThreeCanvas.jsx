import React, { useEffect, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Stars, Torus, OrbitControls } from '@react-three/drei';
import ArcReactor from './ArcReactor';
import gsap from 'gsap';

function CameraController({ activeSection }) {
  const { camera } = useThree();
  const currentTarget = useRef({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    // Map sections to 3D camera coordinates
    let targetPos = { x: 0, y: 0, z: 5 };
    let targetLook = { x: 0, y: 0, z: 0 };

    switch (activeSection) {
      case 'about':
        targetPos = { x: -1.8, y: 0.8, z: 4.0 };
        targetLook = { x: -0.6, y: 0.2, z: 0 };
        break;
      case 'skills':
        targetPos = { x: 1.8, y: -0.6, z: 4.2 };
        targetLook = { x: 0.6, y: -0.2, z: 0 };
        break;
      case 'projects':
        targetPos = { x: -1.5, y: -1.2, z: 3.8 };
        targetLook = { x: -0.5, y: -0.4, z: 0 };
        break;
      case 'timeline':
        targetPos = { x: 1.5, y: 1.2, z: 4.0 };
        targetLook = { x: 0.5, y: 0.4, z: 0 };
        break;
      case 'robotics':
        targetPos = { x: 2.0, y: 1.8, z: 3.5 };
        targetLook = { x: 0.7, y: 0.6, z: 0 };
        break;
      case 'contact':
        targetPos = { x: 0, y: -1.6, z: 4.5 };
        targetLook = { x: 0, y: -0.5, z: 0 };
        break;
      default:
        // Default overview position
        targetPos = { x: 0, y: 0, z: 5.0 };
        targetLook = { x: 0, y: 0, z: 0 };
    }

    // Animate camera position
    gsap.to(camera.position, {
      x: targetPos.x,
      y: targetPos.y,
      z: targetPos.z,
      duration: 1.5,
      ease: 'power3.out',
    });

    // Animate target vector
    gsap.to(currentTarget.current, {
      x: targetLook.x,
      y: targetLook.y,
      z: targetLook.z,
      duration: 1.5,
      ease: 'power3.out',
      onUpdate: () => {
        camera.lookAt(currentTarget.current.x, currentTarget.current.y, currentTarget.current.z);
      }
    });

  }, [activeSection, camera]);

  return null;
}

// Transparent holographic rotation circles in 3D space
function HolographicHUDGimbal() {
  const groupRef = useRef();

  useEffect(() => {
    if (groupRef.current) {
      gsap.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        duration: 35,
        repeat: -1,
        ease: 'none',
      });
    }
  }, []);

  return (
    <group ref={groupRef}>
      {/* Horizontal HUD Ring */}
      <Torus args={[2.5, 0.01, 8, 80]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.12} wireframe />
      </Torus>
      
      {/* Outer Diagonal Ring */}
      <Torus args={[3.2, 0.005, 4, 60]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <meshBasicMaterial color="#00dcff" transparent opacity={0.07} wireframe />
      </Torus>

      {/* Vertical Ring */}
      <Torus args={[2.2, 0.008, 6, 80]} rotation={[0, Math.PI / 2, 0]}>
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.09} wireframe />
      </Torus>
    </group>
  );
}

export default function ThreeCanvas({ activeSection }) {
  return (
    <div className="fixed inset-0 z-0 w-full h-full bg-[#010a15]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: false }}
        style={{ touchAction: 'none' }}
      >
        <color attach="background" args={['#010a15']} />
        
        {/* Lights */}
        <ambientLight intensity={0.15} />
        <directionalLight position={[2, 2, 3]} intensity={0.5} />
        <pointLight position={[-2, -2, 2]} color="#00f0ff" intensity={0.8} />

        {/* 3D Scene Components */}
        <ArcReactor isActive={!!activeSection} />
        <HolographicHUDGimbal />
        
        {/* Optimized background stars */}
        <Stars 
          radius={100} 
          depth={50} 
          count={1500} 
          factor={4} 
          saturation={0.5} 
          fade 
          speed={1} 
        />

        {/* Dynamic camera navigation controller */}
        <CameraController activeSection={activeSection} />

        {/* Control Three.js camera rotation via OrbitControls on home screen only */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enabled={!activeSection}
        />
      </Canvas>
    </div>
  );
}

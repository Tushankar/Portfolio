import React, { useRef } from "react";
import { technologies } from "../constants/index";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion";

// === GlowingBackground Component ===
const GlowSphere = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.material.emissiveIntensity = 0.5 + Math.sin(t * 3) * 0.5;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial
        color="#00ffff"
        emissive="#00ffff"
        emissiveIntensity={0.7}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
};

const GlowingBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 7] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <GlowSphere />
      </Canvas>
    </div>
  );
};

// === Icon Component ===
const TechIcon = ({ src, alt, delay = 0, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: delay * 0.8, 
        duration: 0.6, 
        type: "spring", 
        stiffness: 150 
      }}
      viewport={{ once: true, margin: "50px" }}
      className="w-20 h-20 sm:w-24 sm:h-24 group relative"
      title={title}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center"
        whileHover={{ 
          scale: 1.3,
          rotate: [0, 5, -5, 0],
          transition: { 
            type: "spring", 
            stiffness: 400,
            rotate: { duration: 0.8, repeat: Infinity }
          }
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-3/4 h-3/4 object-contain drop-shadow-lg"
        />
      </motion.div>

      {/* Hover Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-black/80 rounded-md text-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {title}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-black/80 rotate-45" />
      </div>
    </motion.div>
  );
};

// === Tech Section ===
const Tech = () => {
  const firstRow = technologies.slice(0, 7);
  const secondRow = technologies.slice(7);

  return (
    <div
      className="relative w-full pt-16 pb-12 px-4 flex flex-col items-center overflow-hidden"
      style={{ backgroundColor: "#010103" }}
    >
      <GlowingBackground />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-white text-center z-10"
      >
        <p className="text-white-600"> What Powers My Work</p>
      
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-6 mb-6 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
          }
        }}
      >
        {firstRow.map((tech, index) => (
          <TechIcon
            key={tech.name}
            src={tech.path}
            alt={tech.name}
            title={tech.name}
            delay={index * 0.1}
          />
        ))}
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-6 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.5 }
          }
        }}
      >
        {secondRow.map((tech, index) => (
          <TechIcon
            key={tech.name}
            src={tech.path}
            alt={tech.name}
            title={tech.name}
            delay={(index + 7) * 0.1}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Tech;
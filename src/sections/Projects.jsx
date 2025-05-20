import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { myProjects } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import DemoComputer from '../components/DemoComputer.jsx';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);
  const audioRef = useRef(null);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
    setShowTooltip(false);
  };

  const triggerTooltip = () => {
    setShowTooltip(true);
    if (audioRef.current) audioRef.current.play();

    gsap.fromTo(
      tooltipRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
    );
  };

  const closeTooltip = () => {
    // Stop audio immediately
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    gsap.to(tooltipRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.in',
      onComplete: () => setShowTooltip(false),
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' }
    );
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="c-space my-20 relative">
      <p className="head-text">My Selected Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        {/* Left Panel */}
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}>
            <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <div
              className="flex items-center gap-2 cursor-pointer text-white-600"
              onClick={triggerTooltip}>
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </div>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Panel with 3D */}
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>

      {/* Tooltip Modal + Blur Overlay */}
      {showTooltip && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={closeTooltip}
          />
          <div
            ref={tooltipRef}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       bg-black-800 text-white text-lg font-semibold px-6 py-4 rounded-xl
                       shadow-2xl z-50 w-[90%] max-w-md text-center">
            <p className="mb-4"> This site is Coming Soon </p>
            <button
              onClick={closeTooltip}
              className="mt-2 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition">
              Close
            </button>
          </div>
        </>
      )}

      {/* Audio Element */}
      <audio ref={audioRef} src="/comingsoon.mp3" preload="auto" />
    </section>
  );
};

export default Projects;
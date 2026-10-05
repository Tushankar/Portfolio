import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Suspense, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";

import { myProjects } from "../constants/index.js";
import CanvasLoader from "../components/Loading.jsx";
import DemoComputer from "../components/DemoComputer.jsx";
import PhoneShowcase from "../components/PhoneShowcase.jsx";
import ScreenGallery from "../components/ScreenGallery.jsx";

const projectCount = myProjects.length;

const pad = (n) => String(n).padStart(2, "0");

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);
  const audioRef = useRef(null);

  const selectProject = (index) => {
    setSelectedProjectIndex(index);
    setShowTooltip(false);
  };

  const handleNavigation = (direction) => {
    selectProject(
      direction === "previous"
        ? (selectedProjectIndex - 1 + projectCount) % projectCount
        : (selectedProjectIndex + 1) % projectCount
    );
  };

  const handleLiveSite = () => {
    const currentProject = myProjects[selectedProjectIndex];
    if (currentProject.href) {
      window.open(currentProject.href, "_blank", "noopener,noreferrer");
    } else {
      triggerTooltip();
    }
  };

  const triggerTooltip = () => {
    setShowTooltip(true);
    if (audioRef.current) audioRef.current.play();

    requestAnimationFrame(() =>
      gsap.fromTo(
        tooltipRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
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
      ease: "power3.in",
      onComplete: () => setShowTooltip(false),
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
    );
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];
  const isMobileApp = currentProject.kind === "mobile";
  const isLive = currentProject.status === "Live";

  return (
    <section className="c-space my-20 relative" id="projects">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <p className="head-text">My Selected Work</p>
          <p className="text-white-600 mt-3 max-w-xl">
            Production web platforms and mobile apps I&apos;ve built and shipped
            — from first commit to live users.
          </p>
        </div>
        <p className="text-white-500 font-mono text-sm shrink-0">
          {pad(selectedProjectIndex + 1)} / {pad(projectCount)}
        </p>
      </div>

      {/* Project switcher */}
      <div className="mt-8 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {myProjects.map((project, index) => (
          <button
            key={project.title}
            onClick={() => selectProject(index)}
            className={`shrink-0 flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
              index === selectedProjectIndex
                ? "bg-white text-black border-white"
                : "border-black-300 bg-black-200 text-white-600 hover:text-white hover:border-black-500"
            }`}
          >
            <span className="font-mono text-xs opacity-60">{pad(index + 1)}</span>
            {project.shortName}
            {project.kind === "mobile" && (
              <span
                className={`text-[10px] uppercase tracking-wider rounded px-1.5 py-0.5 ${
                  index === selectedProjectIndex
                    ? "bg-black/10"
                    : "bg-white/10"
                }`}
              >
                App
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-6 gap-5 w-full">
        {/* Left Panel */}
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 overflow-hidden">
          <div className="absolute top-0 right-0 pointer-events-none">
            <img
              src={currentProject.spotlight}
              alt=""
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <div
              className={`backdrop-filter backdrop-blur-3xl w-fit rounded-lg ${
                currentProject.logoWide ? "px-5 py-4" : "p-3"
              }`}
              style={currentProject.logoStyle}
            >
              <img
                className={
                  currentProject.logoWide
                    ? "h-8 w-auto"
                    : "w-10 h-10 object-contain shadow-sm rounded-md"
                }
                src={currentProject.logo}
                alt={`${currentProject.shortName} logo`}
              />
            </div>

            <div className="flex flex-wrap gap-2 relative">
              <span
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium border ${
                  isLive
                    ? "border-green-500/30 bg-green-500/10 text-green-400"
                    : "border-amber-500/30 bg-amber-500/10 text-amber-300"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isLive ? "bg-green-400" : "bg-amber-300 animate-pulse"
                  }`}
                />
                {currentProject.status}
              </span>
              <span className="rounded-full px-3 py-1 text-xs font-medium border border-white/10 bg-white/5 text-white-700">
                {currentProject.category}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-white-600 my-2 relative">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            {currentProject.role && (
              <p className="text-sm text-white-500 animatedText">
                {currentProject.role}
              </p>
            )}
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>

            {currentProject.highlights && (
              <ul className="grid sm:grid-cols-2 gap-x-5 gap-y-2 mt-1 animatedText">
                {currentProject.highlights.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-white-700">
                    <img
                      src="/assets/tick.svg"
                      alt=""
                      className="w-4 h-4 mt-0.5 shrink-0 opacity-80"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-wrap gap-2 relative">
            {currentProject.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs text-white-700 bg-black-300 rounded-md border border-black-500"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center mt-4 gap-4 flex-wrap relative">
            <button
              className="flex items-center gap-2 cursor-pointer rounded-lg bg-white text-black font-medium px-4 py-2.5 hover:bg-white-800 active:scale-95 transition-all"
              onClick={handleLiveSite}
            >
              {currentProject.cta ?? "Check Live Site"}
              {currentProject.href && (
                <img
                  src="/assets/arrow-up.png"
                  alt=""
                  className="w-3 h-3 invert"
                />
              )}
            </button>

            <div className="flex items-center gap-3">
              <button
                className="arrow-btn"
                onClick={() => handleNavigation("previous")}
                aria-label="Previous project"
              >
                <img src="/assets/left-arrow.png" alt="" />
              </button>

              <button
                className="arrow-btn"
                onClick={() => handleNavigation("next")}
                aria-label="Next project"
              >
                <img src="/assets/right-arrow.png" alt="" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel: phone mockups for mobile apps, 3D computer for web */}
        <div
          className={`border border-black-300 bg-black-200 rounded-lg ${
            isMobileApp ? "lg:h-full" : "h-96 md:h-full min-h-[24rem]"
          }`}
        >
          {isMobileApp ? (
            <PhoneShowcase
              screens={currentProject.screens}
              accent={currentProject.accent}
            />
          ) : (
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
          )}
        </div>
      </div>

      {/* Screens */}
      {currentProject.screens && (
        <div className="mt-8" key={currentProject.title}>
          <div className="flex items-center justify-between mb-4">
            <p className="text-white-800 font-semibold">
              Inside {currentProject.shortName}
            </p>
            <p className="text-white-500 text-sm">
              {currentProject.screens.length} screens · click to enlarge
            </p>
          </div>
          <ScreenGallery screens={currentProject.screens} isMobile={isMobileApp} />
        </div>
      )}

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
                       bg-black-300 border border-black-500 text-white text-lg font-semibold px-6 py-5 rounded-xl
                       shadow-2xl z-50 w-[90%] max-w-md text-center"
          >
            <p className="mb-1">{currentProject.shortName} is coming soon</p>
            <p className="mb-4 text-sm font-normal text-white-600">
              {currentProject.comingSoonNote ??
                "This project isn't publicly available yet."}
            </p>
            <button
              onClick={closeTooltip}
              className="mt-2 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition"
            >
              Close
            </button>
          </div>
        </>
      )}

      {/* Audio Element */}
      <audio ref={audioRef} src="/comingsoon.mp3" preload="none" />
    </section>
  );
};

export default Projects;

import { Leva } from "leva";
import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";

import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Button from "../components/Button.jsx";
import Target from "../components/Target.jsx";
import CanvasLoader from "../components/Loading.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import ErrorBoundary from "../components/ErrorBoundary.jsx";
import FitToSpace from "../components/FitToSpace.jsx";
import useSpaceBetween from "../hooks/useSpaceBetween.js";
import { calculateSizes } from "../constants/index.js";
import { HackerRoom } from "../components/HackerRoom.jsx";

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  // Keep the desk in the space between the intro text and the button
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const deskSpace = useSpaceBetween(sectionRef, textRef, buttonRef, 24);

  return (
    <section ref={sectionRef} className="min-h-screen w-full flex flex-col relative" id="home">
      <div
        ref={textRef}
        className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 relative z-10 pointer-events-none"
      >
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Tushankar <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
        <p className="text-center text-white-600 sm:text-lg text-sm font-generalsans">
          Full Stack & Mobile Developer · React · React Native · Node.js
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <ErrorBoundary>
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              {/* To hide controller */}
              <Leva hidden />
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />

              <HeroCamera isMobile={isMobile}>
                <FitToSpace
                  space={deskSpace}
                  scale={sizes.deskScale}
                  position={sizes.deskPosition}
                >
                  <HackerRoom rotation={[0.1, -Math.PI, 0]} />
                </FitToSpace>
              </HeroCamera>

              <group>
                <Target position={sizes.targetPosition} />
                <ReactLogo position={sizes.reactLogoPosition} />
                <Rings position={sizes.ringPosition} />
                <Cube position={sizes.cubePosition} />
              </group>

              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>
        </ErrorBoundary>
      </div>

      <div ref={buttonRef} className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;

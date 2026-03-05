import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Dashboard from "./sections/Dashboard";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";
import Employment from "./sections/Employment";
import Tech from "./sections/Tech";

// Import project pages
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import Project5 from "./pages/Project5";
import Project6 from "./pages/Project6";

import FloatingAIChat from "./components/FloatingAIChat";

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
};

const Home = () => (
  <main className="max-w-7xl mx-auto">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Dashboard />
    <Clients />
    <Experience />
    <Employment />
    <div className="mb-0">
      <Tech />
    </div>
    <div className="mt-0">
      <Contact />
    </div>
    <Footer />
  </main>
);

const App = () => {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
        <Route path="/project5" element={<Project5 />} />
        <Route path="/project6" element={<Project6 />} />
      </Routes>
      <FloatingAIChat />
    </>
  );
};

export default App;

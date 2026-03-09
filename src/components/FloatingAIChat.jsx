import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  MessageSquareMore,
  Loader2,
  X,
  Send,
  MoreHorizontal,
  ChevronDown,
  RefreshCw,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
//sss
const HOVER_TEXT = "Know About Tushankar";
const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const MODEL = "nvidia/nemotron-nano-12b-v2-vl:free";

const SYSTEM_PROMPT = `You are an AI assistant embedded in the personal portfolio website of Tushankar Saha, a skilled Full Stack Developer. Your job is to answer questions about Tushankar in a helpful, friendly, and professional manner. Only answer questions related to Tushankar, his work, skills, projects, experience, and background. If asked about unrelated topics, politely redirect the conversation back to Tushankar's portfolio.

--- ABOUT TUSHANKAR ---
Name: Tushankar Saha
Email: sahatushankar234@gmail.com
Location: Newtown, Kolkata, India
Experience: 4+ years in full stack and software development
Open to: Remote work worldwide and on-site opportunities
Passion: Solving problems and building things through code. Loves exploring new technologies.

--- CURRENT EMPLOYMENT ---
Company: Kyptronix LLP (kyptronix.us)
Role: Full Stack Developer
Type: Full-Time, On-Site
Duration: September 2025 – Present (7 months)
Description: Contributing to development of multiple USA-based web and mobile projects. Building scalable, high-performance applications using modern technologies across both frontend and backend.
Frontend Stack: Next.js, React.js, React Native, Tailwind CSS
Backend Stack: Node.js, Express.js
Database & APIs: MongoDB, RESTful API development, third-party integrations
Responsibilities:
- Architecting and building production-ready web and mobile applications with Next.js, React Native, and TypeScript
- Delivering dynamic user interfaces, efficient backend systems, and seamless UX across platforms
- Writing clean, maintainable code and building production-ready solutions meeting client expectations
- Collaborating closely with cross-functional teams on USA-based client projects
- Modernizing legacy systems and building scalable enterprise-grade applications
- Building AI-driven automation features and chatbot development
Skills at Kyptronix: Information Technology Infrastructure, Engineering, Full Stack Development, React Native

--- INTERNSHIP ---
Company: Kyptronix LLP
Role: Development Intern
Type: Internship
Duration: June 2025 – Present (10 months)
Description: Gained real-world experience through hands-on involvement in software development projects.
Responsibilities:
- Participating in daily team huddles to align with development goals and project timelines
- Delivering technical tasks efficiently while maintaining internal SOPs and communication standards
- Contributing to live projects in a collaborative environment valuing innovation, accountability, and discipline
- Following Agile principles to manage tasks, debug issues, and iterate on features based on feedback
- Maintaining 90%+ attendance and high team synergy as part of performance evaluation for full-time placement
Skills: MERN Stack, Java, Full Stack Development

--- WORK EXPERIENCE TIMELINE ---
1. Full Stack Developer at Kyptronix LLP (Full-Time) – September 2025 to Present
   Building scalable web and mobile apps for USA-based clients. Next.js, React Native, Node.js, Express, MongoDB, RESTful APIs.

2. Development Intern at Kyptronix LLP – June 2025 to Present
   Hands-on software development, Agile workflow, live USA-based projects, MERN Stack, Java.

3. Mobile App Developer (React Native) – 2025 to Present
   React Native cross-platform mobile apps for iOS and Android; component-based architecture; native performance.

4. Full Stack Developer – 2024 to Present
   Building complete web apps from frontend to backend. React (frontend), Node.js + Express (backend), MongoDB + Firebase (database). Covers entire dev lifecycle for scalable solutions.

5. Junior Software Developer (Java) – 2022 to 2023
   Object-oriented programming, enterprise application development, efficient algorithms, server-side Java solutions.

--- EDUCATION ---
University: University of Engineering & Management (UEM), Kolkata
Degree: Bachelor's degree, Computer Software Engineering (B.Tech)
Duration: August 2022 – July 2026 (currently pursuing)
CGPA/Grade: 9.15
Skills: MERN Stack, Java, Full Stack Development, AI/ML
Activities & Societies: Active sports enthusiast — plays football and cricket (field and virtual). Enjoys team-based events, exploring new tech, and extracurriculars promoting collaboration, strategy, and fun.
About (Academic Profile):
- Energetic and curious B.Tech student passionate about building impactful tech solutions
- Designs backend systems with Java Spring Boot, Node.js, and MongoDB
- Crafts full-stack projects using the MERN stack — loves turning ideas into real-world applications
- Deeply interested in Artificial Intelligence and Machine Learning; completed certifications in ML/DL
- Worked on projects blending tech and creativity: sign language detection, generative AI, smart LMS platforms
- When not coding: found on the football field, playing cricket, or gaming — strategy, passion, and fun go hand in hand

--- TECH STACK / SKILLS ---
Frontend: React.js, React Native, Next.js, TypeScript, JavaScript, Tailwind CSS, shadcn/ui, Three.js
Backend: Node.js, Express.js, Java, Spring Boot, Spring MVC
Databases: MongoDB, SQL
Tools & Platforms: GitHub, Firebase, Stripe, PayPal, mPDF, AI Automation

--- PROJECTS (Live Production Projects) ---
IMPORTANT: When someone asks about Tushankar's projects, ALWAYS provide a comprehensive list including BOTH "Live Production Projects" and "Frontend Showcase Projects". Always include clickable links using markdown format: [Project Name](https://link.com) for live sites and [Project Name](/projectX) for showcase routes.

1. SellSync – Smart POS System for Modern Retail
   Live Website: https://sellsync.com
   Description: An all-in-one cloud-powered Point-of-Sale system for billing, inventory, and customer management for retail stores.
   Key Features: Real-time inventory synchronization, advanced analytics, multi-store support, various payment methods, customizable receipt management, automated alerts.
   Tech: Cloud Integration, Inventory Sync, Analytics, Hardware Ready

2. RayOne System – Vitamin & Wellness Platform
   Live Website: https://rayonesystem.com
   Description: A next-generation platform enabling entrepreneurs to build, launch, and grow successful vitamin and wellness stores. Industry's #1 solution for clarity, structure, and proven strategies.
   Key Features: Expert mentorship from Ray/Rayman Khan, step-by-step guidance, personalized support, scalable tools for beginners and experienced business owners in wellness retail.
   Tech: React.js, TailwindCSS, JavaScript, Business Tools, Mentorship Systems

3. CareComp – HR Management System
   Live Website: https://carecompapp.com
   Description: A streamlined HR platform for handling and organizing employee documentation and HR workflows, centralizing all employee documents.
   Key Features: W4, W9 compliance & onboarding forms, HR review/approve workflow. Status stages: Pending → In Review → Approved → In Progress. Reduces manual paperwork.
   Tech: React.js, TailwindCSS, JavaScript, Workflow Management

4. Al-Rasheed Academy – School Management System
   Live Website: https://alrasheedacademy.org
   Description: A comprehensive full-stack school management web application for Al-Rasheed Academy.
   Key Features: Public website with carousels, role-based authentication (admins, staff, parents, students), enrollment forms, student/parent surveys, calendar events, photo gallery, contact forms, job/volunteer applications, admin dashboard.
   Tech: React.js, Node.js, TailwindCSS, MongoDB

5. Housbe – Complete Real Estate Technology Platform
   Live Website: https://housbe.com
   Description: A full-featured SaaS real estate marketplace connecting buyers, sellers, agents, and lenders. Advanced property listings, AI-powered lead generation, real-time communication.
   Key Features: Role-based dashboards, OTP verification, Stripe & PayPal payment processing, advanced property filtering, buying leads marketplace, real-time messaging with media sharing, automated document management with mPDF.
   Tech: React.js, TailwindCSS, Stripe, PayPal, Real-time Messaging, Node.js

--- FRONTEND SHOWCASE PROJECTS (Dashboard / UI Clones) ---
These are beautifully crafted frontend UI projects showcased in the portfolio dashboard section. Whenever you mention any of these, ALWAYS provide a clickable link using markdown format: [Project Name](/projectX).

1. Wealth Management – Digital Banking
   Route: /project1
   Description: A modern wealth management landing page with real-time budget tracking. Features a video hero background and a clean dark UI.
   Tagline: "Build Wealth That Lasts Generations"
   Focus: Real-Time Budget Tracking, Wealth Management

2. Video Agency – Content Studio
   Route: /project2
   Description: A sleek social media marketing agency landing page. Showcases short-form content strategy for growing brands organically.
   Tagline: "Agency that makes your videos & reels viral"
   Focus: Brand Growth, Organic Views, Short-form Content, 70+ Creators

3. Logistics Hub – Global Transport
   Route: /project3
   Description: A bold, high-impact logistics company landing page with diagonal design elements (clip-diagonal), dark theme, and strong CTA.
   Tagline: Expert Logistics Planning
   Focus: Freight, Logistics, Shipping, Supply Chain

4. Nexus/Design Era – Tech Platform
   Route: /project4
   Description: A futuristic dark navy SaaS/enterprise platform landing page with bold uppercase typography.
   Brand: Nexus
   Focus: Enterprise Platform, SaaS, Technology Solutions

5. Cinematic Studio – Motion 3D
   Route: /project5
   Description: A stunning cinematic motion studio landing page with full-bleed video background, Reels and Pipeline sections.
   Brand: Framelix 3D
   Focus: Cinematic Animation, Motion Design, Video Production, 3D Rendering

6. Web3 Experience – Web3 Hub
   Route: /project6
   Description: A premium Web3 startup landing page with a dark gradient design, General Sans typography, and pill buttons. Built for a blockchain/crypto product.
   Tagline: "Web3 at the Speed of Experience"
   Focus: Web3, Blockchain, Crypto, DeFi — Early access from May 1, 2026

When listing projects, categorize them into "Production Applications (Real-world Live Sites)" and "Frontend UI/UX Showcase (Premium Clones)". Ensure BOTH categories are shown to give a full picture of Tushankar's capabilities.

--- CLIENT REVIEWS ---
- Pratyay Chatterjee (Marketing Director at GreenLeaf): "Transformed our outdated website into a modern, user-friendly platform. Attention to detail and commitment to quality are unmatched."
- Subarna Mondal (Founder of TechGear Shop): "Delivered a robust and scalable e-commerce solution. Online sales have significantly increased since launch."
- Souvik (Project Manager at UrbanTech): "Took complex project requirements and turned them into a seamless, functional website. Outstanding problem-solving abilities."
- Swarup Sardar (CEO of BrightStar Enterprises): "Understood requirements perfectly and delivered a website exceeding expectations. Top-notch skills in both frontend and backend dev."

--- SOCIAL MEDIA & LINKS ---
GitHub: https://github.com/Tushankar
LinkedIn: https://www.linkedin.com/in/tushankar-saha-5674a3254
Instagram: https://www.instagram.com/_tush4nkar/
Coding Ninjas / Naukri Code360: https://www.naukri.com/code360/profile/tushankar
GeeksForGeeks: https://www.geeksforgeeks.org/user/sahatusha256n/
Resume: https://drive.google.com/file/d/1PWTMa1JCwXRUkiDHHljuJ6q_vXeUjRKK/view?usp=sharing
Email: sahatushankar234@gmail.com

When someone asks for Tushankar's social links, GitHub, LinkedIn, Instagram, or resume, always provide the exact URLs listed above.

--- PERSONALITY & APPROACH ---
- Passionate about coding — it's not just a profession, it's a passion
- Loves solving problems and building things
- Flexible with time zones and remote communication
- Based in Newtown, Kolkata — open to remote work worldwide
- 4+ years of experience spanning mobile, web, frontend, backend, and Java

Keep responses concise, informative, and friendly. Use markdown formatting where helpful. When listing projects or tech, use bullet points. Always represent Tushankar positively and professionally.`;

const SUGGESTIONS = [
  "Who is Tushankar?",
  "What are your core skills?",
  "Tell me about your projects",
  "Where do you currently work?",
  "Share your social links",
  "Show UI/frontend projects",
];

// Simple markdown renderer for bold, bullet lists, and clickable links
const renderMarkdown = (text) => {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    // Bullet point
    if (line.trim().startsWith("- ") || line.trim().startsWith("• ")) {
      const content = line.trim().slice(2);
      return (
        <div key={i} className="flex gap-1.5 items-start my-0.5">
          <span className="text-white/40 mt-[3px] flex-shrink-0">•</span>
          <span dangerouslySetInnerHTML={{ __html: boldify(content) }} />
        </div>
      );
    }
    // Empty line → spacer
    if (line.trim() === "") return <div key={i} className="h-2" />;
    return (
      <p
        key={i}
        className="leading-relaxed"
        dangerouslySetInnerHTML={{ __html: boldify(line) }}
      />
    );
  });
};

const boldify = (text) =>
  text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="chat-link"><strong>$1</strong></a>')
    .replace(/(?<!href=")(https?:\/\/[^\s]+)/g, '<a href="$1" class="chat-link" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");


const FloatingAIChat = () => {
  const [hovered, setHovered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem("tushankar_chat_history");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Error reading chat history from localStorage", e);
      return [];
    }
  });
  const [inputValue, setInputValue] = useState("");
  const [isAITyping, setIsAITyping] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const abortControllerRef = useRef(null);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  // Persistence logic
  useEffect(() => {
    try {
      localStorage.setItem("tushankar_chat_history", JSON.stringify(messages));
    } catch (e) {
      console.error("Error saving chat history to localStorage", e);
    }
  }, [messages]);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingText, scrollToBottom]);

  const handleClick = () => {
    if (loading || isOpen || showIntro) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsOpen(true);
      setShowIntro(true);
      setTimeout(() => setShowIntro(false), 2800);
    }, 1200);
  };

  const handleClose = () => {
    abortControllerRef.current?.abort();
    setIsOpen(false);
  };

  const handleClearChat = () => {
    setShowClearConfirm(true);
  };

  const confirmClear = () => {
    abortControllerRef.current?.abort();
    setMessages([]);
    setStreamingText("");
    setIsAITyping(false);
    localStorage.removeItem("tushankar_chat_history");
    setShowClearConfirm(false);
  };

  const cancelClear = () => {
    setShowClearConfirm(false);
  };

  const sendMessage = useCallback(
    async (text) => {
      const userMessage = text.trim();
      if (!userMessage || isAITyping) return;

      const newMessages = [...messages, { role: "user", content: userMessage }];
      setMessages(newMessages);
      setInputValue("");
      setIsAITyping(true);
      setStreamingText("");

      // Build history for API (exclude system prompt — sent separately)
      const apiMessages = [
        { role: "system", content: SYSTEM_PROMPT },
        ...newMessages.map((m) => ({ role: m.role, content: m.content })),
      ];

      abortControllerRef.current = new AbortController();

      try {
        const response = await fetch(
          "https://openrouter.ai/api/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${OPENROUTER_API_KEY}`,
              "HTTP-Referer": window.location.origin,
              "X-Title": "Tushankar Portfolio",
            },
            body: JSON.stringify({
              model: MODEL,
              messages: apiMessages,
              stream: true,
              max_tokens: 1024,
              temperature: 0.7,
            }),
            signal: abortControllerRef.current.signal,
          },
        );

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let fullText = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n").filter((l) => l.trim() !== "");

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const data = line.slice(6);
              if (data === "[DONE]") continue;
              try {
                const parsed = JSON.parse(data);
                const delta = parsed.choices?.[0]?.delta?.content;
                if (delta) {
                  fullText += delta;
                  setStreamingText(fullText);
                }
              } catch {
                // ignore parse errors for partial chunks
              }
            }
          }
        }

        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: fullText },
        ]);
        setStreamingText("");
      } catch (err) {
        if (err.name !== "AbortError") {
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content:
                "Sorry, I encountered an error connecting to the AI. Please try again.",
              isError: true,
            },
          ]);
          setStreamingText("");
        }
      } finally {
        setIsAITyping(false);
      }
    },
    [messages, isAITyping],
  );

  const handleSend = () => sendMessage(inputValue);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestion = (question) => {
    if (!isAITyping) sendMessage(question);
  };

  const showSuggestions = messages.length === 0;

  return (
    <>
      <style>{`
        @keyframes spin-border {
          0%   { --angle: 0deg; }
          100% { --angle: 360deg; }
        }
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        .shiny-border-wrapper {
          background: conic-gradient(
            from var(--angle),
            #3a3a3a, #a8a8a8, #e8e8e8, #ffffff, #e8e8e8, #a8a8a8, #3a3a3a
          );
          animation: spin-border 3s linear infinite;
          padding: 2px;
          border-radius: 9999px;
          transition: box-shadow 0.4s ease;
        }

        .shiny-border-inner {
          background: rgba(0, 0, 0, 0.82);
          backdrop-filter: blur(12px);
          border-radius: 9999px;
          width: 100%;
          height: 100%;
        }

        .expand-container {
          max-width: 0;
          overflow: hidden;
          white-space: nowrap;
          opacity: 0;
          transition:
            max-width 0.55s cubic-bezier(0.34, 1.15, 0.64, 1),
            opacity   0.25s ease;
        }
        .expand-container.open {
          max-width: 240px;
          opacity: 1;
        }

        .sep {
          height: 18px;
          width: 0px;
          border-left: 1.5px solid rgba(255,255,255,0.18);
          opacity: 0;
          transition: opacity 0.3s ease 0.15s;
          flex-shrink: 0;
        }
        .sep.visible { opacity: 1; }

        @keyframes char-drop {
          0%   { opacity: 0; transform: translateY(-10px) scale(0.75) rotate(-6deg); }
          60%  { opacity: 1; transform: translateY(3px)  scale(1.08) rotate(1deg);  }
          100% { opacity: 1; transform: translateY(0)    scale(1)    rotate(0deg);  }
        }
        .open .char {
          opacity: 0;
          animation: char-drop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes typing-dot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30%            { transform: translateY(-5px); opacity: 1; }
        }
        .typing-dot {
          animation: typing-dot 1.2s ease-in-out infinite;
        }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }

        .chat-scroll::-webkit-scrollbar { width: 4px; }
        .chat-scroll::-webkit-scrollbar-track { background: transparent; }
        .chat-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 999px; }

        .chat-link {
          color: #60a5fa;
          text-decoration: underline;
          font-weight: 600;
          transition: all 0.2s ease;
          position: relative;
        }
        .chat-link:hover {
          color: #93c5fd;
          opacity: 0.8;
          text-shadow: 0 0 8px rgba(96, 165, 250, 0.4);
        }
      `}</style>

      <AnimatePresence>
        {!isOpen && !showIntro && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50 shiny-border-wrapper transition-transform duration-300 hover:-translate-y-1"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <button
              className="shiny-border-inner flex flex-row items-center gap-2.5 px-6 py-3 text-white relative overflow-visible disabled:cursor-not-allowed"
              onClick={handleClick}
              disabled={loading}
              aria-label="Chat with AI to know more about me"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {loading ? (
                    <motion.div
                      key="loader"
                      initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                    >
                      <Loader2 className="w-6 h-6 stroke-[2] animate-spin text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="icon"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                    >
                      <MessageSquareMore className="w-6 h-6 stroke-[2] text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <span className="font-semibold text-[17px] tracking-wide relative z-10 select-none">
                {loading ? "Thinking..." : "Ask AI"}
              </span>

              <div className={`sep ${hovered ? "visible" : ""}`} />

              <div className={`expand-container ${hovered ? "open" : ""}`}>
                <span className="font-semibold text-[15px] tracking-wide pr-1">
                  {HOVER_TEXT.split("").map((char, i) => (
                    <span
                      key={i}
                      className="char inline-block text-[15px] text-white"
                      style={{ animationDelay: `${hovered ? i * 0.038 : 0}s` }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] pointer-events-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-black/20 backdrop-blur-[2px] pointer-events-auto"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40, x: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40, x: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="absolute right-8 bottom-8 w-[440px] h-[calc(100vh-64px)] max-h-[850px] bg-[#0a0a0a]/90 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl backdrop-blur-3xl pointer-events-auto flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <span className="text-white font-bold text-2xl tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    Ask AI
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-medium tracking-wide">
                    Tushankar's Portfolio
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {messages.length > 0 && (
                    <button
                      onClick={handleClearChat}
                      title="Clear chat"
                      className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/40 hover:text-white"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    onClick={handleClose}
                    className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/50 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-hidden relative">
                <AnimatePresence mode="wait">
                  {showIntro ? (
                    <motion.div
                      key="intro"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                    >
                      <h2 className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-white text-[28px] font-bold leading-tight tracking-tight">
                        {"Know About Tushankar more through your questions with AI"
                          .split(" ")
                          .map((word, i) => (
                            <motion.span
                              key={i}
                              initial={{
                                opacity: 0,
                                y: 20,
                                filter: "blur(8px)",
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                              }}
                              transition={{
                                delay: i * 0.1,
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className={i > 2 ? "text-white/40" : "text-white"}
                            >
                              {word}
                            </motion.span>
                          ))}
                      </h2>
                      <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ delay: 0.8, duration: 1.2 }}
                        className="h-[1px] w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-8"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="chat"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="h-full flex flex-col"
                    >
                      {/* Messages */}
                      <div className="flex-1 px-6 pt-5 pb-2 overflow-y-auto chat-scroll space-y-4">
                        {/* Welcome header — only when no messages */}
                        {showSuggestions && (
                          <div className="space-y-1 mb-6">
                            <h2 className="text-white/60 text-base font-medium">
                              Hi, I'm Tushankar's AI!
                            </h2>
                            <h1 className="text-white text-[32px] font-bold leading-[1.15] tracking-tight">
                              Ask me anything <br />
                              <span className="text-white/40">
                                about his portfolio.
                              </span>
                            </h1>
                          </div>
                        )}

                        {/* Welcome AI message */}
                        {showSuggestions && (
                          <div className="flex flex-col gap-3">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 max-w-[90%]">
                              <p className="text-white/80 text-sm leading-relaxed">
                                Hello! I can tell you about Tushankar's
                                projects, skills, experience, and more. What
                                would you like to know?
                              </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {SUGGESTIONS.map((q, i) => (
                                <button
                                  key={i}
                                  onClick={() => handleSuggestion(q)}
                                  className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white/60 text-xs font-medium hover:bg-white/10 hover:text-white hover:border-white/20 transition-all active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
                                  disabled={isAITyping}
                                >
                                  {q}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Conversation messages */}
                        {messages.map((msg, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                                msg.role === "user"
                                  ? "bg-white/10 border border-white/15 text-white rounded-br-sm"
                                  : msg.isError
                                    ? "bg-red-500/10 border border-red-500/20 text-red-300 rounded-bl-sm"
                                    : "bg-white/5 border border-white/10 text-white/85 rounded-bl-sm"
                              }`}
                            >
                              {msg.role === "assistant" && !msg.isError
                                ? renderMarkdown(msg.content)
                                : msg.content}
                            </div>
                          </motion.div>
                        ))}

                        {/* Streaming response */}
                        {isAITyping && streamingText === "" && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-start"
                          >
                            <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-white/50 typing-dot" />
                              <div className="w-1.5 h-1.5 rounded-full bg-white/50 typing-dot" />
                              <div className="w-1.5 h-1.5 rounded-full bg-white/50 typing-dot" />
                            </div>
                          </motion.div>
                        )}

                        {isAITyping && streamingText !== "" && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-start"
                          >
                            <div className="max-w-[88%] bg-white/5 border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3 text-sm text-white/85 leading-relaxed">
                              {renderMarkdown(streamingText)}
                              <span className="inline-block w-0.5 h-3.5 bg-white/60 ml-0.5 animate-pulse align-middle" />
                            </div>
                          </motion.div>
                        )}

                        <div ref={messagesEndRef} />
                      </div>

                      {/* Input */}
                      <div className="p-5 pt-2">
                        <div className="flex flex-col gap-3">
                          <div className="relative flex items-center bg-white/5 border border-white/10 rounded-[22px] p-1.5 focus-within:border-white/20 transition-all">
                            <input
                              ref={inputRef}
                              type="text"
                              value={inputValue}
                              onChange={(e) => setInputValue(e.target.value)}
                              onKeyDown={handleKeyDown}
                              placeholder={
                                isAITyping
                                  ? "AI is typing..."
                                  : "Ask about Tushankar..."
                              }
                              disabled={isAITyping}
                              className="flex-1 bg-transparent py-2.5 px-4 text-white text-[14px] focus:outline-none placeholder:text-white/35 disabled:opacity-50"
                            />
                            <button
                              onClick={handleSend}
                              disabled={isAITyping || !inputValue.trim()}
                              className="p-2.5 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-xl transition-all text-white active:scale-95"
                            >
                              <Send className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-center text-[10px] text-white/30 leading-tight pb-1">
                            AI responses are generated by{" "}
                            <span className="text-white/50">
                              nvidia/nemotron
                            </span>{" "}
                            via OpenRouter. May not be 100% accurate.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Clear Chat Confirmation Modal */}
                <AnimatePresence>
                  {showClearConfirm && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-[110] bg-black/60 backdrop-blur-md flex items-center justify-center p-8 text-center"
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        className="bg-[#121212] border border-white/10 rounded-[24px] p-6 w-full max-w-[320px] shadow-2xl"
                      >
                        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                          <RefreshCw className="w-6 h-6 text-red-500/80" />
                        </div>
                        <h3 className="text-white text-lg font-bold mb-2">Clear Chat History?</h3>
                        <p className="text-white/50 text-sm mb-6 leading-relaxed">
                          This will permanently delete all messages in this conversation.
                        </p>
                        <div className="flex gap-2">
                          <button
                            onClick={cancelClear}
                            className="flex-1 py-3 rounded-xl bg-white/5 border border-white/5 text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition-all active:scale-95"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={confirmClear}
                            className="flex-1 py-3 rounded-xl bg-red-500/80 text-white text-sm font-semibold hover:bg-red-500 transition-all active:scale-95 shadow-[0_0_20px_rgba(239,68,68,0.2)]"
                          >
                            Clear All
                          </button>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingAIChat;

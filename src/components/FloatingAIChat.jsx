import React, { useState } from "react";
import { MessageSquareMore, Loader2, X, Send, MoreHorizontal, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HOVER_TEXT = "Know About Tushankar";

const FloatingAIChat = () => {
  const [hovered, setHovered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (loading || isOpen || showIntro) return;
    setLoading(true);
    // 1. Thinking phase (1.2s)
    setTimeout(() => {
      setLoading(false);
      setIsOpen(true);
      setShowIntro(true);
      // 2. Intro phase (2.8s total for a nice slow cinematic feel)
      setTimeout(() => {
        setShowIntro(false);
      }, 2800);
    }, 1200);
  };
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

        /* ── default silver ring ── */
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

        /* ── aurora ring on hover ── */
        /* Removed as per user request */

        .shiny-border-inner {
          background: rgba(0, 0, 0, 0.82);
          backdrop-filter: blur(12px);
          border-radius: 9999px;
          width: 100%;
          height: 100%;
        }

        /* ── expand container ── */
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

        /* ── separator ── */
        .sep {
          height: 18px;
          width: 0px;
          border-left: 1.5px solid rgba(255,255,255,0.18);
          opacity: 0;
          transition: opacity 0.3s ease 0.15s;
          flex-shrink: 0;
        }
        .sep.visible { opacity: 1; }

        /* ── per-character bounce-in ── */
        @keyframes char-drop {
          0%   { opacity: 0; transform: translateY(-10px) scale(0.75) rotate(-6deg); }
          60%  { opacity: 1; transform: translateY(3px)  scale(1.08) rotate(1deg);  }
          100% { opacity: 1; transform: translateY(0)    scale(1)    rotate(0deg);  }
        }
        .open .char {
          opacity: 0;
          animation: char-drop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        /* Removed holo effect as per user request */

        /* ── icon pulse when hovered ── */
        @keyframes icon-pulse {
          0%, 100% { filter: drop-shadow(0 0 0px #06b6d4); }
          50%       { filter: drop-shadow(0 0 8px #06b6d4); }
        }
        .icon-pulse { animation: icon-pulse 1.4s ease-in-out infinite; }
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
              {/* Icon / Loader */}
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

              {/* "Ask AI" label */}
              <span className="font-semibold text-[17px] tracking-wide relative z-10 select-none">
                {loading ? "Thinking..." : "Ask AI"}
              </span>

              {/* Separator */}
              <div className={`sep ${hovered ? "visible" : ""}`} />

              {/* Expanding "Know about Tushankar" */}
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
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/20 backdrop-blur-[2px] pointer-events-auto"
            />

            {/* Modal - Positioned Bottom Right & Full Height */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40, x: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40, x: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="absolute right-8 bottom-8 w-[440px] h-[calc(100vh-64px)] max-h-[850px] bg-[#0a0a0a]/90 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl backdrop-blur-3xl pointer-events-auto flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-2xl tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    Ask AI
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/50 hover:text-white">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/50 hover:text-white">
                    <ChevronDown className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/50 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Transition between Intro and Chat Area */}
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
                              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
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
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="h-full flex flex-col"
                    >
                      {/* Chat Area */}
                      <div className="flex-1 p-8 pt-4 overflow-y-auto space-y-8">
                        <div className="space-y-1">
                          <h2 className="text-white/60 text-lg font-medium">Hi I'm Tushankar!</h2>
                          <h1 className="text-white text-[38px] font-bold leading-[1.15] tracking-tight">
                            I can help you with <br />
                            <span className="text-white/40">my portfolio.</span>
                          </h1>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 max-w-[85%]">
                            <p className="text-white/80 text-sm leading-relaxed">
                              Hello! I'm your AI assistant. I can tell you about Tushankar's projects, skills, or experience. What would you like to know?
                            </p>
                          </div>

                          {/* Suggestion Chips */}
                          <div className="flex flex-wrap gap-2 pt-2">
                            {[
                              "Who is Tushankar?",
                              "What are your core skills?",
                              "Tell me about your projects",
                            ].map((question, i) => (
                              <button
                                key={i}
                                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 text-xs font-medium hover:bg-white/10 hover:text-white hover:border-white/20 transition-all active:scale-95"
                              >
                                {question}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Input Area */}
                      <div className="p-6 pt-0">
                        <div className="flex flex-col gap-4">
                          <div className="relative flex items-center bg-white/5 border border-white/10 rounded-[22px] p-1.5 focus-within:border-white/20 transition-all">
                            <input
                              type="text"
                              placeholder="Type a message..."
                              className="flex-1 bg-transparent py-3 px-4 text-white text-[15px] focus:outline-none placeholder:text-white/50"
                            />
                            <button className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all text-white active:scale-95">
                              <Send className="w-5 h-5" />
                            </button>
                          </div>
                          
                          <p className="text-center text-[10px] text-white/40 leading-tight pb-2 whitespace-nowrap">
                            AI can make mistakes. By using Ask AI, you agree to our{" "}
                            <span className="underline cursor-pointer hover:text-white/60">Terms</span> and{" "}
                            <span className="underline cursor-pointer hover:text-white/60">Privacy Policy</span>.
                          </p>
                        </div>
                      </div>
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

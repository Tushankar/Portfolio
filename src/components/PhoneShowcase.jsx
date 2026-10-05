import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PhoneFrame = ({ src, alt, className = "" }) => (
  <div
    className={`relative aspect-[9/19.5] rounded-[2.2rem] border-[6px] border-[#26262c] bg-black shadow-2xl shadow-black/60 overflow-hidden ${className}`}
  >
    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-3.5 rounded-full bg-[#1a1a1f] z-20" />
    {/* status-bar strip so the notch never covers the screen's header */}
    <div className="absolute inset-x-0 bottom-0 top-6 overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.img
          key={src}
          src={src}
          alt={alt}
          loading="lazy"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </AnimatePresence>
    </div>
  </div>
);

// Three fanned phones that cycle through a mobile app's screens.
const PhoneShowcase = ({ screens, accent = "#635BFF", interval = 3200 }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = screens.length;

  useEffect(() => {
    setIndex(0);
  }, [screens]);

  useEffect(() => {
    if (paused || count < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(id);
  }, [paused, count, interval]);

  const at = (offset) => screens[(index + offset + count) % count];

  return (
    <div
      className="relative h-full min-h-[30rem] w-full flex flex-col items-center justify-center overflow-hidden py-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 45%, ${accent}40 0%, transparent 60%)`,
        }}
      />

      <div className="relative flex items-center justify-center w-full">
        <PhoneFrame
          src={at(-1).src}
          alt={at(-1).caption}
          className="hidden sm:block w-36 md:w-40 -mr-10 -rotate-6 translate-y-6 opacity-50 blur-[0.5px]"
        />
        <PhoneFrame
          src={at(0).src}
          alt={at(0).caption}
          className="relative z-10 w-44 sm:w-52 md:w-56"
        />
        <PhoneFrame
          src={at(1).src}
          alt={at(1).caption}
          className="hidden sm:block w-36 md:w-40 -ml-10 rotate-6 translate-y-6 opacity-50 blur-[0.5px]"
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={at(0).caption}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3 }}
          className="relative mt-7 text-sm text-white-600 text-center px-4"
        >
          {at(0).caption}
        </motion.p>
      </AnimatePresence>

      <div className="relative flex gap-1.5 mt-4">
        {screens.map((screen, i) => (
          <button
            key={screen.src}
            onClick={() => setIndex(i)}
            aria-label={`Show ${screen.caption}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-white" : "w-1.5 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhoneShowcase;

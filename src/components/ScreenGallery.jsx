import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

const Lightbox = ({ screens, index, isMobile, onClose, onStep }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    window.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose, onStep]);

  const screen = screens[index];

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={screen.caption}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Close"
      >
        <X size={20} />
      </button>

      <AnimatePresence mode="wait">
        <motion.img
          key={screen.src}
          src={screen.src}
          alt={screen.caption}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.25 }}
          className={`object-contain rounded-xl border border-white/10 shadow-2xl ${
            isMobile ? "max-h-[80vh] w-auto" : "max-h-[78vh] max-w-full"
          }`}
        />
      </AnimatePresence>

      <div
        className="mt-5 flex items-center gap-5 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => onStep(-1)}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          aria-label="Previous screen"
        >
          <ChevronLeft size={20} />
        </button>
        <p className="text-sm text-white-700 min-w-[12rem] text-center">
          {screen.caption}
          <span className="block text-xs text-white-500 mt-0.5">
            {index + 1} / {screens.length}
          </span>
        </p>
        <button
          onClick={() => onStep(1)}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          aria-label="Next screen"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </motion.div>,
    document.body
  );
};

// Horizontal strip of project screenshots; click any one to open it full size.
const ScreenGallery = ({ screens, isMobile = false }) => {
  const [open, setOpen] = useState(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir) => setOpen((i) => (i + dir + screens.length) % screens.length),
    [screens.length]
  );

  return (
    <>
      <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-thin">
        {screens.map((screen, i) => (
          <button
            key={screen.src}
            onClick={() => setOpen(i)}
            className={`group relative shrink-0 snap-start overflow-hidden rounded-xl border border-black-300 bg-black-200 text-left transition-all duration-300 hover:border-white/20 hover:-translate-y-1 ${
              isMobile ? "w-36 sm:w-40" : "w-72 sm:w-80"
            }`}
          >
            <img
              src={screen.src}
              alt={screen.caption}
              loading="lazy"
              className={`w-full object-cover object-top ${
                isMobile ? "aspect-[9/19.5]" : "aspect-[16/10]"
              }`}
            />
            {!isMobile && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            )}
            <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/60 backdrop-blur flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 size={14} />
            </div>
            <p
              className={`text-xs sm:text-sm text-white-800 font-medium leading-snug ${
                isMobile
                  ? "px-2.5 py-2.5 border-t border-black-300 min-h-[4.25rem]"
                  : "absolute bottom-0 left-0 right-0 p-3"
              }`}
            >
              {screen.caption}
            </p>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <Lightbox
            screens={screens}
            index={open}
            isMobile={isMobile}
            onClose={close}
            onStep={step}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ScreenGallery;

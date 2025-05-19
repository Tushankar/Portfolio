import React from "react";
import { motion } from "framer-motion";

const BeveledIcon = ({ src, alt, delay = 0, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="w-20 h-20 sm:w-24 sm:h-24 p-[6px]"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="bevel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff22" />
            <stop offset="100%" stopColor="#ffffff08" />
          </linearGradient>
        </defs>

        <polygon
          points="50,0 95,25 95,75 50,100 5,75 5,25"
          fill="url(#bevel)"
          stroke="#ffffff44"
          strokeWidth="2"
          rx="10"
        />
        <foreignObject
          x="20"
          y="20"
          width="60"
          height="60"
          className="flex items-center justify-center"
        >
          <motion.img
            src={src}
            alt={alt}
            title={title}
            className="w-full h-full object-contain"
            whileHover={{ scale: 1.2, rotate: 3 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </foreignObject>
      </svg>
    </motion.div>
  );
};

export default BeveledIcon;

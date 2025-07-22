"use client";

import { animate, hover } from "motion";
import { splitText } from "motion-plus";
import { useMotionValue } from "motion/react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";


export default function ScatterText({ text, onResetSound }) {
  const containerRef = useRef(null);
  const velocityX = useMotionValue(0);
  const velocityY = useMotionValue(0);
  const prevEvent = useRef(0);
  const charsRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const { chars } = splitText(containerRef.current.querySelector(".h1"));
    charsRef.current = chars;

    const handlePointerMove = (event) => {
      const now = performance.now();
      const timeSinceLastEvent = (now - prevEvent.current) / 1000;
      prevEvent.current = now;
      velocityX.set(event.movementX / timeSinceLastEvent);
      velocityY.set(event.movementY / timeSinceLastEvent);
    };

    document.addEventListener("pointermove", handlePointerMove);

    hover(chars, (element) => {
      const speed = Math.sqrt(
        velocityX.get() ** 2 + velocityY.get() ** 2
      );
      const angle = Math.atan2(velocityY.get(), velocityX.get());
      const distance = speed * 0.1;

      animate(
        element,
        {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        },
        { type: "spring", stiffness: 100, damping: 50 }
      );
    });

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  const resetText = () => {
    if (!charsRef.current) return;

    charsRef.current.forEach((char) => {
      animate(
        char,
        { x: 0, y: 0 },
        { duration: 0.4, easing: "ease-out" }
      );
    });

    // ✅ Play the reset sound if provided
    if (onResetSound) {
      onResetSound();
    }
  };
  return (
    <div className="flex justify-center">
      <div
        className="text-center flex flex-col items-center gap-6"
        ref={containerRef}
      >
        <h1 className="h1">{text}</h1>
  
        <motion.button
          onClick={resetText}
          whileHover={{
            scale: 1.04,
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(12px)",
          }}
          whileTap={{
            scale: 0.95,
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            border: "1px solid rgba(255, 255, 255, 0.4)",
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 22,
          }}
          className="px-6 py-3 mt-10 rounded-full text-white font-medium 
                     bg-white/5 border border-white/10 
                     backdrop-blur-lg transition-colors duration-300"
        >
          Reset
        </motion.button>
  
        <style>{`
          .split-char {
            will-change: transform, opacity;
            display: inline-block;
          }
        `}</style>
      </div>
    </div>
  );
}

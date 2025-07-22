import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const SIZE = 60;
const STROKE = 5;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const LiquidGlassCircularProgress = () => {
  const controls = useAnimation();
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      let scrollTop = window.scrollY;
      if (scrollTop < 0) scrollTop = 0; // clamp negative scrollY
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollableHeight = docHeight - winHeight;

      if (scrollableHeight <= 0) {
        setScrollPercent(0);
        controls.start({ strokeDashoffset: CIRCUMFERENCE });
        return;
      }

      let percent = scrollTop / scrollableHeight;
      percent = Math.min(Math.max(percent, 0), 1);
      setScrollPercent(percent);

      controls.start({ strokeDashoffset: CIRCUMFERENCE * (1 - percent) });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [controls]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 15,
        left: 15,
        width: SIZE,
        height: SIZE,
        borderRadius: "50%",
        cursor: "default",
        userSelect: "none",
        zIndex: 9999,
        background: "transparent",          // Make container fully transparent
        boxShadow: "none",                  // Remove any shadows
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        border: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={SIZE}
        height={SIZE}
        style={{ transform: "rotate(-90deg)" }}
      >
        {/* Background ring hidden by making stroke transparent */}
        <circle
          stroke="transparent"
          fill="transparent"
          strokeWidth={STROKE}
          r={RADIUS}
          cx={SIZE / 2}
          cy={SIZE / 2}
        />
        {/* Animated progress ring */}
        <motion.circle
          stroke="#c5f913"
          fill="transparent"
          strokeWidth={STROKE}
          strokeLinecap="round"
          r={RADIUS}
          cx={SIZE / 2}
          cy={SIZE / 2}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
          animate={controls}
          initial={{ strokeDashoffset: CIRCUMFERENCE }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
      </svg>
    </motion.div>
  );
};

export default LiquidGlassCircularProgress;

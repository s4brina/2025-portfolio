import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

const HoverCircle = ({ children, scrollRef }) => {
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const circleSize = 240;
  const radius = circleSize / 2;

  const handleMouseMove = (e) => {
    if (!scrollRef?.current) return;

    const container = scrollRef.current;
    const rect = container.getBoundingClientRect();

    // Get mouse pos relative to container accounting for Locomotive Scroll transform
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      style={{ position: "relative" }}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="hover-circle"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: circleSize,
              height: circleSize,
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              pointerEvents: "none",
              x: springX,
              y: springY,
            }}
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: circleSize,
                height: circleSize,
                transform: `translate(${-radius}px, ${-radius}px)`,
                pointerEvents: "none",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default HoverCircle;

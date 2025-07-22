import React, { useRef, useEffect, useState } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";

export default function TextScroll({ children, className }) {
  const ref = useRef(null);
  const scrollY = useMotionValue(0);
  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const scrollPosition = window.scrollY;
      scrollY.set(scrollPosition);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    const updateBounds = () => {
      const rect = el.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
      setElementHeight(rect.height);
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateBounds);
    };
  }, [scrollY]);

  const progress = useTransform(scrollY, (value) => {
    const start = elementTop - window.innerHeight;
    const end = elementTop + elementHeight;
    return (value - start) / (end - start);
  });

  const x = useTransform(progress, [0, 1], ["-70%", "100%"]);
  const opacity = useTransform(progress, [0, 0.2], [0, 1]);

  return (
    <div ref={ref} className="relative my-[50vh]">
      <motion.p
        style={{ x, opacity }}
        className={`text-9xl text-white whitespace-nowrap ${className || ""}`}
      >
        {children}
      </motion.p>
    </div>
  );
}

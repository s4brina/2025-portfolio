import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp } from "lucide-react"; // Or use any arrow icon you like

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.5 }}
  transition={{ duration: 0.3 }}
  onClick={scrollToTop}
  className="fixed bottom-6 right-6 z-50 backdrop-blur-lg bg-white/10 border border-white/30 shadow-xl text-white p-4 rounded-full cursor-pointer"
  style={{
    WebkitBackdropFilter: "blur(15px)",
    backdropFilter: "blur(15px)",
  }}
>
  <ChevronUp size={24} />
</motion.button>

      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;

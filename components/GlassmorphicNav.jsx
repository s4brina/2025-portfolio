import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShow(true);
      } else if (currentScrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 left-1/2 z-50 -translate-x-1/2 backdrop-blur-xl bg-white/10 rounded-4xl border border-white/25 shadow-lg"
          style={{
            WebkitBackdropFilter: "blur(20px) saturate(150%)",
            backdropFilter: "blur(20px) saturate(150%)",
          }}
        >
          <div className="max-w-1xl mx-auto px-6 py-2 flex justify-center items-center">
            <Link
              to="/"
              className="text-white text-m tracking-wide hover:text-gray-300 transition"
            >
              Home
            </Link>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;

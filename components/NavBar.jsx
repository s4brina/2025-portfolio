import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import MusicPlayer from "../components/MusicPlayer"; // Adjust path if needed

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const resumeUrl =
  "https://raw.githubusercontent.com/s4brina/SabrinaDraganiResume/99c87905bfe39e08701af9efa030177a87b22be3/Sabrina%20Dragani%20Resume.pdf";

const Navbar = ({ scroll }) => {
  const handleClick = (href, e) => {
    e.preventDefault();

    if (scroll) {
      scroll.scrollTo(document.querySelector(href), {
        offset: 0,
        duration: 1000,
        easing: [0.25, 0.0, 0.35, 1.0],
      });
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50
                 w-full px-6 py-0
                 flex justify-between items-center
                 text-white"
    >
      <div className="text-xl font-semibold tracking-tight text-white/90">
      <img
  src="https://i.imgur.com/pg77nDj.png"
  alt="Logo"
  className=" w-30 h-auto"
/>

      </div>

      <div className="flex gap-4 text-sm font-medium items-center">
        {links.map(({ label, href }) => (
          <motion.a
            key={label}
            href={href}
            onClick={(e) => handleClick(href, e)}
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
            className="px-6 py-2 rounded-full
                       bg-white/5 border border-white/10
                       backdrop-blur-lg
                       cursor-pointer select-none
                       text-white transition-colors duration-300"
          >
            {label}
          </motion.a>
        ))}

        {/* Resume Button */}
        <motion.a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
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
          className="px-6 py-2 rounded-full
                     bg-white/5 border border-white/10
                     backdrop-blur-lg
                     cursor-pointer select-none
                     text-white transition-colors duration-300
                     flex items-center gap-2"
        >
          Resume
          <Download size={16} />
        </motion.a>

        {/* Music Button */}
        <div className="ml-2">
          <MusicPlayer inline />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

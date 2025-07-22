import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const StickyFooter = () => {
  return (
    <section
      id="contact"
      className="w-full h-[90vh] bg-white text-black shadow-2xl px-10 py-14 flex flex-col justify-between"
    >
      <div className="text-left">
        <h1 className="text-6xl pt-26 md:text-7xl mb-8">LET'S WORK TOGETHER 🤝</h1>
        <p className="text-lg text-gray-600">
          I’m always open to exciting new projects and collaborations.
        </p>
      </div>

      <div className="flex justify-left gap-8 mt-10">
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="mailto:sabrina@email.com">
          <FaEnvelope size={30} />
        </a>
      </div>

      <div className="text-right text-sm text-gray-500 mt-10">
        <p>© {new Date().getFullYear()} - Made with 💜 by Sabrina with React!</p>
      </div>
    </section>
  );
};

export default StickyFooter;

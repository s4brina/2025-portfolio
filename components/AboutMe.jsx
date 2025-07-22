import React from "react";
import { easeInOut, motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.section
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3}}
      whileHover={{ scale: 1.01 }}
      style={{
        maxWidth: 900,
        margin: "3rem auto",
        padding: "3rem 4rem",
        borderRadius: 40,
        background: "rgba(255, 255, 255, 0.05)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        color: "#fff",
        userSelect: "none",
        cursor: "default",
      }}
    >
      <h2
        style={{
          fontWeight: "700",
          fontSize: "2rem",
          marginBottom: "1.5rem",
          letterSpacing: "0.5px",
          textShadow: "0 2px 6px rgba(0,0,0,0.3)",
        }}
      >
        A bit about me
      </h2>
      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: 1.75,
          maxWidth: "100%",
          textShadow: "0 1px 3px rgba(0,0,0,0.2)",
        }}
      >
        Hi! I’m <strong>Sabrina</strong>, a passionate front-end developer and designer
        creating beautiful and fun interactive user experiences. I love working on different projects — I'm pretty much always in the middle of something new. Outside of coding, I enjoy
        exploring new tech, creating digital art, getting out into nature & riding my motorbike! 
 Check out some of my projects below.
      </p>



    </motion.section>
  );
};

export default AboutMe;

import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const phrases = [
  "It is a long established fact",
  "that a reader will be distracted",
  "by the readable content of a page",
  "when looking at its layout.",
];

export default function MaskText() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-25%",
  });

  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0%",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  // Styles as JS objects:
  const styles = {
    body: {
      overflow: "hidden",
      marginBottom: "3rem",
      marginTop: "3rem",
      width: "100%",            // add this
    },
    lineMask: {
      overflow: "hidden",
      width: "100%",            // add this
    },
    phrase: {
      fontSize: "4rem",
      margin: "0rem 0",
      color: "white",
      width: "100%",            // add this if needed
    },
  };
  

  return (
    <div ref={ref} style={styles.body}>
      {phrases.map((phrase, index) => (
        <div key={index} style={styles.lineMask}>
          <motion.p
            custom={index}
            variants={animation}
            initial="initial"
            animate={inView ? "enter" : "initial"}
            style={styles.phrase}
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  );
}

import React, { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const TiltCircleCard = ({ src, alt }) => {
  const audioRef = useRef(null);

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <Tilt
      glareEnable
      glareMaxOpacity={0.35}
      glareColor="rgba(255,255,255,0.6)"
      glarePosition="all"
      glareBorderRadius="1.5rem"
      scale={1}
      transitionSpeed={1000}
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      onEnter={handleMouseEnter}
      className="w-[40vw] aspect-square mx-auto cursor-pointer rounded-3xl overflow-hidden"
    >
      <motion.div
        initial={{ clipPath: "inset(0% round 1.5rem)" }}
        whileHover={{
          clipPath: "inset(0% round 50%)",
          cursor: "none",
          scale: 1.1,
        }}
        transition={{
          type: "spring",
          stiffness: 140,
          damping: 15,
        }}
        className="w-full h-full relative"
        style={{ willChange: "clip-path, transform" }}
      >
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ pointerEvents: "none" }}
          draggable={false}
        />
        <audio ref={audioRef} src="/hover.mp3" preload="auto" />
      </motion.div>
    </Tilt>
  );
};

export default TiltCircleCard;

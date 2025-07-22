import React, { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const TiltCard = ({ title, description, delay = 0 }) => {
  const audioRef = useRef(null);

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      viewport={{ once: false, amount: 0.3 }}
      className="w-80 h-50"
    >
      <Tilt
        glareEnable
        glareMaxOpacity={0.35}
        glareColor="rgba(255,255,255,0.6)"
        glarePosition="all"
        glareBorderRadius="1.5rem"
        scale={1.03}
        transitionSpeed={1000}
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        onEnter={handleMouseEnter}
        className="relative rounded-3xl p-6 w-full h-full cursor-pointer
                   bg-gradient-to-br from-white/10 via-white/5 to-white/10
                   backdrop-blur-3xl border border-white/20
                   shadow-[inset_0_0_0.5px_rgba(255,255,255,0.2),0_30px_80px_rgba(0,0,0,0.35)]
                   flex flex-col justify-center items-center
                   transition-all duration-500 overflow-hidden"
      >
        {/* Hover Sound */}
        <audio ref={audioRef} src="/hover.mp3" preload="auto" />


        {/* Shine Overlay */}

        <h3 className="text-2xl font-semibold mb-3 text-white drop-shadow">
          {title}
        </h3>
        <p className="text-center text-white/80 leading-relaxed z-20">
          {description}
        </p>
      </Tilt>
    </motion.div>
  );
};

export default TiltCard;

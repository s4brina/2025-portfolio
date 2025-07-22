import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const DistortedImage = ({ src, alt }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (inView && !hasBeenInView) {
      setHasBeenInView(true);
    }
  }, [inView, hasBeenInView]);

  useEffect(() => {
    if (hasBeenInView) {
      controls.start({
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // flat rectangle
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      controls.start({
        clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)", // trapezoid bottom smaller
        scale: 1.05,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [hasBeenInView, controls]);

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      animate={controls}
      initial={{
        clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)",
        scale: 1,
      }}
      className="rounded-4xl shadow-lg object-cover w-full h-full"
      style={{ willChange: "clip-path, transform" }}
    />
  );
};

export default DistortedImage;

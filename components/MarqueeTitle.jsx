import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MarqueeTitle = ({
  text = "Y2KORE",
  images = [],
  directions = [],
  offsets = [],
}) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div
      ref={ref}
      className="relative w-full h-screen overflow-hidden bg-transparent text-white"
    >
      {images.map((img, i) => (
        <HorizontalSlide
          key={i}
          src={img}
          direction={directions[i] || "left"}
          left={offsets[i] || `${-20 * i}%`}
          top={`${10 + i * 17}%`} // vertical offset to avoid overlap
          progress={scrollYProgress}
          text={text}
        />
      ))}
    </div>
  );
};

const HorizontalSlide = ({ src, direction, left, top, progress, text }) => {
  const dir = direction === "left" ? -1 : 1;
  const x = useTransform(progress, [0, 1], [800 * dir, -450 * dir]);

  return (
    <motion.div
      style={{ x, left, top }}
      className="absolute flex gap-10 whitespace-nowrap"
    >
      {[...Array(3)].map((_, i) => (
        <Phrase key={i} src={src} text={text} />
      ))}
    </motion.div>
  );
};

const Phrase = ({ src, text }) => (
  <div className="flex items-center gap-6 px-6 min-w-max">
    <p className="text-[9vw] uppercase whitespace-nowrap">{text}</p>
    <div className="relative h-[7vw] w-[14vw] rounded-full overflow-hidden">
      <img
        src={src}
        alt="marquee"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  </div>
);

export default MarqueeTitle;

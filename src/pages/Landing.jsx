import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import ScatterText from "../../components/ScatterText";
import TiltCard from "../../components/TiltCards";

import Navbar from "../../components/NavBar";

import StaticGrainOverlay from "../../components/StaticGrainOverlay.jsx";

import { motion } from "framer-motion";

import { href, Link } from "react-router-dom";

import TextScroll from "../../components/TextScroll.jsx"

import StickyFooter from "../../components/StickyFooter";

import RippleImage from "../../components/RippleImage.jsx";
import AboutMe from "../../components/AboutMe.jsx";
import WebsiteLinks from "../../components/WebsiteLinks.jsx";


const rgbToCss = (rgb) => `rgb(${rgb.join(",")})`;

const gradientColors = [
  [10, 10, 30],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

function interpolateColors(colors, t) {
  if (t <= 0) return colors[0];
  if (t >= 1) return colors[colors.length - 1];

  const scaledT = t * (colors.length - 1);
  const idx = Math.floor(scaledT);
  const localT = scaledT - idx;

  const start = colors[idx];
  const end = colors[idx + 1];

  return start.map((startC, i) => Math.round(startC + (end[i] - startC) * localT));
}

const Landing = () => {
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const resetAudioRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    scrollInstance.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    scrollInstance.current.on("scroll", (args) => {
      const scrollY = args.scroll.y;
      const maxScroll = args.limit.y || 1000;
      const rawProgress = scrollY / maxScroll;
      const progress = Math.min(rawProgress * 1.5, 1);
      setScrollProgress(progress);
    });

    return () => {
      if (scrollInstance.current) scrollInstance.current.destroy();
    };
  }, []);

  const baseColor = interpolateColors(gradientColors, scrollProgress);
  const gradientCSS = `linear-gradient(135deg, 
    ${rgbToCss(baseColor)} 0%, 
    ${rgbToCss(interpolateColors(gradientColors, Math.min(scrollProgress + 0.3, 1)))} 40%, 
    ${rgbToCss(interpolateColors(gradientColors, Math.min(scrollProgress + 0.6, 1)))} 70%, 
    ${rgbToCss(interpolateColors(gradientColors, 1))} 100%)`;

  const playResetSound = () => {
    if (resetAudioRef.current) {
      resetAudioRef.current.currentTime = 0;
      resetAudioRef.current.play();
    }
  };

  

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="relative min-h-screen"
      style={{
        background: gradientCSS,
        position: "relative",
        overflowX: "hidden",
        transition: "background 0.5s ease",
      }}
    >
      
      
      <StaticGrainOverlay />
      <audio ref={resetAudioRef} src="/synth.mp3" preload="auto" />
      {/* Reset sound */}
      <audio ref={resetAudioRef} src="../click.mp3" preload="auto" />


      
<section className="w-9/10 mx-auto flex items-center gap-16 px-6">
<Navbar scroll={scrollInstance.current} />
<section
  data-scroll
  data-scroll-speed="1"
  className="min-h-screen flex items-center justify-center text-white px-6"
>
        <div className=" mx-auto flex items-center gap-16 px-6">
        <ScatterText
    text="Hi, I'm Sabrina. I specialise in interactive design."
    onResetSound={playResetSound}
    className="max-w-3xl text-center"
  />
         
         <div className="absolute inset-0 pointer-events-none">

          <img
        src="/3d-1.png"
        alt="Floating object 1"
        className="absolute top-[50px] left-[-0px] w-64 animate-float1"
      />
      {/* Top right */}
      <img
        src="/3d-2.png"
        alt="Floating object 2"
        className="absolute top-10 right-[-30px] w-20 animate-float2"
      />
      {/* Bottom left */}
      <img
        src="/3d-3.png"
        alt="Floating object 3"
        className="absolute bottom-10 left-[-20px] w-40 animate-float3"
      />
      {/* Bottom right */}
      <img
        src="/3d-4.png"
        alt="Floating object 4"
        className="absolute bottom-16 right-[-50px] w-16 animate-float1"
      />
      {/* Center right */}
      <img
        src="/3d-5.png"
        alt="Floating object 5"
        className="absolute top-1/2 right-[-60px] w-48 animate-float3 -translate-y-1/2"
      />
          </div>
        </div>
        
      </section>

      </section>
<section id="about" >
  <AboutMe />
</section>

      <section
        data-scroll
        data-scroll-speed="2"
        className="min-h-screen flex flex-col items-center justify-center text-white px-4 md:px-10"
      >
        <h2 className="text-3xl md:text-4xl mb-10 text-center px-2">My Skillset</h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-11 mb-10">
          <TiltCard title="UI/UX Design" description="Crafting beautiful and intuitive interfaces." delay={0.1} />
          <TiltCard title="Web Development" description="Building responsive and fast websites." delay={0.3} />
          <TiltCard title="Brand Identity" description="Creating compelling brand visuals." delay={0.5} />
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-11">
          <TiltCard title="Motion Design" description="Animating interfaces for user delight." delay={0.1} />
          <TiltCard title="Strategy" description="Solving problems with design thinking." delay={0.3} />
          <TiltCard title="Prototyping" description="Bringing ideas to life fast." delay={0.5} />
        </div>
      </section>

<section id="work"
  data-scroll
  className="min-h-screen flex items-center justify-center text-white relative px-4 py-20"
>


  <div className="grid grid-cols-2 gap-y-12 gap-x-8 justify-center items-center">
    {[
      {
        title: "TabLED",
        image:
          "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/8885528d-e8fb-46ea-8abc-d8848945902f_rw_3840.jpg?h=501b39d9145daf92b2828c10a5d034b2",
        link: "/tabled", // ✅ correct path
      },
      {
        title: "Y2KORE",
        image: "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/74b55d0c-eec9-4a43-960d-e155362ccccd_rw_1920.png?h=7b369915fbf1d4524f7da31080c00fc3",
        link: "/Y2kore",
      },
      {
        title: "EEK",
        image: "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/dcd46f8b-a2c4-4f07-b5d0-5c8e96885245_rw_1920.png?h=cb666c7cd649222066c790c1c24255f9",
        link: "/Eek",
      },
      {
        title: "Volcano Explorer",
        image: "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/e90eeb99-c609-4391-8db0-e957469997d4_rw_1920.png?h=2fb3e28e0816e3f13e7936a8ef4684b3",
        link: "/VolcanoExplorer",
      },
      {
        title: "Motion Graphics",
        image: "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/1067f286-f8c6-409b-9743-81553acdbadc_rwc_305x0x3358x2519x2560.png?h=c93604096bdc8e0238593bd8e870bd5d",
        link: "/MotionGraphics",
      },
    ].map(({ title, image, link }, i) => {
      const card = (
        <div
          key={i}
          className="w-[40vw] mx-auto flex flex-col items-center text-center"
        >
          
          <motion.div
            initial={{ clipPath: "inset(0% 0% 0% 0% round 5rem)" }}
            whileHover={{
              clipPath: "inset(0% 0% 0% 0% round 17rem)",
              cursor: "none",
            }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 15,
            }}
            className="aspect-square w-full overflow-hidden"
            style={{ willChange: "clip-path" }}
          >
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 15,
              }}
              style={{ willChange: "transform" }}
            />
          </motion.div>
          <p className="mt-4 text-xl md:text-2xl font-semibold text-white tracking-tight">
            {title}
          </p>
        </div>
      );

      

      return link ? (
        
        <Link key={i} to={link} className="block">
          {card}
        </Link>
      ) : (
        <div key={i}>{card}</div>
      );
    })}

  </div>

  
</section>
<section>

<WebsiteLinks />

</section>



<StickyFooter />
    </div>
    
  );
};


export default Landing;

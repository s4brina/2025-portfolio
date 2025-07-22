import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StoryText = ({ text }) => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = textRef.current.querySelectorAll(".word");

      gsap.fromTo(
        words,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          stagger: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        }
      );
    }, sectionRef);

    // Let layout settle before refreshing triggers
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 min-h-screen flex items-center justify-start px-12 text-white"
    >
      <p
        ref={textRef}
        className="text-5xl uppercase max-w-4xl leading-snug text-left"
      >
        {text.split(" ").map((word, idx) => (
          <span key={idx} className="word inline-block mr-2 opacity-0">
            {word}
          </span>
        ))}
      </p>
    </section>
  );
};

export default StoryText;

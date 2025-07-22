import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GAP = 0;

const HorizontalScroll = ({ images = [], texts = [] }) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const panels = container.querySelectorAll(".panel");

    let ctx = gsap.context(() => {
      const scrollTween = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "center center",
          end: () => `+=${container.scrollWidth}`,
          scrub: 0.4,
          pin: true,
          anticipatePin: 1,
          id: `scroll-${Math.random()}`,
        },
      });

      animationRef.current = scrollTween;

      panels.forEach((panel) => {
        const media = panel.querySelector("img, video");
        gsap.fromTo(
          media,
          { scale: 0.1 },
          {
            scale: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: panel,
              start: "left center",
              end: "center center",
              scrub: true,
              containerAnimation: scrollTween,
            },
          }
        );
      });
    }, container);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  }, [images]);

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: `${GAP}px`,
          padding: `0 ${GAP}px`,
          width: `calc(${images.length} * 100vw + ${(images.length - 1) * GAP}px)`,
          height: "100vh",
        }}
      >
        {images.map((src, i) => {
          const isVideo = src.endsWith(".mp4");
          return (
            <div
              key={i}
              className="panel"
              style={{
                position: "relative",
                flex: "0 0 100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              {isVideo ? (
                <video
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: "90vw",
                    height: "90vh",
                    objectFit: "cover",
                    borderRadius: "50px",
                    userSelect: "none",
                    transformOrigin: "center center",
                    scale: 0.5,
                  }}
                />
              ) : (
                <img
                  src={src}
                  alt={`Panel ${i + 1}`}
                  draggable={false}
                  style={{
                    width: "90vw",
                    height: "90vh",
                    objectFit: "cover",
                    borderRadius: "50px",
                    userSelect: "none",
                    transformOrigin: "center center",
                    scale: 0.5,
                  }}
                />
              )}
              {texts[i] && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "10%",
                    right: "8%",
                    width: "220px",
                    textAlign: "center",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    padding: "1rem",
                    borderRadius: "30px",
                    pointerEvents: "none",
                    userSelect: "none",
                    zIndex: 10,
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 4px 15px rgba(255, 255, 255, 0.05)",
                  }}
                >
                  {texts[i]}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HorizontalScroll;

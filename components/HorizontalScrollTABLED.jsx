import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/7b98ce8d-815a-4833-9719-5cdec0df64df_rw_1920.png?h=b930f3951afe7915b0717eb9f5701f04",
  "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/05e227d2-3e96-4d22-8dbb-5713d857feeb_rw_3840.jpg?h=cf541b60eb9fddf35d53c0fc98462234",
  "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/2a709091-89ac-46b4-bbfc-1372ccc51bb9_rw_1920.png?h=548bc0af1b8fa49eafed8e6683ffb274",
  "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/90bbe0a2-2d13-430b-b5e7-e2c77c1869be.png?h=86dd8d886265b837c3b18167f7a78fd5",
  "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/ccf7e9b4-0e81-4e01-b96c-2e18ac078921_rw_1200.png?h=0e1f46a4cffc199d5e324f05d301d6c5"
];

const texts = [
  " ",
  "The Landing Page",
  "Responsive",
  "More info on Image 4",
  "Last image description"
];

const GAP = 0; // px gap between images

const HorizontalScroll = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const panels = container.querySelectorAll(".panel");
    const scrollWidth = container.scrollWidth - window.innerWidth;

    // Main horizontal scroll animation
    let ctx = gsap.context(() => {
      gsap.to(panels, {
        xPercent: -110 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "center center",
          end: `+=${scrollWidth}`,
          scrub: 0.5,
          pin: true,
          anticipatePin: 0,
        },
      });

      // For each panel, animate scale from 0.8 to 1 as it comes into viewport
      panels.forEach((panel, i) => {
        const img = panel.querySelector("img");
        gsap.fromTo(
          img,
          { scale: 0.5 },
          {
            scale: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: ScrollTrigger.getById(container)?.animation, // if container pin animation exists
              start: "left center",
              end: "right center",
              scrub: true,
              // markers: true, // uncomment for debugging
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden", zIndex: 1 }}
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
        {images.map((src, i) => (
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
                scale: 0.5, // initial scale in case JS is slow to load
              }}
            />
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
        ))}
      </div>
    </section>
  );
};

export default HorizontalScroll;

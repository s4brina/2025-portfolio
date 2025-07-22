import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CursorLabel = ({ text, containerRef }) => {
  const labelRef = useRef(null);
  const isVisible = useRef(false);
  const lastMousePos = useRef({ x: null, y: null });

  // Helper to update label visibility and position based on coords
  const updateLabel = (x, y) => {
    const container = containerRef;
    if (!container || !labelRef.current) return;

    const rect = container.getBoundingClientRect();
    const inside = x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;

    if (inside) {
      if (!isVisible.current) {
        gsap.to(labelRef.current, { autoAlpha: 1, duration: 0.3, scale: 1.2 });
        isVisible.current = true;
      }
      gsap.to(labelRef.current, {
        x: x + 70, // shift 30px right of the cursor
        y: y - 30 ,
        ease: "power3.out",
        duration: 0.5,
        maxWidth: "250px",  // <-- add this
        lineHeight: 1.3,
      });
    } else if (isVisible.current) {
      gsap.to(labelRef.current, { autoAlpha: 0, duration: 0.3, scale: 0.5 });
      isVisible.current = false;
    }
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      lastMousePos.current = { x: e.clientX, y: e.clientY };
      updateLabel(e.clientX, e.clientY);
    };

    const onScrollOrResize = () => {
      const { x, y } = lastMousePos.current;
      if (x === null || y === null) return; // no mouse info yet
      updateLabel(x, y);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScrollOrResize);
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [containerRef]);

  return (
    <div
      ref={labelRef}
      style={{ opacity: 0, transform: "translate(0,0)" }}
      className="fixed top-0 left-0 z-50 pointer-events-none px-4 py-2 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/15 shadow-lg "
    >
      {text}
    </div>
  );
};

export default CursorLabel;

import React, { useRef, useEffect } from "react";

const StaticGrainOverlay = () => {
  const canvasRef = useRef(null);

  // Function to draw grain noise on the canvas
  const drawGrain = (ctx, width, height, dpr) => {
    ctx.setTransform(1, 0, 0, 1, 0, 0); // reset any existing transform
    ctx.scale(dpr, dpr);

    const idata = ctx.createImageData(width, height);
    const buffer32 = new Uint32Array(idata.data.buffer);
    const len = buffer32.length;

    for (let i = 0; i < len; i++) {
      if (Math.random() < 0.2) {
        // subtle noise pixel with low alpha (ARGB format in little endian)
        buffer32[i] = 0x44000000;
      }
    }

    ctx.putImageData(idata, 0, 0);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const dpr = window.devicePixelRatio || 1;

    // Initial setup and draw
    const setupCanvas = () => {
      const wWidth = window.innerWidth;
      const wHeight = window.innerHeight;

      canvas.width = wWidth * dpr;
      canvas.height = wHeight * dpr;

      canvas.style.width = `${wWidth}px`;
      canvas.style.height = `${wHeight}px`;

      drawGrain(ctx, wWidth, wHeight, dpr);
    };

    setupCanvas();

    // Redraw grain on resize
    const handleResize = () => {
      setupCanvas();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        mixBlendMode: "overlay",
        opacity: 0.1,
      }}
    />
  );
};

export default StaticGrainOverlay;

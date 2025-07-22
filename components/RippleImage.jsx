import React, { useEffect, useRef } from "react";
import hoverEffect from "hover-effect";
import distortion from "../components/ramen.jpg"; // needs to be a displacement map image

const RippleImage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    new hoverEffect({
      parent: containerRef.current,
      intensity: 0.3,
      image1: "/image1.jpg",
      image2: "/image2.jpg",
      displacementImage: distortion,
    });
  }, []);

  return <div ref={containerRef} className="w-[400px] h-[300px]" />;
};

export default RippleImage;

import React from "react";

interface ParallaxLayerProps {
  speed: number;
  children: React.ReactNode;
}

const ParallaxLayer: React.FC<ParallaxLayerProps> = ({ speed, children }) => {
  return (
    <div
      className="parallax-layer"
      style={{ transform: `translateY(${speed}px)` }}
    >
      {children}
    </div>
  );
};

export default ParallaxLayer;

import React from "react";
import Background from "./Background";
import LayerMountain from "../../public/background/layerMountain.webp";
import LayerThree from "../../public/background/layerThree.webp";
import LayerMachine from "../../public/background/layerMachine.webp";

const Parallax: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Layer */}
      <Background
        src={LayerMountain}
        alt="Background Mountain"
        width={1920}
        height={1080}
        quality={80}
        speed={5}
      />
      {/* First Parallax Layer */}
      <Background
        src={LayerThree}
        alt="Background Three"
        width={1920}
        height={1080}
        quality={80}
        speed={10} 
        className="absolute"
      />
      {/* Second Parallax Layer */}
      <Background
        src={LayerMachine}
        alt="Background Machine"
        width={1920}
        height={1080}
        quality={80}
        speed={15} 
        className="absolute"
      />
    </div>
  );
};

export default Parallax;

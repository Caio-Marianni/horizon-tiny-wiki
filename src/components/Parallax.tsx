import React from "react";
import Background from "./Background";
import Logo from "../../public/logo.png";
import LayerMountain from "../../public/background/layerMountain.webp";
import LayerThree from "../../public/background/layerThree.webp";
import LayerMachine from "../../public/background/layerMachine.webp";

const Parallax: React.FC = () => {
  return (
    <div className="relative min-h-[700px] md:min-h-screen">
      {/* Background Layer */}
      <Background
        src={LayerMountain}
        alt="Background Mountain"
        width={1920}
        height={1080}
        quality={80}
        speed={5}
        className="absolute top-0 left-0 object-cover h-full"
      />
      {/* First Parallax Layer */}
      <Background
        src={LayerThree}
        alt="Background Three"
        width={1920}
        height={1080}
        quality={80}
        speed={10}
        className="absolute bottom-0 lg:-bottom-40"
      />
      {/* Second Parallax Layer */}
      <Background
        src={LayerMachine}
        alt="Background Machine"
        width={1920}
        height={1080}
        quality={80}
        speed={15}
        className="absolute bottom-40 lg:bottom-5"
      />
      {/* Logo Layer */}
      <div className="flex justify-center items-center mx-10">
        <Background
          src={Logo}
          alt="Logo"
          width={500}
          height={500}
          quality={60}
          speed={20}
          className="relative top-20"
        />
      </div>
      {/* Scroll indicator */}
      <div className="absolute flex justify-center bottom-14 w-full">
        <div className="relative flex flex-col gap h-10 bottom-0 z-40">
          <div className="inline-block p-4 absolute top-0 rotate-45 border-b-2 border-r-2 border-[#ebff0d]"></div>
          <div className="inline-block p-4 absolute top-0 rotate-45 border-b-2 border-r-2 border-[#ebff0d] animate-arrow1"></div>
          <div className="inline-block p-4 absolute top-0 rotate-45 border-b-2 border-r-2 border-[#ebff0d] animate-arrow2"></div>
        </div>
      </div>
    </div>
  );
};

export default Parallax;

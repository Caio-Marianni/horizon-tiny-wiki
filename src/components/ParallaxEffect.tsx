import React from "react";
import Image from "next/image";
import layerSky from "../../public/layerSky.webp"
import layerAloy from "../../public/layerAloy.webp"
import layerMountain from "../../public/layerMountain.webp"
import layerTreeFirst from "../../public/layerTreeFirst.webp"
import layerTreeLast from "../../public/layerTreeLast.webp"
import layerMachines from "../../public/layerMachines.webp"

export default function ParallaxEffect() {
  return (
    <div className="relative w-screen h-screen border-2 border-green-500">
      <Image src={layerSky} alt="the Sky layer for parallax" className="absolute w-full h-auto z-10" />
      <Image src={layerAloy} alt="the Sky layer for parallax" className="absolute w-full h-auto" />
      <Image src={layerMountain} alt="the Sky layer for parallax" className="absolute w-full h-auto" />
      <Image src={layerTreeFirst} alt="the Sky layer for parallax" className="absolute w-full h-auto" />
      <Image src={layerTreeLast} alt="the Sky layer for parallax" className="absolute w-full h-auto" />
      <Image src={layerMachines} alt="the Sky layer for parallax" className="absolute w-full h-auto" />
    </div>
  );
}
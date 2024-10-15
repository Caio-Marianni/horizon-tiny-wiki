"use client";
import { useEffect, useRef } from "react";
import LayerLogo from "../../public/logo.png";
import LazyImage from "@/core/utils/LazyImage";
import LayerMountain from "../../public/background/layerMountain.webp";
import LayerThree from "../../public/background/layerThree.webp";
import LayerMachine from "../../public/background/layerMachine.webp";

export default function ParallaxEffect() {
  // References for DOM elements
  const mountainRef = useRef<HTMLImageElement | null>(null);
  const threeRef = useRef<HTMLImageElement | null>(null);
  const machineRef = useRef<HTMLImageElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offsetY = window.scrollY;

      // Adjust the transform for each layer
      if (mountainRef.current) {
        mountainRef.current.style.transform = `translateY(${offsetY * 0.2}px)`;
      }
      if (threeRef.current) {
        threeRef.current.style.transform = `translateY(${offsetY * 0.3}px)`;
      }
      if (machineRef.current) {
        machineRef.current.style.transform = `translateY(${offsetY * 0.5}px)`;
      }
      if (logoRef.current) {
        logoRef.current.style.transform = `translateY(${offsetY * 8}px)`;
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div ref={mountainRef}>
        <LazyImage
          src={LayerMountain}
          alt="Mountain Layer"
          width={1920}
          height={1080}
          quality={60}
          placeholder="blur"
          className="absolute transition-transform duration-500 ease-out z-10"
        />
      </div>
      <div ref={threeRef}>
        {/* Three Layer */}
        <LazyImage
          src={LayerThree}
          alt="Three Layer"
          width={1920}
          height={1080}
          quality={70}
          placeholder="blur"
          className="absolute transition-transform duration-500 ease-out z-20"
        />
      </div>
      <div ref={machineRef}>
        {/* Machine Layer */}
        <LazyImage
          src={LayerMachine}
          alt="Machine Layer"
          width={1920}
          height={1080}
          quality={80}
          placeholder="blur"
          className="absolute transition-transform duration-500 ease-out z-30"
        />
      </div>
      <div
        ref={logoRef}
        className="absolute w-full h-auto object-center transition-transform duration-1000 ease-in-out z-40"
      >
        <LazyImage
          src={LayerLogo}
          alt="Logo"
          width={350}
          height={250}
          quality={60}
          placeholder="blur"
          className="w-[400px] m-auto transition-all duration-100 translate-y-40"
        />
      </div>
    </div>
  );
}

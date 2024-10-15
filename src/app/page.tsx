"use client";
import ParallaxEffect from "@/components/ParallaxEffect";
import MachinesDisplay from "@/components/MachinesDisplay";
import WeaponsDisplay from "@/components/WeaponsDisplay";
import Image from "next/image";
import ArsenalBg from "../../public/background/arsenalBackground.webp";

export default function Home() {
  return (
    <div className="flex flex-col scroll-smooth">
      <div className="h-screen">
        <ParallaxEffect />
      </div>
      {/* Blur to change section */}
      <div className="w-full h-40 -translate-y-5 backdrop-blur-[5px] bg-transparent z-20"></div>
      {/* Background */}
      <Image
        src={ArsenalBg}
        alt="Arsenal background"
        width={1920}
        height={1080}
        quality={60}
        priority
        placeholder="blur"
        className="fixed object-cover top-0 left-0 w-full h-full pointer-events-none -z-50"
      />
      {/* Main Content */}
      <div>
        <WeaponsDisplay />
        {/* Border */}
        <div className="pt-20 m-auto w-[95%] lg:w-[85%] border-b-[1px] opacity-10"></div>
        <MachinesDisplay />
      </div>
      {/* Footer */}
      <footer className="bg-black w-full py-2 text-white text-center">
        site desenvolvido por {" "}
        <a
          href="https://caio-marianni-portfolio.vercel.app"
          className="text-red-600"
        >
          mim
        </a>
      </footer>
    </div>
  );
}

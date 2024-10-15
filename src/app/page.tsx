"use client";
import Parallax from "@/components/Parallax";
import MachinesDisplay from "@/components/MachinesDisplay";
import WeaponsDisplay from "@/components/WeaponsDisplay";
import ArsenalBg from "../../public/background/arsenalBackground.webp";
import Background from "@/components/Background";

export default function Home() {
  return (
    <div>
      <div className="overflow-hidden">
      <Parallax />
      </div>
      {/* Blur to change section */}
      <div className="w-full h-40 -translate-y-5 backdrop-blur-[5px] bg-transparent z-20"></div>
      <Background
        src={ArsenalBg}
        alt="Arsenal background"
        width={1920}
        height={1080}
        quality={80}
        speed={0}
        placeholder="blur"
        className="fixed -z-50"
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
        site desenvolvido por{" "}
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

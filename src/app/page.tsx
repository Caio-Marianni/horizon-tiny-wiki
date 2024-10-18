"use client";
import dynamic from "next/dynamic";
import ReadMe from "@/components/ReadMe";
import ArsenalBg from "../../public/background/arsenalBackground.webp";
import Background from "@/components/Background";
import Parallax from "@/components/Parallax";
import WeaponsDisplay from "@/components/WeaponsDisplay";
import MachinesDisplay from "@/components/MachinesDisplay";

// Lazy loading para componentes pesados
const ScrollRevealComponent = dynamic(() => import('@/core/utils/ScrollRevealComponent'), { ssr: false });

export default function Home() {
  return (
    <div>
      {/* Inclui ScrollRevealComponent */}
      <ScrollRevealComponent />

      {/* Parallax Section */}
      <div className="overflow-hidden">
        <Parallax />
      </div>

      {/* Blur to change section */}
      <div className="w-full h-40 -translate-y-5 backdrop-blur-[5px] bg-transparent z-20"></div>

      {/* Background Image (sem prioridade) */}
      <Background
        src={ArsenalBg}
        alt="Arsenal background"
        width={1920}
        height={1080}
        quality={80}
        speed={0}
        placeholder="blur"
        className="fixed object-cover h-full top-0 left-0 -z-50"
      />

      {/* Main Content */}
      <div>
        <ReadMe />

        {/* Border */}
        <div className="pt-20 m-auto w-[95%] lg:w-[85%] border-b-[1px] opacity-10"></div>

        {/* Weapons Display (Lazy Loading) */}
        <div className="reveal">
          <WeaponsDisplay />
        </div>

        {/* Border */}
        <div className="pt-20 m-auto w-[95%] lg:w-[85%] border-b-[1px] opacity-10"></div>

        {/* Machines Display (Lazy Loading) */}
        <div className="reveal">
          <MachinesDisplay />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black w-full py-2 text-white text-center">
        site desenvolvido por{" "}
        <a href="https://caio-marianni-portfolio.vercel.app" className="text-[#00FFFF] underline">
          mim
        </a>
      </footer>
    </div>
  );
}

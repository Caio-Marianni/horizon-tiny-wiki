"use client";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Parallax from "@/components/Parallax";
import MachinesDisplay from "@/components/MachinesDisplay";
import WeaponsDisplay from "@/components/WeaponsDisplay";
import ArsenalBg from "../../public/background/arsenalBackground.webp";
import Background from "@/components/Background";
import ReadMe from "@/components/ReadMe";

export default function Home() {
  useEffect(() => {
    // Inicializar o ScrollReveal com opções globais
    ScrollReveal().reveal(".reveal", {
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
      origin: "bottom",
      reset: true, // Você pode ativar isso se quiser que a animação aconteça toda vez que o usuário fizer scroll
    });
  }, []);

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
        className="fixed object-cover h-full top-0 left-0 -z-50"
      />
      {/* Main Content */}
      <div>
        <ReadMe />
        {/* Border */}
        <div className="pt-20 m-auto w-[95%] lg:w-[85%] border-b-[1px] opacity-10"></div>
        
        <div className="reveal">
          <WeaponsDisplay />
        </div>

        {/* Border */}
        <div className="pt-20 m-auto w-[95%] lg:w-[85%] border-b-[1px] opacity-10"></div>

        <div className="reveal">
          <MachinesDisplay />
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-black w-full py-2 text-white text-center">
        site desenvolvido por{" "}
        <a
          href="https://caio-marianni-portfolio.vercel.app"
          className="text-cyan-500"
        >
          mim
        </a>
      </footer>
    </div>
  );
}

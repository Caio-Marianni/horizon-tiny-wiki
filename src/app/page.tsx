// "use client";
// import Parallax from "@/components/Parallax";
// import MachinesDisplay from "@/components/MachinesDisplay";
// import WeaponsDisplay from "@/components/WeaponsDisplay";
// import ArsenalBg from "../../public/background/arsenalBackground.webp";
// import Background from "@/components/Background";

// export default function Home() {
//   return (
//     <div>
//       <div className="overflow-hidden">
//       <Parallax />
//       </div>
//       {/* Blur to change section */}
//       <div className="w-full h-40 -translate-y-5 backdrop-blur-[5px] bg-transparent z-20"></div>
//       <Background
//         src={ArsenalBg}
//         alt="Arsenal background"
//         width={1920}
//         height={1080}
//         quality={80}
//         speed={0}
//         placeholder="blur"
//         className="fixed object-cover h-full top-0 left-0 -z-50"
//       />
//       {/* Main Content */}
//       <div>
//         <WeaponsDisplay />
//         {/* Border */}
//         <div className="pt-20 m-auto w-[95%] lg:w-[85%] border-b-[1px] opacity-10"></div>
//         <MachinesDisplay />
//       </div>
//       {/* Footer */}
//       <footer className="bg-black w-full py-2 text-white text-center">
//         site desenvolvido por{" "}
//         <a
//           href="https://caio-marianni-portfolio.vercel.app"
//           className="text-cyan-600"
//         >
//           mim
//         </a>
//       </footer>
//     </div>
//   );
// }

// ULTIMA VERSAO DO CODIGO QUE EU ESTAVA UTILZANDO
"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Parallax from "@/components/Parallax";
import MachinesDisplay from "@/components/MachinesDisplay";
import WeaponsDisplay from "@/components/WeaponsDisplay";
import ReadMe from "@/components/ReadMe";
import ArsenalBg from "../../public/background/arsenalBackground.webp";
import ScrollRevealComponent from "@/core/utils/ScrollRevealComponent";

// Importa dinamicamente o componente Background (sem SSR)
const Background = dynamic(() => import("@/components/Background"), { ssr: false });

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

      {/* Background Image */}
      <Image
        src={ArsenalBg}
        alt="Arsenal background"
        width={1920}
        height={1080}
        quality={80}
        placeholder="blur"
        className="fixed object-cover h-full top-0 left-0 -z-50"
      />

      {/* Main Content */}
      <div>
        <ReadMe />

        {/* Border */}
        <div className="pt-20 m-auto w-[95%] lg:w-[85%] border-b-[1px] opacity-10"></div>

        {/* Weapons Display */}
        <div className="reveal">
          <WeaponsDisplay />
        </div>

        {/* Border */}
        <div className="pt-20 m-auto w-[95%] lg:w-[85%] border-b-[1px] opacity-10"></div>

        {/* Machines Display */}
        <div className="reveal">
          <MachinesDisplay />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black w-full py-2 text-white text-center">
        site desenvolvido por{" "}
        <a href="https://caio-marianni-portfolio.vercel.app" className="text-[#EFBF04]">
          mim
        </a>
      </footer>
    </div>
  );
}

// import ParallaxEffect from "@/components/ParallaxEffect";
import MachineDisplay from "@/components/MachinesDisplay";
import WeaponsDisplay from "@/components/WeaponsDisplay";

export default function Home() {
  return (
    <div className="flex flex-col scroll-smooth">
      {/* <div className="h-screen">
        <ParallaxEffect />
      </div> */}
      {/* Blur to change section */}
      <div className="absolute -translate-y-10 w-full h-20 backdrop-blur-[5px] bg-transparent"></div>
      <div>
        <WeaponsDisplay />
      </div>
      <div>
        <MachineDisplay />
      </div>
    </div>
  );
}

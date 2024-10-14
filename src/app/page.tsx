import ArsenalDisplay from "@/components/ArsenalDisplay";
import MachineDisplay from "@/components/MachineDisplay";
import ParallaxEffect from "@/components/ParallaxEffect";

export default function Home() {
  return (
    <div className="flex flex-col scroll-smooth">
      {/* <div className="h-screen">
        <ParallaxEffect />
      </div> */}
      <div>
        <ArsenalDisplay />
      </div>
      <div>
        {/* <MachineDisplay /> */}
      </div>
    </div>
  );
}

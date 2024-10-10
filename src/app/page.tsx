import ArsenalDisplay from "@/components/ArsenalDisplay";
import ParallaxEffect from "@/components/ParallaxEffect";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="h-screen">
        <ParallaxEffect />
      </div>
      <div className="h-screen">
        <ArsenalDisplay />
      </div>
    </div>
  );
}

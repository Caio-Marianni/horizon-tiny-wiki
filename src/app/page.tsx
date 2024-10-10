import ArsenalDisplay from "@/components/ArsenalDisplay";
import ParallaxEffect from "@/components/ParallaxEffect";


export default function Home() {
  return (
    <div className="">
      <ParallaxEffect />
      <ArsenalDisplay />
      <div className="h-[1000px]"></div>
    </div>
  );
}

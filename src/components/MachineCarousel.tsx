import React from "react";
import { Machine } from "@/core/types";
import LazyImage from "@/core/utils/LazyImage";

interface MachineCarouselProps {
  machines: Machine[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

export default function MachineCarousel({
  machines,
  selectedValue,
  setSelectedValue,
}: MachineCarouselProps) {
  return (
    <div className="reveal flex flex-col md:flex-row items-center justify-center flex-wrap gap-y-8 md:gap-10 font-robotoCondensed">
      {machines.map((machine) => (
        <label
          key={machine.id}
          className={`flex flex-col justify-center w-full md:w-[45%] lg:w-[30%] h-auto min-h-[180px] cursor-pointer rounded-md border-[1px] bg-transparent bg-[linear-gradient(160deg,rgba(18,15,12,0.8),rgba(251,102,37,0.4))] transition-all duration-1000 ${
            selectedValue === machine.id.toString()
              ? "opacity-100 blur-[0px] md:-translate-y-6 shadow-xl shadow-[rgba(0,0,0,.3)]"
              : "opacity-60 blur-[2px] border-transparent"
          }`}
          style={{
            borderColor:
              selectedValue === machine.id.toString()
                ? "#000000"
                : "transparent",
          }}
        >
          <input
            id={`machine-${machine.id}`}
            type="radio"
            name="machine"
            value={machine.id.toString()}
            checked={selectedValue === machine.id.toString()}
            onChange={() => setSelectedValue(machine.id.toString())}
            className="peer hidden"
          />
          <header className="flex justify-start items-center gap-2">
            <LazyImage
              src={machine.icon}
              alt={machine.nome}
              width={75}
              height={75}
              quality={80}
              loading="lazy"
              className={`pointer-events-none transition-transform duration-500 ease-in-out ${
                selectedValue === machine.id.toString()
                  ? "scale-150"
                  : "scale-100"
              }`}
            />
            <div className="font-bold text-white p-2">{machine.nome}</div>
          </header>
          <div className="px-4 pb-4 pt-2 font-bold text-white text-sm opacity-60">
            "{machine.shortDescription}"
          </div>
        </label>
      ))}
    </div>
  );
}

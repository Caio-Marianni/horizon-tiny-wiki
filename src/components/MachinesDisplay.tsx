"use client";
import React, { useState, useMemo } from "react";
import LazyImage from "@/core/utils/LazyImage";
import { machines } from "@/core/constants";
import MachineDetails from "./MachineDetails";
import MachineCarousel from "./MachineCarousel";

export default function ArsenalDisplay() {
  const [selectedValue, setSelectedValue] = useState<string>(
    machines[0].id.toString()
  );

  const selectedMachine = useMemo(
    () => machines.find((machine) => machine.id.toString() === selectedValue),
    [selectedValue]
  );

  return (
    <div className="relative flex flex-col justify-center align-middle gap-10 md:gap-20 md:container p-10 mb-10">
      {/* Content */}
      <div className="flex gap-10 min-h-[700px] md:min-h-[600px]">
        {/* Details */}
        <div className="flex flex-col justify-center w-full lg:w-4/6">
          <h2 className="text-gray-500 text-lg font-semibold">Machines</h2>
          <MachineDetails selectedMachine={selectedMachine} />
        </div>
        {/* Image */}
        <div className="hidden lg:flex md:items-center md:justify-center w-4/6">
          {selectedMachine && (
            <LazyImage
              key={selectedMachine.imagem}
              src={selectedMachine.imagem}
              alt={selectedMachine.nome}
              width={720}
              height={860}
              quality={80}
              loading="lazy"
              placeholder="blur"
              blurDataURL={selectedMachine.imagem}
              className="pointer-events-none"
            />
          )}
        </div>
      </div>
      {/* Carousel thumb */}
      <MachineCarousel
        machines={machines}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
    </div>
  );
}

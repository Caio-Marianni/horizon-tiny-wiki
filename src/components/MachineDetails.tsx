import React from "react";
import LazyImage from "@/core/utils/LazyImage";
import { StaticImageData } from "next/image";
import { Machine } from "@/core/types";

interface MachineDetailsProps {
  selectedMachine: Machine | null | any;
}

export default function MachineDetails({
  selectedMachine,
}: MachineDetailsProps) {
  if (!selectedMachine) return null;

  return (
    <div className="flex flex-col gap-2 mt-2 font-robotoCondensed" key={selectedMachine.id}>
      {/* Name and tags */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        <h3 className="text-4xl font-bold text-white">
          {selectedMachine.nome}
        </h3>
        <div className="flex gap-2">
          <div
            className="mt-2 px-3 border-[1px] text-sm text-white rounded-full"
            style={{
              borderColor: selectedMachine.type.includes("Terrestrial")
                ? "#4CAF50"
                : "#FF5722",
            }}
          >
            {selectedMachine.type}
          </div>
          <div className="mt-2 px-3 border-[1px] text-sm text-white rounded-full">
            {selectedMachine.size}
          </div>
        </div>
      </div>
      {/* Description */}
      <p className="mt-2 text-white opacity-60 text-sm font-normal">
        {selectedMachine.longDescription}
      </p>
      {/* Icons */}
      <div className="flex items-center justify-start gap-10">
        {/* Resistance */}
        <div className="flex flex-col gap-2 text-center">
          <strong className="text-white">Resistance</strong>
          <div className="flex gap-2">
            {selectedMachine.resistance.map(
              (
                resistance: string | StaticImageData,
                index: React.Key | null | undefined
              ) => (
                <LazyImage
                  src={resistance}
                  alt={`Element ${index}`}
                  key={index}
                  width={30}
                  height={30}
                  quality={60}
                  loading="lazy"
                />
              )
            )}
          </div>
        </div>
        {/* Weakness */}
        <div className="flex flex-col gap-2 text-center">
          <strong className="text-white">Weakness</strong>
          <div className="flex gap-2">
            {selectedMachine.weakness.map(
              (
                weakness: string | StaticImageData,
                index: React.Key | null | undefined
              ) => (
                <LazyImage
                  src={weakness}
                  alt={`Element ${index}`}
                  key={index}
                  width={30}
                  height={30}
                  quality={80}
                  loading="lazy"
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

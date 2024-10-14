"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import MachineBg from "../../public/background/machineBackground.webp";
import MachinePlataform from "../../public/background/machinePlataform.webp";
import { machines } from "@/core/constants";

export default function MachineDisplay() {
  const [selectedValue, setSelectedValue] = useState<string>(machines[0].id.toString());
  const [expanded, setExpanded] = useState<boolean>(false);

  const selectedMachine = useMemo(() => machines.find((machine) => machine.id.toString() === selectedValue), [selectedValue]);

  return (
    <div className="relative h-full">
      {/* Blur to change section */}
      <div className="absolute -translate-y-10 w-full h-20 backdrop-blur-[5px] bg-transparent"></div>

      {/* Background */}
      <Image
        src={MachineBg}
        quality={60} 
        loading="lazy"
        unoptimized={true}
        placeholder="blur"
        alt="Machine background"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="absolute object-cover pointer-events-none w-full h-full"
      />

      {/* Main */}
      <div className="md:container flex flex-col md:flex-row gap-20 pt-60 w-full min-h-full">
        {/* Content/Display */}
        <div className="relative flex flex-col items-center md:items-start gap-5 md:w-1/2 z-10">
          <h2>Machines</h2>

          {/* Machine Card */}
          {machines.map((machine) => (
            <label
              key={machine.id}
              className="flex gap-4 py-2 px-4 w-3/4 md:w-full border-2 rounded-full bg-cyan-950 cursor-pointer transition-all duration-500"
              onClick={() => {
                setSelectedValue(machine.id.toString());
                setExpanded((prev) => selectedValue === machine.id.toString() ? !prev : true);
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
              {/* Icon */}
              <Image
                width={32}
                height={32}
                src={machine.icon}
                alt={machine.nome}
                className="pointer-events-none"
                loading="lazy"
              />
              {/* Name */}
              <div className="font-bold text-white">{machine.nome}</div>
              {/* Arrow Icon */}
              <div
                className={`right-0 transform transition-transform duration-500 ${
                  expanded && selectedValue === machine.id.toString() ? "rotate-180" : "rotate-0"
                }`}
              >
                ↓
              </div>
            </label>
          ))}

          {/* Expanded Information */}
          {expanded && selectedMachine && (
            <div className="mt-4 p-4 bg-cyan-950 rounded-lg shadow-lg">
              <h3 className="text-white font-bold">Weakness: {selectedMachine.weakness}</h3>
              <h3 className="text-white font-bold">Resistance: {selectedMachine.resistance}</h3>
              <p className="text-white mt-2">{selectedMachine.shortDescription}</p>
              <p className="text-white mt-2">{selectedMachine.longDescription}</p>
            </div>
          )}
        </div>

        {/* Image/Plataform */}
        <div className="relative flex flex-col justify-center items-center mb-40 w-10/12 md:w-1/2">
          {selectedMachine && (
            <div className="relative w-full z-10">
              <Image
                fill
                loading="lazy"
                src={selectedMachine.imagem}
                alt={selectedMachine.nome}
                className="pointer-events-none object-cover"
              />
            </div>
          )}

          {/* Plataform */}
          <Image
            className="absolute bottom-0"
            width={1000}
            height={350}
            loading="lazy"
            src={MachinePlataform}
            alt="Machine plataform"
          />
        </div>
      </div>
    </div>
  );
}

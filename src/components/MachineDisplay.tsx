"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import MachineBg from "../../public/background/machineBackground.webp";
import MachinePlataform from "../../public/background/machinePlataform.webp";
import { machines } from "@/core/constants";


export default function MachineDisplay() {
  const [selectedValue, setSelectedValue] = useState<string>(
    machines[0].id.toString()
  );

  // Memoiza o selectedMachine para evitar recalcular sempre
  const selectedMachine = useMemo(
    () => machines.find((machine) => machine.id.toString() === selectedValue),
    [selectedValue]
  );

  
  return (
    <div
      className="bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${MachineBg.src})` }}
    >
      {/* Blur to change section */}
      <div className="absolute -translate-y-10 w-full h-20 backdrop-blur-[5px] bg-transparent"></div>
      {/* Main */}
      <div className="md:container flex flex-col md:flex-row gap-20 pt-60 w-full min-h-screen">
        {/* Content/Display */}
        <div className="flex flex-col items-center md:items-start gap-5 md:w-1/2">
          <h2>Machines</h2>
          {/* Mahine Card */}
          {machines.map((machine) => (
            <label
              key={machine.id}
              className="flex gap-4 py-2 px-4 w-3/4 md:w-full border-2 rounded-full bg-cyan-950 cursor-pointer"
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
              <div className="right-0">\/</div>
            </label>
          ))}
        </div>
        {/* Image/Plataform */}
        <div className="relative flex flex-col justify-center items-center mb-40 w-10/12 md:w-1/2">
          {/* Machines */}
          {selectedMachine && (
            <div
              className="relative w-full z-10"
            >
              <Image
                priority
                fill
                src={selectedMachine.imagem}
                alt={selectedMachine.nome}
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="pointer-events-none object-cover"
              />
            </div>
          )}
          {/* Plataform */}
          <Image
            className="absolute -bottom-[60px] md:-bottom-[100px] lg:-bottom-[120px]"
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

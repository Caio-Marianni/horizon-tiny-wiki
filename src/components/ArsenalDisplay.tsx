"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import ArsenalBg from "../../public/background/arsenalBackground.webp";
import { weapons } from "@/core/constants";

export default function ArsenalDisplay() {
  const [selectedValue, setSelectedValue] = useState<string>(
    weapons[0].id.toString()
  );

  // Memoiza o selectedWeapon para evitar recalcular sempre
  const selectedWeapon = useMemo(
    () => weapons.find((weapon) => weapon.id.toString() === selectedValue),
    [selectedValue]
  );

  return (
    <div className="relative h-full">
      {/* Background Image */}
      <Image
        src={ArsenalBg}
        alt="Arsenal background"
        quality={60}
        loading="lazy"
        unoptimized={true}
        placeholder="blur"
        className="fixed object-cover top-0 left-0 w-full h-full pointer-events-none"
      />
      {/* Main Content */}
      <div className="relative flex flex-col justify-center align-middle gap-10 md:gap-20 md:container p-10 mb-10">
        {/* Info and image */}
        <div className="flex gap-10 min-h-[500px]">
          {/* Info */}
          <div className="flex flex-col justify-center w-full md:w-4/6">
            {/* Title */}
            <h2 className="text-gray-500 text-lg font-semibold">
              Weapons and Utilities
            </h2>
            {/* description */}
            {selectedWeapon && (
              <div className="flex flex-col gap-2 mt-2" key={selectedWeapon.id}>
                {/* Name / tag / rarity */}
                <div className="flex gap-4 items-center">
                  {/* Name */}
                  <h3 className="text-4xl font-bold text-white">
                    {selectedWeapon.nome}
                  </h3>
                  {/* Tag */}
                  <div
                    className="mt-2 px-3 border-[1px] text-sm text-[#e2e2e2] rounded-full"
                    style={{
                      borderColor: selectedWeapon.tagsType.includes("Ranged")
                        ? "#4CAF50"
                        : "#FF5722",
                    }}
                  >
                    {selectedWeapon.tagsType.join(" ")}
                  </div>
                  {/* Rarity */}
                  <div className="mt-2 px-3 border-[1px] text-sm rounded-full"
                  style={{
                    color: selectedWeapon.rarityColor,
                    borderColor: selectedWeapon.rarityColor,
                  }}>
                    {selectedWeapon.rarity}
                  </div>
                </div>
                {/* Description */}
                <p className="text-[#e2e2e2] text-sm font-normal">
                  {selectedWeapon.description}
                </p>
                {/* Elements */}
                <div className="mt-2">
                  <strong className="text-white">Elements:</strong>
                  <div className="flex gap-2">
                    {selectedWeapon.tagsElement.map((element, index) => (
                      <Image
                        src={element}
                        alt={`Element ${index}`}
                        key={index}
                        width={30}
                        height={30}
                        quality={60}
                        loading="lazy"
                        unoptimized={true}
                        placeholder="blur"
                        blurDataURL={selectedWeapon.imagem}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Image */}
          <div className="hidden md:flex md:items-center md:justify-center w-2/6">
            {selectedWeapon && (
              <Image
                key={selectedWeapon.imagem}
                src={selectedWeapon.imagem}
                alt={selectedWeapon.nome}
                width={720}
                height={860}
                quality={80}
                loading="lazy"
                unoptimized={true}
                placeholder="blur"
                blurDataURL={selectedWeapon.imagem}
                className="pointer-events-none"
              />
            )}
          </div>
        </div>
        {/* Thumb Carousel */}
        <div className="flex items-center justify-center flex-wrap gap-3 gap-y-6 md:gap-10">
          {/* Card */}
          {weapons.map((weapon) => (
            <label
              key={weapon.id}
              className={`flex flex-col justify-between w-28 md:w-40 h-[200px] md:h-[250px] cursor-pointer rounded-md border-[1px] bg-transparent bg-[linear-gradient(160deg,rgba(18,15,12,0.8),rgba(251,102,37,0.4))] transition-all duration-1000 ${
                selectedValue === weapon.id.toString()
                  ? "opacity-100 blur-[0px] md:-translate-y-6 shadow-xl shadow-[rgba(0,0,0,.3)]"
                  : "opacity-60 blur-[2px] border-transparent"
              }`}
              style={{
                borderColor:
                  selectedValue === weapon.id.toString()
                    ? weapon.rarityColor
                    : "transparent",
              }}
            >
              <input
                id={`weapon-${weapon.id}`}
                type="radio"
                name="weapon"
                value={weapon.id.toString()}
                checked={selectedValue === weapon.id.toString()}
                onChange={() => setSelectedValue(weapon.id.toString())}
                className="peer hidden"
              />
              <Image
                src={weapon.imagem}
                alt={weapon.nome}
                width={720}
                height={860}
                quality={20}
                loading="lazy"
                unoptimized={true}
                placeholder="blur"
                blurDataURL={weapon.imagem}
                className={`pointer-events-none transition-transform duration-500 ease-in-out ${
                  selectedValue === weapon.id.toString()
                    ? "rotate-[10deg] scale-125"
                    : "rotate-0 scale-100"
                }`}
              />
              <div className="font-bold text-white p-4">{weapon.nome}</div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

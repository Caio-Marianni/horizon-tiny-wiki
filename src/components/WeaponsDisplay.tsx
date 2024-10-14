"use client";
import React, { useState, useMemo } from "react";
import LazyImage from "@/core/utils/LazyImage";
import { weapons } from "@/core/constants";
import WeaponDetails from "./WeaponDetails";
import WeaponCarousel from "./WeaponCarousel";
import ArsenalBg from "../../public/background/arsenalBackground.webp";

export default function ArsenalDisplay() {
  const [selectedValue, setSelectedValue] = useState<string>(
    weapons[0].id.toString()
  );

  const selectedWeapon = useMemo(
    () => weapons.find((weapon) => weapon.id.toString() === selectedValue),
    [selectedValue]
  );

  return (
    <div className="relative h-full">
      {/* Background */}
      <LazyImage
        src={ArsenalBg}
        alt="Arsenal background"
        width={1920}
        height={1080}
        quality={60}
        loading="lazy"
        placeholder="blur"
        className="fixed object-cover top-0 left-0 w-full h-full pointer-events-none"
      />
      {/* Main */}
      <div className="relative flex flex-col justify-center align-middle gap-10 md:gap-20 md:container p-10 mb-10">
        {/* Content */}
        <div className="flex gap-10 min-h-[500px]">
          {/* Details */}
          <div className="flex flex-col justify-center w-full md:w-4/6">
            <h2 className="text-gray-500 text-lg font-semibold">
              Weapons and Utilities
            </h2>
            <WeaponDetails selectedWeapon={selectedWeapon} />
          </div>
          {/* Image */}
          <div className="hidden md:flex md:items-center md:justify-center w-2/6">
            {selectedWeapon && (
              <LazyImage
                key={selectedWeapon.imagem}
                src={selectedWeapon.imagem}
                alt={selectedWeapon.nome}
                width={720}
                height={860}
                quality={80}
                loading="lazy"
                placeholder="blur"
                blurDataURL={selectedWeapon.imagem}
                className="pointer-events-none"
              />
            )}
          </div>
        </div>
        {/* Carousel thumb */}
        <WeaponCarousel
          weapons={weapons}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      </div>
    </div>
  );
}

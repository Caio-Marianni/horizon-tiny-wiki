"use client";
import React, { useState } from "react";
import ArsenalBg from "../../public/arsenalBackground.webp";
import { weapons } from "@/core/constants"; // Importa a lista de armas

export default function ArsenalDisplay() {
  const [selectedValue, setSelectedValue] = useState<string>(
    weapons[0].id.toString()
  );

  const selectedWeapon = weapons.find(
    (weapon) => weapon.id.toString() === selectedValue
  );

  return (
    <div
      className="p-20 bg-cover bg-fixed bg-center min-h-screen"
      style={{ backgroundImage: `url(${ArsenalBg.src})` }}
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 pb-4 backdrop-blur-[20px] bg-transparent bg-[linear-gradient(160deg,rgba(18, 15, 12, 0.8),rgba(251, 102, 37, 0.5))] rounded-xl">
        {/* Title and Info/Elements */}
        <div className="flex flex-col p-4 pt-10">
          <h2 className="text-gray-500 font-semibold">Weapons and Utilities</h2>
          {selectedWeapon && (
            <div
              className={`transition-all duration-500 ease-in-out transform ${
                selectedValue ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              key={selectedWeapon.id} // Use the key to trigger the animation on change
            >
              <div className="flex gap-4 items-center">
                <h3 className="py-2 text-4xl font-bold text-white">
                  {selectedWeapon.nome}
                </h3>
                <div
                  className="text-green-500 border-2 rounded-full px-4"
                  style={{
                    color: selectedWeapon.tagsType.includes("Ranged")
                      ? "#4CAF50"
                      : "#FF5722",
                    borderColor: selectedWeapon.tagsType.includes("Ranged")
                      ? "#4CAF50"
                      : "#FF5722",
                  }}
                >
                  {selectedWeapon.tagsType.join(" ")}
                </div>
              </div>
              <p className="text-[#ffffff] text-sm font-normal">
                {selectedWeapon.description}
              </p>

              <div className="mt-4">
                <strong className="text-white">Elements: </strong>
                <div className="flex space-x-2 ">
                  {selectedWeapon.tagsElement.map((element, index) => (
                    <img
                      key={index}
                      src={element}
                      alt={`Element ${index}`}
                      className="w-8 h-8 drop-shadow-xl"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Image */}
        <div className="hidden md:flex items-center justify-center">
          {selectedWeapon && (
            <div
              className={`transition-all duration-500 ease-in-out transform ${
                selectedValue ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              key={selectedWeapon.imagem} // Use the key to trigger the animation on image change
            >
              <img
                src={selectedWeapon.imagem}
                alt={selectedWeapon.nome}
                className="pointer-events-none min-w-[0px] max-w-[300px] min-h-[0px] max-h-[400px] shadow-white drop-shadow-2xl rounded-md transition-transform duration-500 ease-in-out"
              />
            </div>
          )}
        </div>

        {/* Thumb Carousel */}
        <div className="col-span-2 flex items-center justify-center flex-wrap gap-10 mt-10 md:mt-0">
          {weapons.map((weapon) => (
            <label
              key={weapon.id}
              className={`transition-all duration-1000 flex flex-col justify-between w-40 h-[250px] cursor-pointer rounded-md border-[2px] backdrop-blur-[10px] bg-transparent bg-[linear-gradient(160deg,rgba(18, 15, 12, 0.2),rgba(251, 102, 37, 0.5))] ${
                selectedValue === weapon.id.toString()
                  ? "-translate-y-6 opacity-100 shadow-xl shadow-[rgba(0,0,0,.3)]"
                  : "opacity-50 border-transparent"
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
              <img
                src={weapon.imagem}
                alt={weapon.nome}
                className={`pointer-events-none rounded-md transition-transform drop-shadow-2xl shadow-red-600 duration-500 ease-in-out ${
                  selectedValue === weapon.id.toString()
                    ? "rotate-[10deg] scale-125"
                    : "rotate-0 scale-100"
                }`}
              />
              <div className="px-4 overflow-hidden">
                <div className="font-bold text-white pb-1 mt-4">
                  {weapon.nome}
                </div>
                <div
                  className={`w-auto h-auto rounded-full transition-all duration-500 transform ${
                    selectedValue === weapon.id.toString()
                      ? "translate-y-6"
                      : "-translate-y-2"
                  }`}
                  style={{
                    color: `${weapon.rarityColor}`,
                    borderColor: `${weapon.rarityColor}`,
                  }}
                >
                  {weapon.rarity}
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

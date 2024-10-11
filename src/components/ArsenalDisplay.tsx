"use client";
import React, { useState } from "react";
import ArsenalBg from "../../public/arsenalBackground.webp";
import { weapons } from "@/core/constants"; // Importa a lista de armas

export default function ArsenalDisplay() {
  // Define o valor inicial como o ID da primeira arma (weapon.id = 1)
  const [selectedValue, setSelectedValue] = useState<string>(
    weapons[0].id.toString()
  );

  // Busca os dados da arma selecionada
  const selectedWeapon = weapons.find(
    (weapon) => weapon.id.toString() === selectedValue
  );

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${ArsenalBg.src})` }}
    >
      {/* Content Display Container */}
      <div className="container h-auto grid grid-cols-2 grid-rows-2 gap-4 bg-cover bg-center scroll-smooth">
        {/* Name / Description */}
        <div className="bg-white bg-opacity-30 flex flex-col items-center justify-center p-4">
          <h2>Weapons and Utilities</h2>
          {selectedWeapon ? (
            <div className="mt-4">
              <h3 className="text-2xl font-bold">{selectedWeapon.nome}</h3>
              <p className="mt-2">{selectedWeapon.description}</p>
              <div className="mt-2">
                <strong>Type: </strong>
                {selectedWeapon.tagsType.join(", ")}
              </div>
              <div className="mt-2">
                <strong>Elements: </strong>
                <div className="flex space-x-2 mt-2">
                  {selectedWeapon.tagsElement.map((element, index) => (
                    <img
                      key={index}
                      src={element}
                      alt={`Element ${index}`}
                      className="w-8 h-8"
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <p className="mt-4">Select a weapon to see the details</p>
          )}
        </div>

        {/* Image */}
        <div className="hidden md:flex items-center justify-center">
          {selectedWeapon ? (
            <div className="mt-4">
              <img
                src={selectedWeapon.imagem}
                alt={selectedWeapon.nome}
                className="w-96 h-auto shadow-white drop-shadow-2xl rounded-md"
              />
            </div>
          ) : (
            <p className="mt-4">Select a weapon to see the image</p>
          )}
        </div>

        {/* List Thumbnail */}
        <div className="col-span-2 flex items-center justify-center flex-wrap gap-10">
          {weapons.map((weapon) => (
            <label
              key={weapon.id}
              className={`transition-all duration-700 flex flex-col justify-between w-40 h-[250px] cursor-pointer rounded-md backdrop-blur-[10px] bg-transparent bg-[linear-gradient(160deg,rgba(18, 15, 12 0.2),rgba(251, 102, 37, .5)_)] ${
                selectedValue === weapon.id.toString()
                  ? "opacity-100"
                  : "opacity-20"
              }`}
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
                className={`rounded-md transition-transform duration-500 ease-in-out ${
                  selectedValue === weapon.id.toString()
                    ? "rotate-[10deg] scale-125"
                    : "rotate-0 scale-100"
                }`}
              />

              <div className="px-4 pb-2">
                <div className="font-bold">{weapon.nome}</div>
                <div className="text-sm text-gray-500">{weapon.tagsType}</div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

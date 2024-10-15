import React from 'react';
import { Weapon } from '@/core/types';
import LazyImage from '@/core/utils/LazyImage';

interface WeaponCarouselProps {
  weapons: Weapon[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

export default function WeaponCarousel({
  weapons,
  selectedValue,
  setSelectedValue,
}: WeaponCarouselProps) {
  return (
    <div className="flex items-center justify-center flex-wrap gap-3 gap-y-6 md:gap-10 font-robotoCondensed">
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
          <LazyImage
            src={weapon.imagem}
            alt={weapon.nome}
            width={250}
            height={250}
            quality={20}
            loading="lazy"
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
  );
}

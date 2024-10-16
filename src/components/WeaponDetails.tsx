import React from 'react';
import LazyImage from '@/core/utils/LazyImage';
import { StaticImageData } from 'next/image';
import { Weapon } from '@/core/types';

interface WeaponDetailsProps {
  selectedWeapon: Weapon | null | any;
}

export default function WeaponDetails({ selectedWeapon }: WeaponDetailsProps) {
  if (!selectedWeapon) return null;

  return (
    <div className="reveal flex flex-col gap-2 mt-2" key={selectedWeapon.id}>
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        <h3 className="text-4xl font-bold text-white font-robotoCondensed">{selectedWeapon.nome}</h3>
        <div className="flex gap-2">
          <div
            className="mt-2 px-3 border-[1px] text-sm text-white font-robotoCondensed rounded-full"
            style={{
              borderColor: selectedWeapon.tagsType.includes("Ranged")
                ? "#4CAF50"
                : "#FF5722",
            }}
          >
            {selectedWeapon.tagsType.join(" ")}
          </div>
          <div
            className="mt-2 px-3 border-[1px] text-sm text-white font-robotoCondensed rounded-full"
            style={{
              borderColor: selectedWeapon.rarityColor,
            }}
          >
            {selectedWeapon.rarity}
          </div>
        </div>
      </div>
      <p className="mt-2 text-white opacity-60 text-sm font-robotoCondensed font-normal">
        {selectedWeapon.description}
      </p>
      <div className="mt-2">
        <strong className="text-white font-robotoCondensed">Elements:</strong>
        <div className="flex gap-2">
          {selectedWeapon.tagsElement.map((element: string | StaticImageData, index: React.Key | null | undefined) => (
            <LazyImage
              src={element}
              alt={`Element ${index}`}
              key={index}
              width={30}
              height={30}
              quality={60}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import LazyImage from '@/core/utils/LazyImage';

export default function WeaponDetails({ selectedWeapon }) {
  if (!selectedWeapon) return null;

  return (
    <div className="flex flex-col gap-2 mt-2" key={selectedWeapon.id}>
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        <h3 className="text-4xl font-bold text-white">{selectedWeapon.nome}</h3>
        <div className="flex gap-2">
          <div
            className="mt-2 px-3 border-[1px] text-sm text-white rounded-full"
            style={{
              borderColor: selectedWeapon.tagsType.includes("Ranged")
                ? "#4CAF50"
                : "#FF5722",
            }}
          >
            {selectedWeapon.tagsType.join(" ")}
          </div>
          <div
            className="mt-2 px-3 border-[1px] text-sm text-white rounded-full"
            style={{
              borderColor: selectedWeapon.rarityColor,
            }}
          >
            {selectedWeapon.rarity}
          </div>
        </div>
      </div>
      <p className="mt-2 text-white opacity-60 text-sm font-normal">
        {selectedWeapon.description}
      </p>
      <div className="mt-2">
        <strong className="text-white">Elements:</strong>
        <div className="flex gap-2">
          {selectedWeapon.tagsElement.map((element, index) => (
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

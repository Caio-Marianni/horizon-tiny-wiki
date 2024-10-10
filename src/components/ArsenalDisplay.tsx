import React from 'react'
import Image from "next/image";
import ArsenalBg from "../../public/arsenalBackground.webp"

export default function ArsenalDisplay() {
  return (
    <div className='relative z-0'>
      <Image
        src={ArsenalBg}
        alt="arsenal Background"
        className=""
      />
    </div>
  );
}

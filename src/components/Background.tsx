'use client'
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

interface BackgroundProps {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  quality: number;
  placeholder?: "blur" | "empty";
  speed?: number;
  className?: string;
}

const Background: React.FC<BackgroundProps> = ({
  src,
  alt,
  width,
  height,
  quality,
  placeholder,
  speed = 1,
  className,
}) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    // Verifica se estamos no cliente (o window só existe no cliente)
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setOffsetY(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);

      // Limpeza do evento ao desmontar o componente
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const blurDataUrl = typeof src === "object" ? src.src : src;

  return (
    <Image
      priority
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={quality}
      placeholder={placeholder}
      blurDataURL={blurDataUrl}
      className={`${className} pointer-events-none`}
      style={{
        transform: `translateY(${offsetY * (speed / 10)}px)`, // Efeito parallax baseado na rolagem
      }}
    />
  );
};

export default Background;

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

interface BackgroundProps {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  quality: number;
  placeholder?: "blur" | "empty"; // Tipagem corrigida
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

  // Função que lida com o evento de rolagem
  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  // Hook para adicionar e remover o listener de rolagem
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Limpeza do evento ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Verifique se o `src` é do tipo `StaticImageData` e obtenha a URL correta
  const blurDataUrl = typeof src === "object" ? src.src : src;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={quality}
      placeholder={placeholder} 
      blurDataURL={blurDataUrl} 
      className={`${className} object-cover top-0 left-0 w-full h-full pointer-events-none`}
      style={{
        transform: `translateY(${offsetY * (speed / 10)}px)`, // Efeito parallax baseado na rolagem
      }}
    />
  );
};

export default Background;

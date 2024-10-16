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

  // Adiciona verificação para garantir que o código está rodando no cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setOffsetY(window.scrollY);
      };
      
      // Adiciona o evento de rolagem quando o cliente estiver disponível
      window.addEventListener("scroll", handleScroll);
      
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  // Verifique se o `src` é do tipo `StaticImageData` e obtenha a URL correta
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

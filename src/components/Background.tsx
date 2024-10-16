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
  const [isClient, setIsClient] = useState(false); // Novo state para verificar se estamos no cliente

  // Hook para garantir que a renderização ocorra apenas no cliente
  useEffect(() => {
    // Set isClient para true após a montagem no cliente
    setIsClient(true);

    // Verifique se window está disponível
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

  // Se não for o cliente, não renderize o componente
  if (!isClient) {
    return null; // Evita renderizar no lado do servidor
  }

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

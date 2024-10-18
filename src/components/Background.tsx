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
  const [isAboveSM, setIsAboveSM] = useState(false);

  // Verifica se estamos no lado do cliente e se a tela é maior que "SM"
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsAboveSM(window.innerWidth >= 640); // SM no Tailwind é 640px
      };

      // Define inicialmente o estado do tamanho da tela
      handleResize();

      // Adiciona o evento de resize
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  // Detecta a rolagem apenas se estiver acima de SM
  useEffect(() => {
    if (isAboveSM && typeof window !== "undefined") {
      const handleScroll = () => {
        setOffsetY(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isAboveSM]);

  const blurDataUrl = typeof src === "object" ? src.src : undefined;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={quality}
      placeholder={placeholder}
      blurDataURL={blurDataUrl}
      className={`${className} pointer-events-none`}
      style={{
        transform: isAboveSM ? `translateY(${offsetY * (speed / 10)}px)` : undefined,
      }}
    />
  );
};

export default Background;

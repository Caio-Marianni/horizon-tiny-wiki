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

  // Verifica se estamos no lado do cliente antes de acessar o window
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setOffsetY(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const blurDataUrl = typeof src === "object" ? src.src : undefined;

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
        transform: `translateY(${offsetY * (speed / 10)}px)`,
      }}
    />
  );
};

export default Background;

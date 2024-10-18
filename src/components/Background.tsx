import React, { useState, useRef, useEffect } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // Usando IntersectionObserver para detectar quando o componente está visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Visível em 10% do viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  // Efeito de rolagem baseado em IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      if (isVisible) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  // Verifique se o `src` é do tipo `StaticImageData`
  const blurDataUrl = typeof src === "object" ? src.src : undefined;

  return (
    <div ref={ref}>
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
          transform: `translateY(${scrollY * (speed / 10)}px)`, // Efeito parallax baseado na rolagem
        }}
      />
    </div>
  );
};

export default Background;

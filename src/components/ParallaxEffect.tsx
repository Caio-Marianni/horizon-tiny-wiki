"use client";
import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import ParallaxThumb from "../../public/parallaxThumb.jpg";
import Layer1Background from "../../public/layer1Background.webp";
import Layer2Machine from "../../public/layer2Machine.webp";
import Layer3Aloy from "../../public/layer3Aloy.webp";
import Layer4Front from "../../public/layer4Front.webp";
import LayerLogo from "../../public/logo.png";

// Função debounce para otimizar eventos de resize
function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export default function ParallaxEffect() {
  const [isMobile, setIsMobile] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  // Referência para o scroll Y sem precisar de estado
  const offsetYRef = useRef(0);

  // Função para lidar com o carregamento de imagens
  const handleImageLoad = useCallback(() => {
    setLoadedCount((prevCount) => prevCount + 1);
  }, []);

  // Função para verificar se é mobile e ajustar o estado
  const checkIsMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 640); // Definido como breakpoint `sm`
  }, []);

  // Função para lidar com o scroll usando requestAnimationFrame
  const handleScroll = useCallback(() => {
    offsetYRef.current = window.scrollY;
    requestAnimationFrame(() => {
      document.documentElement.style.setProperty('--scroll-y', `${offsetYRef.current}px`);
    });
  }, []);

  // useEffect para monitorar o carregamento das imagens
  useEffect(() => {
    if (loadedCount === 4) setAllImagesLoaded(true);
  }, [loadedCount]);

  // useEffect para adicionar listeners de resize e scroll, com debounce para melhor performance
  useEffect(() => {
    const handleResizeDebounced = debounce(checkIsMobile, 150);

    // Verificação inicial de tamanho da tela
    checkIsMobile();

    // Adicionar listeners
    window.addEventListener("resize", handleResizeDebounced);
    window.addEventListener("scroll", handleScroll);

    // Limpeza ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResizeDebounced);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [checkIsMobile, handleScroll]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Imagem de fundo com efeito de blur */}
      <div className="absolute object-cover object-center w-full h-full">
        <Image src={ParallaxThumb} alt="Imagem de fundo" fill priority />
      </div>
      {/* Camadas de parallax */}
      {useMemo(
        () => (
          <>
            {/* Mountain layer */}
            <ParallaxLayer
              src={Layer1Background}
              alt="Mountain Layer"
              isMobile={isMobile}
              speed={1}
              className="bottom-40 transition-opacity duration-500"
              allImagesLoaded={allImagesLoaded}
              handleImageLoad={handleImageLoad}
            />
            {/* Machine layer */}
            <ParallaxLayer
              src={Layer2Machine}
              alt="Machine Layer"
              isMobile={isMobile}
              speed={0.6}
              className="bottom-20 lg:bottom-0 max-w-[1450px] right-0"
              allImagesLoaded={allImagesLoaded}
              handleImageLoad={handleImageLoad}
            />
            {/* Aloy layer */}
            <ParallaxLayer
              src={Layer3Aloy}
              alt="Aloy Layer"
              isMobile={isMobile}
              speed={0.4}
              className="lg:max-w-[1250px] bottom-0 lg:-bottom-[100px]"
              allImagesLoaded={allImagesLoaded}
              handleImageLoad={handleImageLoad}
            />
            {/* Front layer */}
            <ParallaxLayer
              src={Layer4Front}
              alt="Front Layer"
              isMobile={isMobile}
              speed={0.05}
              className="bottom-0 lg:max-w-[1350px]"
              allImagesLoaded={allImagesLoaded}
              handleImageLoad={handleImageLoad}
            />
            {/* Logo */}
            <div
              className={`absolute w-full h-auto object-center transition-all duration-1000 ease-in-out ${
                allImagesLoaded ? "top-40" : "top-0"
              } ${allImagesLoaded ? "opacity-100" : "opacity-0"}`}
            >
              <Image
                src={LayerLogo}
                alt="Logo"
                className="w-[400px] m-auto"
                priority
                style={{
                  transform: isMobile ? "translateY(0)" : `translateY(calc(var(--scroll-y, 0) * 0.8px))`,
                }}
              />
            </div>
          </>
        ),
        [isMobile, allImagesLoaded, handleImageLoad]
      )}
    </div>
  );
}

// Tipagem para o componente de camada de parallax
interface ParallaxLayerProps {
  src: StaticImageData;
  alt: string;
  isMobile: boolean;
  speed: number;
  className?: string;
  allImagesLoaded: boolean;
  handleImageLoad: () => void;
}

// Componente de camada de Parallax para reutilização
const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  src,
  alt,
  isMobile,
  speed,
  className = "",
  allImagesLoaded,
  handleImageLoad,
}) => {
  return (
    <div
      className={`absolute
        ${className} transition-all duration-500 ease-in-out
        ${allImagesLoaded ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: isMobile ? "translateY(0)" : `translateY(calc(var(--scroll-y, 0) * ${speed}))`,
      }}
    >
      <Image
        src={src}
        alt={alt}
        priority
        className="object-cover object-center"
        onLoad={handleImageLoad}
      />
    </div>
  );
};

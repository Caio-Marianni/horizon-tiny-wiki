"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ParallaxThumb from "../../public/parallaxThumb.jpg";
import Layer1Background from "../../public/layer1Background.webp";
import Layer2Machine from "../../public/layer2Machine.webp";
import Layer3Aloy from "../../public/layer3Aloy.webp";
import Layer4Front from "../../public/layer4Front.webp";
import LayerLogo from "../../public/logo.png";

export default function ParallaxEffect() {
  // Estado para monitorar se todas as imagens foram carregadas
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  // Contador para as imagens carregadas
  const [loadedCount, setLoadedCount] = useState(0);
  // Observador para o efeito de parallax
  const [offsetY, setOffsetY] = useState(0);

  // Função para lidar com o evento de carregamento de cada imagem
  const handleImageLoad = () => {
    setLoadedCount((prevCount) => prevCount + 1); // Incrementa o contador
  };

  // Quando todas as 4 imagens forem carregadas, remove o blur do background
  if (loadedCount === 4 && !allImagesLoaded) {
    setAllImagesLoaded(true);
  }

  // Função para atualizar o deslocamento vertical baseado na rolagem
  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  // useEffect para adicionar o listener de rolagem e remover depois
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen lg:scale-100 overflow-hidden">
      {/* Imagem de fundo com efeito de blur */}
      <div className="absolute object-cover object-center w-full h-full">
        <Image src={ParallaxThumb} alt="Imagem de fundo" fill priority />
      </div>
      {/* Imagens para efeito de parallax */}
      {/* Mountain layer */}
      <Image
        src={Layer1Background}
        alt="Imagem 1"
        fill
        className={`absolute object-cover object-center w-full h-full transition-opacity duration-500 ${
          allImagesLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translateY(${offsetY * 1}px)`,
        }}
        onLoad={handleImageLoad}
      />
      {/* Machine layer */}
      <div
        className={`absolute right-0 transition-all duration-500 ease-in-out ${
          allImagesLoaded ? "bottom-0" : "bottom-20"
        } ${allImagesLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <Image
          src={Layer2Machine}
          alt="Imagem 2"
          className={`w-[1250px] object-cover object-center transition-all duration-500 ${
            allImagesLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: `translateY(${offsetY * 0.6}px)`,
          }}
          onLoad={handleImageLoad}
        />
      </div>
      {/* Aloy layer */}
      <div
        className={`absolute bottom-0 lg:-bottom-[100px] transition-all duration-500 ease-in-out ${
          allImagesLoaded ? "bottom-0" : "bottom-20"
        } ${allImagesLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <Image
          src={Layer3Aloy}
          alt="Imagem 3"
          className={` lg:max-w-[1250px] object-cover object-left transition-all duration-500 ease-in-out ${
            allImagesLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: `translateY(${offsetY * 0.4}px)`,
          }}
          onLoad={handleImageLoad}
        />
      </div>
      {/* Front layer */}
      <Image
        src={Layer4Front}
        alt="Imagem 4"
        className={`absolute bottom-0 lg:-bottom-20 object-cover transition-all duration-300 ${
          allImagesLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translateY(${offsetY * 0.05}px)`,
        }}
        onLoad={handleImageLoad}
      />
      {/* Logo */}
      <div
        className={`absolute w-full h-auto object-center transition-all duration-1000 ease-in-out ${
          allImagesLoaded ? "top-40" : "top-0"
        } ${allImagesLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <Image
          src={LayerLogo}
          alt="Imagem Logo"
          className="w-[400px] m-auto"
          style={{
            transform: `translateY(${offsetY * 0.8}px)`,
          }}
        />
      </div>
    </div>
  );
}

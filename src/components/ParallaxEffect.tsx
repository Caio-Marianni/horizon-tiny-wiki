"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import MainThumb from "../../public/mainThumb.jpg";
import Main1 from "../../public/layerAloy.webp";
import Main2 from "../../public/layerMountain.webp";
import Main3 from "../../public/layerTreeLast.webp";
import Main4 from "../../public/layerMachines.webp";

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
    <div className="relative w-full h-screen">
      {/* Imagem de fundo com efeito de blur */}
      <div className="absolute object-cover object-center w-full h-full overflow-hidden">
        <Image
          src={MainThumb}
          alt="Imagem de fundo"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      {/* Imagens para efeito de parallax */}
      <Image
        src={Main1}
        alt="Imagem 1"
        fill
        className={`absolute object-cover object-center w-full h-full transition-opacity duration-500 ${
          allImagesLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translateY(${offsetY * 0.5}px)`
        }}
        onLoad={handleImageLoad}
      />
      <Image
        src={Main2}
        alt="Imagem 2"
        fill
        className={`absolute object-cover object-center w-full h-full transition-opacity duration-600 ${
          allImagesLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translateY(${offsetY * 0.3}px)`
        }}
        onLoad={handleImageLoad}
      />
      <Image
        src={Main3}
        alt="Imagem 3"
        fill
        className={`absolute object-cover object-center w-full h-full transition-opacity duration-700 ${
          allImagesLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translateY(${offsetY * 0.2}px)`
        }}
        onLoad={handleImageLoad}
      />
      <Image
        src={Main4}
        alt="Imagem 4"
        fill
        className={`absolute object-cover object-center w-full h-full transition-opacity duration-1000 ${
          allImagesLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translateY(${offsetY * 0.1}px)`
        }}
        onLoad={handleImageLoad}
      />
    </div>
  );
}

"use client";
import { useState } from "react";
import Image from "next/image";
import MainThumb from "../../public/mainThumb.jpg";
import Main4 from "../../public/layerAloy.webp";
import Main3 from "../../public/layerMountain.webp";
import Main2 from "../../public/layerTreeLast.webp";
import Main1 from "../../public/layerMachines.webp";

export default function ParallaxEffect() {
  // Estado para monitorar se todas as imagens foram carregadas
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0); // Contador para as imagens carregadas

  // Função para lidar com o evento de carregamento de cada imagem
  const handleImageLoad = () => {
    setLoadedCount((prevCount) => prevCount + 1); // Incrementa o contador
  };

  // Quando todas as 4 imagens forem carregadas, remove o blur do background
  if (loadedCount === 4 && !allImagesLoaded) {
    setAllImagesLoaded(true);
  }

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

      <Image
        src={Main1}
        alt="Imagem 1"
        fill
        className={`absolute object-cover object-center w-full h-full transition-opacity duration-500 ${
          allImagesLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={handleImageLoad}
      />
      <Image
        src={Main2}
        alt="Imagem 2"
        fill
        className={`absolute object-cover object-center w-full h-full transition-opacity duration-600 ${
          allImagesLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={handleImageLoad}
      />
      <Image
        src={Main3}
        alt="Imagem 3"
        fill
        className={`absolute object-cover object-center w-full h-full transition-opacity duration-700 ${
          allImagesLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={handleImageLoad}
      />
      <Image
        src={Main4}
        alt="Imagem 4"
        fill
        className={`absolute object-cover object-center w-full h-full transition-opacity duration-1000 ${
          allImagesLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={handleImageLoad}
      />
    </div>
  );
}

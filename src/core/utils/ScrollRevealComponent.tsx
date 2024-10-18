"use client";
import { useEffect } from "react";
import scrollReveal from "scrollreveal"; // Note que o 's' em scrollreveal é minúsculo

const ScrollRevealComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Inicializa ScrollReveal diretamente
      const sr = scrollReveal();

      // Inicializa o ScrollReveal se estiver disponível
      sr.reveal(".reveal", {
        distance: "50px",
        duration: 800,
        easing: "ease-in-out",
        origin: "bottom",
        reset: true,
        interval: 200,
      });
    }
  }, []);

  return null; // Não precisa renderizar nada
};

export default ScrollRevealComponent;

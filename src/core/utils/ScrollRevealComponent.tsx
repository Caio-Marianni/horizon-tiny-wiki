"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import scrollReveal from "scrollreveal"; // Importa ScrollReveal

const ScrollRevealComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Inicializa o ScrollReveal apenas no lado do cliente
      const sr = scrollReveal();
      sr.reveal(".reveal", {
        distance: "50px",
        duration: 1000,
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

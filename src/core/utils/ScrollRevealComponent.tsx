"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import scrollReveal from "scrollreveal"; // Importa ScrollReveal

const ScrollRevealComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Carrega o ScrollReveal após 2 segundos para garantir que o conteúdo inicial foi carregado
      setTimeout(() => {
        import("scrollreveal").then((scrollReveal) => {
          const sr = scrollReveal.default();
          sr.reveal(".reveal", {
            distance: "50px",
            duration: 1000,
            easing: "ease-in-out",
            origin: "bottom",
            reset: true,
            interval: 200,
          });
        });
      }, 2000);
    }
  }, []);
  

  return null; // Não precisa renderizar nada
};

export default ScrollRevealComponent;

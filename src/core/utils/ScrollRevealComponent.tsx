"use client";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal"; // Importa diretamente para garantir o tipo correto

const ScrollRevealComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Certifique-se de usar o tipo correto
      const sr: scrollReveal.ScrollRevealObject = ScrollReveal();

      // Inicializa o ScrollReveal se estiver disponível
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

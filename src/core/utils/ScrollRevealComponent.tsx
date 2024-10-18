"use client";
import { useEffect } from "react";

const ScrollRevealComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Carrega o ScrollReveal dinamicamente apenas no lado do cliente
      import("scrollreveal").then((scrollReveal) => {
        // Acessa o export padrão corretamente
        const sr = scrollReveal.default;
        sr.reveal(".reveal", {
          distance: "50px",
          duration: 1000,
          easing: "ease-in-out",
          origin: "bottom",
          reset: true, // Ativa animação toda vez que o usuário faz scroll
        });
      });
    }
  }, []);

  return null; // Não precisa renderizar nada
};

export default ScrollRevealComponent;

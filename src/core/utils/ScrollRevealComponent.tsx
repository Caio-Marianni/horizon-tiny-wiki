"use client";
import { useEffect } from "react";

const ScrollRevealComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Importa ScrollReveal dinamicamente
      import("scrollreveal").then((scrollReveal) => {
        // Algumas versões do ScrollReveal podem precisar de sr() em vez de sr.reveal()
        const sr = scrollReveal.default || scrollReveal;
        
        // Verifique se sr é uma função ou objeto e chame apropriadamente
        if (typeof sr === "function") {
          sr().reveal(".reveal", {
            distance: "50px",
            duration: 1000,
            easing: "ease-in-out",
            origin: "bottom",
            reset: true,
            interval: 200,
          });
        } else if (sr && typeof sr.reveal === "function") {
          sr.reveal(".reveal", {
            distance: "50px",
            duration: 1000,
            easing: "ease-in-out",
            origin: "bottom",
            reset: true,
            interval: 200,
          });
        }
      });
    }
  }, []);

  return null; // Não precisa renderizar nada
};

export default ScrollRevealComponent;

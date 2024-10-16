import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
      },
      animation: {
        arrow1: "arrow1 1.5s ease-in-out infinite",
        arrow2: "arrow2 1.5s ease-in-out infinite",
      },
      keyframes: {
        arrow1: {
          "100%": {
            opacity: "0",
            top: "100%",
          }
        },
        arrow2: {
          "100%": {
            opacity: "0",
            top: "50%",
          },
        }
      },
    },
  },
  plugins: [],
};

export default config;

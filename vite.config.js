import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 15s linear infinite",
        "spin-slow-reverse": "spinReverse 8s linear infinite",
        "spin-slower": "spinReverse 6s linear infinite",
      },
      keyframes: {
        spinReverse: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [react(), tailwindcss()],
});

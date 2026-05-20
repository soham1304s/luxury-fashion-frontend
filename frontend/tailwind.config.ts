import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./sections/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        bone: "#F5F5F3",
        stone: "#E7E5E4",
        charcoal: "#1A1A1A",
        champagne: "#B8A07E",
        sand: "#D6C3A5"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Helvetica", "Arial", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"]
      },
      letterSpacing: {
        luxury: "0.18em"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0,0,0,0.10)"
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zion: {
          blue: "#2c4cff",
          green: "#27c29d",
          gold: "#f5b301",
          dark: "#0f1220",
        },
      },
    },
  },
  plugins: [],
};

export default config;
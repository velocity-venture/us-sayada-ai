import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // We added these lines to ensure Tailwind sees your files in the root directory
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    
    // We keep these just in case any files are inside src
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sayada: {
          blue: "#0F4C75",   // Sayada Steel Blue
          slate: "#3282B8",  // Strategic Slate
          mist: "#BBE1FA",   // Metallic Silver
          graphite: "#1F2937", // Primary Text
          cloud: "#FAFAFA",  // Background
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'], 
        display: ['var(--font-jakarta)'],
      },
    },
  },
  plugins: [],
};
export default config;
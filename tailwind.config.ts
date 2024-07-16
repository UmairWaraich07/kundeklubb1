import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-600": "#4682F9",
        "primary-500": "#6094FF",
        "primary-400": "#84B1FF",
        "secondary-600": "#666666",
        "secondary-400": "#D9D9D9",
        light: "#ffffff",
        dark: "#000000",
      },
    },
  },
  plugins: [],
};
export default config;

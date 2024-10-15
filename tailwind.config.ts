import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#001f3f',        // Dark Navy color
        lightblue: '#1f77b4',   // Light Blue for sections or buttons
        yellow: '#ffdd57',      // Yellow for accent or call-to-action
      },
    },
  },
  plugins: [],
};
export default config;

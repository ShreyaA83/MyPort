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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },

    screens: {
      'xs': '400px',
      'sm': '400px', // Default small breakpoint
      'md': '768px', // Default medium breakpoint
      'lg': '1024px', // Default large breakpoint
      'xl': '1280px', // Extra large breakpoint
    },
  },
  plugins: [],
};
export default config;

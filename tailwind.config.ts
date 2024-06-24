import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "star-pattern": "url('../public/bg-stars.svg')",
        "hill-pattern": "url('../public/pattern-hills.svg')",

      },
      keyframes: {
        flipDown: {
          "100%": { transform: "rotateX(90deg)" },
        },
        flipUp: {
          "100%": { transform: "rotateX(0deg)" },
        },
      },
      animation: {
        flipDown: "flipDown 200ms ease-in",
        flipUp: "flipUp 200ms ease-out 200ms",
      },
    },
  },
  plugins: [daisyui],
};
export default config;

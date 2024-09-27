import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "image": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      spacing: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        192: "48rem",
        224: "56rem",
      },
      fontFamily: {
        'mulish': ["Mulish", ...defaultTheme.fontFamily.sans],
        'bitter': ["Bitter", ...defaultTheme.fontFamily.serif],
        'diph': ["Diphylleia", ...defaultTheme.fontFamily.serif],
      },
      letterSpacing: {
        widest: ".3em",
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;

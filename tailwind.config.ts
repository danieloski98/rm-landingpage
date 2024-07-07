import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "white",
        primary01: "#FFE7EC",
        primary03: "#BE0027",
        secondary01: "#F4F4F4",
        secondary02: "#BEBEBE",
        secondary04: "#828282",
        secondary05: "#3B3B3B",
        secondary10: "#494949",
        grey500: "#919EAB",
        warning01: "#FFF7CD",
        light02: "#212B36",
        dark01: "#3B3B3B",
        dark02: "#919EAB"
      }
    },
  },
  plugins: [],
};
export default config;

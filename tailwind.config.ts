import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      serif: ["var(--font-serif)"],
      sans: ["var(--font-sans)"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "home-hero": 'url("/home/home.png")',
        "home-float": 'url("/home/home-float.png")',
        "coming-soon": 'url("/coming-soon/bg.png")',
      },
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)", // #FF5626
        lime: "rgb(var(--color-tertiary-lime) / <alpha-value>)", // #E0FFA9
        deepBlue: "var(--deep-blue)",
        deepBlueLight: "var(--deep-blue-light)",
        white: "var(--white)",
        orange: "var(--orange)",
        gray1: "var(--gray1)",
        gray5: "var(--gray5)",
        gray6: "var(--gray6)",
        gray7: "var(--gray7)",
        black06: "var(--black06)",
        gray75: "var(--gray75)",
        gray10: "var(--gray10)",
        grayE7: "var(--grayE7)",
        gray2: "var(--gray2)",
        grayBlack: "var(--gray-black)",
        black23: "var(--black23)",
        tertiaryNude: "var(--tertiary-nude)",
      },
    },
  },
  plugins: [],
  important: true,
};
export default config;

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
        primary: "rgb(var(--color-primary) / <alpha-value>)", // #16133D
        orange: "rgb(var(--color-orange) / <alpha-value>)" /* #FF5626 */,
        red: "rgb(var(--color-red) / <alpha-value>)" /* #FF595E */,
        jasmine: "rgb(var(--color-jasmine) / <alpha-value>)" /* #F3CB2B */,
        brun: "rgb(var(--color-brun) / <alpha-value>)" /* #005A1D */,
        lilac: "rgb(var(--color-lilac) / <alpha-value>)" /* #EEEAF9 */,
        nude: "rgb(var(--color-nude) / <alpha-value>)" /* #EEEED8 */,
        baby: "rgb(var(--color-baby) / <alpha-value>)" /* #FFDEE1 */,
        lime: "rgb(var(--color-lime) / <alpha-value>)" /* #E0FFA9 */,
        mint: "rgb(var(--color-mint) / <alpha-value>)" /* #D2FDFF */,
        blue: "rgb(var(--color-blue) / <alpha-value>)" /* #97CBFF */,
        gray: "rgb(var(--color-gray) / <alpha-value>)" /* #0E1004 */,
        black: "rgb(var(--color-black) / <alpha-value>)" /* #1C1F22 */,
        white: "rgb(var(--color-white) / <alpha-value>)" /* #FFFFFF */,
        "primary-darker":
          "rgb(var(--color-primary-darker) / <alpha-value>)" /* #0B091F */,
        "primary-lighter":
          "rgb(var(--color-primary-lighter) / <alpha-value>)" /* #322B8C */,
        "orange-dark":
          "rgb(var(--color-orange-dark) / <alpha-value>)" /* #F23602 */,
        "gray-seven":
          "rgb(var(--color-gray-seven) / <alpha-value>)" /* #D3DCE6 */,
        "gray-two": "rgb(var(--color-gray-two) / <alpha-value>)" /* #25292D */,
        "gray-six": "rgb(var(--color-gray-six) / <alpha-value>)" /* #B9BCC8 */,
        "gray-five":
          "rgb(var(--color-gray-five) / <alpha-value>)" /* #6E717C */,

        deepBlue: "var(--deep-blue)",
        deepBlueLight: "var(--deep-blue-light)",
        black06: "var(--black06)",
        gray75: "var(--gray75)",
        gray10: "var(--gray10)",
        grayE7: "var(--grayE7)",
        grayBlack: "var(--gray-black)",
        black23: "var(--black23)",
      },
    },
  },
  plugins: [],
  important: true,
};
export default config;

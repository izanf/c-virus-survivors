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
        jagger: '#3E1F47',
        violentViolet: '#312244',
        comet: '#5F5F61',
        bubbles: '#E8F6ED',
        oceanGreen: '#52A86E',
        whiteSmoke: '#EFEFEF',
        gray: '#FAFAFA',
        white: '#FFFFFF'
      }
    },
  },
  plugins: [],
};
export default config;

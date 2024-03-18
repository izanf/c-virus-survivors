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
        spunPearl: '#A1A0A3',
        bubbles: '#E8F6ED',
        oceanGreen: '#52A86E',
        whiteSmoke: '#EFEFEF',
        whiteSmokeSecondary: '#F6F6F6',
        whisper: '#E6E6E6',
        brightGray: '#5A5C60',
        gray: '#FAFAFA',
        haiti: '#222124',
        hotPurple: '#4D194D',
        roman: '#E45858',
        cosmos: '#F8D5D5',
        white: '#FFFFFF',
      }
    },
  },
  plugins: [],
};
export default config;

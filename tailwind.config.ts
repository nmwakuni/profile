import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        50: "50%",
        60: "60%",
        75: "75%",
        80: "80%",
        90: "90%",
      },
      zIndex: {
        "-1": "-1",
        "-10": "-10",
      },
      fontFamily: {
        wdc: ["var(--font-josefin)"],
      },
    },
  },

  plugins: [],
};
export default config;


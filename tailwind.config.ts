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
        "-3": "-3",
        "-10": "-10",
      },
      fontFamily: {
        wdc: ["var(--font-josefin)"],
      },
      backgroundImage: {
        "bg-img-1": "url('/about.jpg')",
        "bg-img-2": "url('/contact.jpg')",
        "bg-img-3": "url('/bg4.jpg')",
        pattern: "url('/pattern.png')",
      },
    },
  },

  plugins: [],
};

export default config;


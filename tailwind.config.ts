import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        "3pct": "3%",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      container: {
        center: true,
        padding: "15px",
      },

      colors: {
        primary: "#FF9F0D",
        secondary: "#1A202C",
        accent: "#F8312F",
      },
    },
  },
  plugins: [],
};
export default config;

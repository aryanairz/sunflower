import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm off-white canvas tones (never pure #fff for sections)
        paper: {
          DEFAULT: "#F7F6F2", // page canvas
          2: "#FBFAF7", // lighter alt section
          3: "#FFFFFF", // cards / inputs
        },
        // Warm off-black text (never pure #000)
        ink: {
          DEFAULT: "#211E18",
          muted: "#6A6359",
          soft: "#938B7D",
        },
        // Hairline structural borders
        line: "#E6E2DA",
        // Single restrained, desaturated gold accent (small labels only)
        accent: "#9A7C3C",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.22em",
      },
      maxWidth: {
        shell: "1240px",
      },
      boxShadow: {
        // ultra-diffuse, low-opacity lift (minimalist)
        card: "0 2px 10px rgba(33, 30, 24, 0.05)",
        cardHover: "0 14px 34px -18px rgba(33, 30, 24, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;

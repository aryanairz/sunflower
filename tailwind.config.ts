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
        // Warm off-white surfaces (page bg, cards, subtle alt sections)
        bone: {
          DEFAULT: "#F6F4EF",
          soft: "#FBFAF8",
          2: "#FFFFFF",
          3: "#ECE7DD",
        },
        // Charcoal text
        ink: {
          DEFAULT: "#23211D",
          muted: "#6E685E",
        },
        // Single calm accent
        sage: {
          DEFAULT: "#4F6F59",
          hover: "#3F5B49",
          soft: "#E7EDE7",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Outfit", "system-ui", "sans-serif"],
        sans: ["Cabinet Grotesk", "system-ui", "sans-serif"],
      },
      boxShadow: {
        // tinted, sage-hued elevation — not generic black
        lift: "0 18px 40px -24px rgba(79, 111, 89, 0.45)",
        soft: "0 1px 2px rgba(35, 33, 29, 0.04), 0 8px 24px -18px rgba(35, 33, 29, 0.25)",
      },
      maxWidth: {
        shell: "1500px",
      },
      letterSpacing: {
        eyebrow: "0.25em",
        button: "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;

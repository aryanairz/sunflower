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
        ink: {
          DEFAULT: "#0F0B08",
          2: "#1A1410",
          3: "#241B14",
        },
        gold: {
          DEFAULT: "#C5A675",
          hover: "#D4B889",
        },
        cream: {
          DEFAULT: "#E8DCC4",
          muted: "#A89B82",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["Cabinet Grotesk", "system-ui", "sans-serif"],
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

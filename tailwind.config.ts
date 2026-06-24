import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // warm near-black "ink" (espresso/walnut) for text on light surfaces
        ink: {
          DEFAULT: "#221911",
          soft: "#6b5d4f",
          faint: "#a99a8b",
        },
        // dark walnut — used for the warm anchor sections (hero, CTA, footer)
        walnut: {
          DEFAULT: "#241a12",
          900: "#191007",
          800: "#2e2117",
          700: "#3d2d1e",
        },
        // light text on the dark walnut anchors
        cream: {
          DEFAULT: "#f7f1e6",
          soft: "#cdbfa8",
        },
        // single accent, sampled from the brand logo (orange cube)
        accent: {
          DEFAULT: "#E67900",
          dark: "#BF6406",
        },
        // warm off-white page base + warm hairline
        paper: "#fdfbf7",
        line: "#e8e1d5",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "Cambria", "serif"],
      },
      maxWidth: {
        container: "78rem",
      },
      letterSpacing: {
        label: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;

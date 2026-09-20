import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Same Ink/Navy foundation as letyarlabs.com, for visual kinship —
        // but the primary accent here is Lacquer, not Cyan. Letyar's own
        // COLORS.md reserves Heritage Lacquer specifically for personal /
        // cultural context, which is exactly what a founder's own site is.
        ink: "#0B1220",
        navy: "#101B33",
        lacquer: "#B23A22", // primary accent on THIS site
        cyan: "#19D3E6", // secondary — used for cross-links back to Letyar
        gold: "#E0B04B",
        paper: "#F7FAFC",
        mist: "#CBD5E1",
        slate: "#64748B",
      },
      fontFamily: {
        display: ["General Sans", "sans-serif"],
        body: ["Satoshi", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        mm: ["var(--font-mm)", "sans-serif"],
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};
export default config;

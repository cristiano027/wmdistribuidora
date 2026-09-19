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
        wm: {
          yellow: "var(--wm-yellow)",
          "yellow-light": "var(--wm-yellow-light)",
          "yellow-dark": "var(--wm-yellow-dark)",
          "yellow-soft": "var(--wm-yellow-soft)",
          black: "var(--wm-black)",
          charcoal: "var(--wm-charcoal)",
          "deep-black": "var(--wm-deep-black)",
          cream: "var(--wm-cream)",
          "cream-light": "var(--wm-cream-light)",
          surface: "var(--wm-surface)",
          text: "var(--wm-text)",
          "text-muted": "var(--wm-text-muted)",
          "text-light": "var(--wm-text-light)",
        },
      },
      fontFamily: {
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(12px) rotate(-2deg)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-reverse": "float-reverse 7s ease-in-out infinite",
        "pulse-slow": "pulseSlow 8s ease-in-out infinite",
        marquee: "marquee 35s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

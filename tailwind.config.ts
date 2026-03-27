import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF6B00",
          light: "#FF8533",
          dark: "#E65100",
        },
        secondary: {
          DEFAULT: "#1A1A1A",
          light: "#333333",
          dark: "#000000",
        },
        accent: {
          orange: "#FF6B00",
          yellow: "#FFD600",
          green: "#00C853",
        },
        "bg-light": "#FFFFFF",
        "bg-gray": "#F5F5F5",
        "bg-card": "#FFFFFF",
        "bg-card-hover": "#FAFAFA",
        "text-primary": "#1A1A1A",
        "text-secondary": "#666666",
        "text-muted": "#999999",
        success: "#00C853",
        warning: "#FFD600",
        error: "#FF1744",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        hero: ["64px", { lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.02em" }],
        "hero-mobile": ["40px", { lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.02em" }],
        section: ["48px", { lineHeight: "1.2", fontWeight: "700", letterSpacing: "-0.01em" }],
        "section-mobile": ["32px", { lineHeight: "1.2", fontWeight: "700", letterSpacing: "-0.01em" }],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in": "fadeIn 0.6s ease-out",
        "counter": "counter 2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        counter: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(108, 99, 255, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(108, 99, 255, 0.6)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #6C63FF, #00D4FF)",
        "gradient-dark": "linear-gradient(135deg, #14142E, #0B0B1E)",
      },
    },
  },
  plugins: [],
};

export default config;

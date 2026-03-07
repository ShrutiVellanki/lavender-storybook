/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavenderMoon: {
          base: "#575279",
          surface: "#635F8E",
          overlay: "#6E6A86",
          muted: "#9893A5",
          subtle: "#908CAA",
          text: "#FAF4ED",
          love: "#EB6F92",
          gold: "#F6C177",
          rose: "#EBBCBA",
          pine: "#56B6C2",
          foam: "#9CCFD8",
          iris: "#C4A7E7",
          highlightLow: "#6E6A86",
          highlightMed: "#817F96",
          highlightHigh: "#9693A5",
        },
        lavenderDawn: {
          base: "#FAF4ED",
          surface: "#FFFAF3",
          overlay: "#F2E9E1",
          muted: "#797593",
          subtle: "#655E7E",
          text: "#4A4458",
          love: "#B4637A",
          gold: "#EA9D34",
          rose: "#D7827E",
          pine: "#286983",
          foam: "#56949F",
          iris: "#575279",
          highlightLow: "#F4EDE8",
          highlightMed: "#DFDAD9",
          highlightHigh: "#CECACD",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}


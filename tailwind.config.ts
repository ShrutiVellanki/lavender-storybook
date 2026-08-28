import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        surface: "var(--surface)",
        icon: "var(--icon)",
        hover: "var(--hover)",
        active: "var(--active)",
        disabled: {
          DEFAULT: "var(--disabled)",
          foreground: "var(--disabled-foreground)",
        },
        focus: "var(--focus)",
        success: {
          DEFAULT: "var(--success)",
          foreground: "var(--success-foreground)",
        },
        warning: {
          DEFAULT: "var(--warning)",
          foreground: "var(--warning-foreground)",
        },
        danger: {
          DEFAULT: "var(--danger)",
          foreground: "var(--danger-foreground)",
        },
        info: {
          DEFAULT: "var(--info)",
          foreground: "var(--info-foreground)",
        },
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      fontFamily: {
        sans: "var(--font-sans)",
      },
      fontSize: {
        body: ["var(--text-body-size)", {
          lineHeight: "var(--text-body-leading)",
          fontWeight: "var(--text-body-weight)",
        }],
        label: ["var(--text-label-size)", {
          lineHeight: "var(--text-label-leading)",
          fontWeight: "var(--text-label-weight)",
        }],
        heading: ["var(--text-heading-size)", {
          lineHeight: "var(--text-heading-leading)",
          fontWeight: "var(--text-heading-weight)",
          letterSpacing: "var(--text-heading-tracking)",
        }],
        number: ["var(--text-number-size)", {
          lineHeight: "var(--text-number-leading)",
          fontWeight: "var(--text-number-weight)",
        }],
        "number-lg": ["var(--text-number-lg-size)", {
          lineHeight: "var(--text-number-lg-leading)",
          fontWeight: "var(--text-number-lg-weight)",
        }],
      },
      borderRadius: {
        none: "var(--radius-none)",
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-xl)",
        full: "var(--radius-full)",
        control: "var(--radius-control)",
        card: "var(--radius-card)",
        popover: "var(--radius-popover)",
        dialog: "var(--radius-dialog)",
        pill: "var(--radius-pill)",
        circular: "var(--radius-circular)",
      },
      screens: {
        narrow: { raw: "(max-width: 768px)" },
        regular: { raw: "(min-width: 768px)" },
        wide: { raw: "(min-width: 1280px)" },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin-slow 1s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

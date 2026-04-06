import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-BPfm77MI.js";import{M as o}from"./index-B8JjA4kB.js";import"./index-yBjzXJbu.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Dipdrfh_.js";import"./index-DrnuSp5j.js";import"./index-BLHw34Di.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function t(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Getting Started"}),`
`,e.jsx(n.h1,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(n.p,{children:"Everything you need to set up a development environment and work in the Lavender Design System codebase."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"environment-setup",children:"Environment Setup"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git clone <repo-url>
cd lavender-storybook
npm install
npm run storybook
`})}),`
`,e.jsxs(n.p,{children:["Storybook launches at ",e.jsx(n.a,{href:"http://localhost:6006",rel:"nofollow",children:"http://localhost:6006"}),". Changes to components and stories hot-reload automatically."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"project-structure",children:"Project Structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`lavender-storybook/
├── .storybook/           # Storybook config (main.js, preview.js)
├── src/
│   ├── components/ui/    # Component source code
│   │   └── Button/
│   │       ├── Button.tsx
│   │       ├── Button.types.ts
│   │       ├── Button.styles.ts   (optional)
│   │       └── index.ts
│   ├── lib/utils.ts      # cn() utility
│   └── styles/globals.css # Design tokens
└── stories/              # Storybook stories & docs
    ├── Welcome.mdx
    ├── DesignTokens.mdx
    └── button.stories.tsx
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"dependencies",children:"Dependencies"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install clsx tailwind-merge lucide-react tailwindcss-animate
npm install recharts  # only if using Chart components
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Package"}),e.jsx(n.th,{children:"Purpose"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"clsx"})," + ",e.jsx(n.code,{children:"tailwind-merge"})]}),e.jsxs(n.td,{children:["The ",e.jsx(n.code,{children:"cn()"})," class-merging utility used by every component"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"lucide-react"})}),e.jsx(n.td,{children:"Icons (chevrons, close, search, spinner, etc.)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"tailwindcss-animate"})}),e.jsx(n.td,{children:"Accordion expand/collapse and spinner animations"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"recharts"})}),e.jsx(n.td,{children:"Only needed for Chart components"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"the-cn-utility",children:["The ",e.jsx(n.code,{children:"cn()"})," Utility"]}),`
`,e.jsxs(n.p,{children:["Create ",e.jsx(n.code,{children:"lib/utils.ts"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`})}),`
`,e.jsxs(n.p,{children:["Every component uses ",e.jsx(n.code,{children:"cn()"})," for class merging. It combines ",e.jsx(n.code,{children:"clsx"})," (conditional classes) with ",e.jsx(n.code,{children:"tailwind-merge"})," (deduplicates conflicting Tailwind utilities)."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"theme-tokens",children:"Theme Tokens"}),`
`,e.jsxs(n.p,{children:["Add the following tokens to your stylesheet (e.g. ",e.jsx(n.code,{children:"globals.css"}),"). These CSS custom properties power the entire color system — components reference them directly, so theming requires zero conditional logic."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: #fafafc;
    --foreground: #575279;
    --card: #ffffff;
    --card-foreground: #575279;
    --popover: #f3f2f7;
    --popover-foreground: #575279;
    --primary: #907aa9;
    --primary-foreground: #ffffff;
    --secondary: #efeef5;
    --secondary-foreground: #575279;
    --muted: #efeef5;
    --muted-foreground: #9893a5;
    --accent: #efeef5;
    --accent-foreground: #575279;
    --destructive: #b4637a;
    --destructive-foreground: #ffffff;
    --border: #dfdee8;
    --input: #dfdee8;
    --ring: #907aa9;
    --chart-1: #907aa9;
    --chart-2: #56949f;
    --chart-3: #286983;
    --chart-4: #ea9d34;
    --chart-5: #d7827e;
    --radius: 0.625rem;
    --sidebar-background: #fafafc;
    --sidebar-foreground: #575279;
    --sidebar-primary: #907aa9;
    --sidebar-primary-foreground: #ffffff;
    --sidebar-accent: #efeef5;
    --sidebar-accent-foreground: #575279;
    --sidebar-border: #dfdee8;
    --sidebar-ring: #907aa9;
  }

  .dark {
    --background: #1e1e2e;
    --foreground: #cdcce0;
    --card: #262639;
    --card-foreground: #cdcce0;
    --popover: #2f2f44;
    --popover-foreground: #cdcce0;
    --primary: #af9ad2;
    --primary-foreground: #1e1e2e;
    --secondary: #282842;
    --secondary-foreground: #cdcce0;
    --muted: #282842;
    --muted-foreground: #6e6c88;
    --accent: #282842;
    --accent-foreground: #cdcce0;
    --destructive: #d4708a;
    --destructive-foreground: #cdcce0;
    --border: #3a3a54;
    --input: #3a3a54;
    --ring: #af9ad2;
    --chart-1: #af9ad2;
    --chart-2: #89bcc6;
    --chart-3: #3a84a4;
    --chart-4: #d9ae6e;
    --chart-5: #d29290;
    --sidebar-background: #1e1e2e;
    --sidebar-foreground: #cdcce0;
    --sidebar-primary: #af9ad2;
    --sidebar-primary-foreground: #1e1e2e;
    --sidebar-accent: #282842;
    --sidebar-accent-foreground: #cdcce0;
    --sidebar-border: #3a3a54;
    --sidebar-ring: #af9ad2;
  }
}

@layer base {
  * { @apply border-border; }
  body { @apply bg-background text-foreground; }
}
`})}),`
`,e.jsxs(n.p,{children:["→ See ",e.jsx(n.strong,{children:"Design Tokens"})," for the full color palette reference with visual swatches."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tailwind-config",children:"Tailwind Config"}),`
`,e.jsxs(n.p,{children:["Map the CSS variables to Tailwind utilities in your ",e.jsx(n.code,{children:"tailwind.config.ts"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import type { Config } from "tailwindcss"

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
        card: { DEFAULT: "var(--card)", foreground: "var(--card-foreground)" },
        popover: { DEFAULT: "var(--popover)", foreground: "var(--popover-foreground)" },
        primary: { DEFAULT: "var(--primary)", foreground: "var(--primary-foreground)" },
        secondary: { DEFAULT: "var(--secondary)", foreground: "var(--secondary-foreground)" },
        muted: { DEFAULT: "var(--muted)", foreground: "var(--muted-foreground)" },
        accent: { DEFAULT: "var(--accent)", foreground: "var(--accent-foreground)" },
        destructive: { DEFAULT: "var(--destructive)", foreground: "var(--destructive-foreground)" },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)", "2": "var(--chart-2)", "3": "var(--chart-3)",
          "4": "var(--chart-4)", "5": "var(--chart-5)",
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
        lavenderDawn: {
          base: "#fafafc", surface: "#ffffff", overlay: "#f3f2f7",
          muted: "#9893a5", subtle: "#797593", text: "#575279",
          love: "#b4637a", gold: "#ea9d34", rose: "#d7827e",
          pine: "#286983", foam: "#56949f", iris: "#907aa9",
          highlightLow: "#efeef5", highlightMed: "#dfdee8", highlightHigh: "#d0cfd9",
        },
        lavenderMoon: {
          base: "#1e1e2e", surface: "#262639", overlay: "#2f2f44",
          muted: "#6e6c88", subtle: "#8e8ca6", text: "#cdcce0",
          love: "#d4708a", gold: "#d9ae6e", rose: "#d29290",
          pine: "#3a84a4", foam: "#89bcc6", iris: "#af9ad2",
          highlightLow: "#282842", highlightMed: "#3a3a54", highlightHigh: "#4c4c65",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "spin-slow": { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin-slow 1s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"themeprovider",children:"ThemeProvider"}),`
`,e.jsx(n.p,{children:"Wrap your app to enable theme switching with localStorage persistence:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ThemeProvider } from "@/components/ui/ThemeProvider"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="lavender-theme">
      {/* your app */}
    </ThemeProvider>
  )
}
`})}),`
`,e.jsxs(n.p,{children:["Toggle programmatically with the ",e.jsx(n.code,{children:"useTheme"})," hook:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useTheme } from "@/components/ui/ThemeProvider"

const { theme, setTheme } = useTheme()
setTheme(theme === "light" ? "dark" : "light")
`})}),`
`,e.jsxs(n.p,{children:["Switching is controlled by the ",e.jsx(n.code,{children:"dark"})," class on the document root:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<html>              <!-- Lavender Dawn -->
<html class="dark"> <!-- Lavender Moon -->
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"typescript-conventions",children:"TypeScript Conventions"}),`
`,e.jsxs(n.p,{children:["Every component is strictly typed. No ",e.jsx(n.code,{children:"any"})," usage is permitted."]}),`
`,e.jsx(n.h3,{id:"file-layout",children:"File layout"}),`
`,e.jsx(n.p,{children:"Each component has a dedicated types file:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`src/components/ui/Button/
├── Button.tsx           # Implementation
├── Button.types.ts      # Props interfaces and type aliases
├── Button.styles.ts     # Variant/size class maps (optional)
└── index.ts             # Barrel exports (components + types)
`})}),`
`,e.jsx(n.h3,{id:"prop-typing",children:"Prop typing"}),`
`,e.jsx(n.p,{children:"Components that wrap a single DOM element extend the corresponding HTML attributes:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Button.types.ts
export type ButtonVariant = "default" | "secondary" | "destructive" | "outline" | "ghost" | "link"
export type ButtonSize = "sm" | "default" | "lg" | "icon"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}
`})}),`
`,e.jsx(n.p,{children:"Data-driven components use generics:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Autocomplete.types.ts
export type AutocompleteProps<T> = {
  fetchSuggestions: (query: string) => Promise<T[]>
  getOptionLabel: (option: T) => string
  onSelect: (option: T) => void
  placeholder?: string
  className?: string
}
`})}),`
`,e.jsx(n.h3,{id:"ref-forwarding",children:"Ref forwarding"}),`
`,e.jsxs(n.p,{children:["All DOM-wrapping components use ",e.jsx(n.code,{children:"React.forwardRef"})," with explicit generics:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return <button ref={ref} className={cn(/* ... */)} {...props} />
  },
)
Button.displayName = "Button"
`})}),`
`,e.jsx(n.h3,{id:"barrel-exports",children:"Barrel exports"}),`
`,e.jsxs(n.p,{children:["Every ",e.jsx(n.code,{children:"index.ts"})," exports both components and types:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export { Button } from "./Button"
export type { ButtonVariant, ButtonSize, ButtonProps } from "./Button.types"
`})}),`
`,e.jsx(n.h3,{id:"strict-rules",children:"Strict rules"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Rule"}),e.jsx(n.th,{children:"Rationale"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["No ",e.jsx(n.code,{children:"any"})]}),e.jsxs(n.td,{children:["Use ",e.jsx(n.code,{children:"unknown"})," + type guards, or use specific library types"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["No implicit ",e.jsx(n.code,{children:"any"})]}),e.jsx(n.td,{children:"Strict mode is on — all parameters must be typed"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["No ",e.jsx(n.code,{children:"@ts-ignore"})]}),e.jsxs(n.td,{children:["Use ",e.jsx(n.code,{children:"@ts-expect-error"})," with a comment if needed"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"import type"})," for type-only imports"]}),e.jsx(n.td,{children:"Prevents runtime import of type-only modules"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"String literal unions over enums"}),e.jsx(n.td,{children:"Lighter, better Storybook controls integration"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"testing",children:"Testing"}),`
`,e.jsxs(n.p,{children:["The project uses ",e.jsx(n.strong,{children:"Storybook interaction tests"})," — ",e.jsx(n.code,{children:"play"})," functions that run in a real browser via Playwright."]}),`
`,e.jsx(n.h3,{id:"setup",children:"Setup"}),`
`,e.jsx(n.p,{children:"Install Playwright browsers (one-time):"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx playwright install chromium
`})}),`
`,e.jsx(n.h3,{id:"commands",children:"Commands"}),`
`,e.jsx(n.p,{children:"Storybook must be running before executing tests."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Script"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"npm run test-storybook"})}),e.jsxs(n.td,{children:["Run all interaction tests against ",e.jsx(n.code,{children:"http://localhost:6006"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"npm run test-storybook:ci"})}),e.jsx(n.td,{children:"CI mode — exits after a single run"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"npm run test-storybook:coverage"})}),e.jsx(n.td,{children:"Run tests with code coverage"})]})]})]}),`
`,e.jsx(n.p,{children:"Filter by file:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run test-storybook -- --testPathPattern="button"
`})}),`
`,e.jsx(n.h3,{id:"viewing-in-the-browser",children:"Viewing in the browser"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Navigate to any story in ",e.jsx(n.strong,{children:"Canvas"})," view (not Docs)"]}),`
`,e.jsxs(n.li,{children:["Open the ",e.jsx(n.strong,{children:"Interactions"})," panel at the bottom"]}),`
`,e.jsxs(n.li,{children:["Each ",e.jsx(n.code,{children:"play"})," function step is listed with pass/fail status"]}),`
`]}),`
`,e.jsx(n.h3,{id:"accessibility-checks",children:"Accessibility checks"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"@storybook/addon-a11y"})," addon runs axe-core on every story. Open the ",e.jsx(n.strong,{children:"Accessibility"})," panel to see results. Enforced rules: ",e.jsx(n.code,{children:"color-contrast"}),", ",e.jsx(n.code,{children:"label"}),", ",e.jsx(n.code,{children:"button-name"}),", ",e.jsx(n.code,{children:"aria-roles"}),", ",e.jsx(n.code,{children:"aria-valid-attr-value"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"building-for-production",children:"Building for Production"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run build-storybook   # outputs to storybook-static/
npm run deploy-storybook  # builds and deploys to GitHub Pages
`})})]})}function j(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{j as default};
//# sourceMappingURL=GettingStarted-BkpJOP5p.js.map

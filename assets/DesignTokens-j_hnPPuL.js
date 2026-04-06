import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-BPfm77MI.js";import{M as o,C as s,a as r,T as l}from"./index-Wc4eDdxD.js";import"./index-yBjzXJbu.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Ba5EwVZ0.js";import"./index-DrnuSp5j.js";import"./index-BLHw34Di.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function d(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Getting Started/Design Tokens"}),`
`,e.jsx(n.h1,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsx(n.p,{children:"Everything you need to adopt the Lavender Design System."}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#themes",children:"Themes"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#quick-setup",children:"Quick Setup"})," — install, ",e.jsx(n.code,{children:"cn()"}),", CSS tokens, Tailwind config, ThemeProvider"]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#semantic-colors",children:"Semantic Colors"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#chart-colors",children:"Chart Colors"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#extended-palette-lavender-dawn",children:"Extended Palette: Lavender Dawn"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#extended-palette-lavender-moon",children:"Extended Palette: Lavender Moon"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#spacing-and-radius",children:"Spacing and Radius"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#typography",children:"Typography"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"themes",children:"Themes"}),`
`,e.jsx(n.h3,{id:"️-lavender-dawn-light",children:"☀️ Lavender Dawn (Light)"}),`
`,e.jsx(n.p,{children:"A warm, soft palette inspired by Rosé Pine Dawn. Cream backgrounds, muted purple foregrounds, and gentle borders."}),`
`,e.jsx(n.h3,{id:"-lavender-moon-dark",children:"🌙 Lavender Moon (Dark)"}),`
`,e.jsx(n.p,{children:"A deep, moody palette inspired by Rosé Pine Moon. Dark purple backgrounds with soft lavender accents."}),`
`,e.jsxs(n.p,{children:["Switching is controlled by the ",e.jsx(n.code,{children:"dark"})," class on the document root:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<html>              <!-- Lavender Dawn -->
<html class="dark"> <!-- Lavender Moon -->
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"quick-setup",children:"Quick Setup"}),`
`,e.jsx(n.h3,{id:"1-install-dependencies",children:"1. Install dependencies"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install clsx tailwind-merge lucide-react tailwindcss-animate
npm install recharts          # only if using Chart components
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Package"}),e.jsx(n.th,{children:"Purpose"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"clsx"})," + ",e.jsx(n.code,{children:"tailwind-merge"})]}),e.jsxs(n.td,{children:["The ",e.jsx(n.code,{children:"cn()"})," class-merging utility used by every component"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"lucide-react"})}),e.jsx(n.td,{children:"Icons (chevrons, close, search, spinner, etc.)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"tailwindcss-animate"})}),e.jsx(n.td,{children:"Accordion expand/collapse and spinner animations"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"recharts"})}),e.jsx(n.td,{children:"Only needed for Chart components"})]})]})]}),`
`,e.jsxs(n.h3,{id:"2-add-the-cn-utility",children:["2. Add the ",e.jsx(n.code,{children:"cn()"})," utility"]}),`
`,e.jsxs(n.p,{children:["Create ",e.jsx(n.code,{children:"lib/utils.ts"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`})}),`
`,e.jsx(n.h3,{id:"3-add-theme-variables-to-your-global-css",children:"3. Add theme variables to your global CSS"}),`
`,e.jsxs(n.p,{children:["Copy the tokens into your stylesheet (e.g. ",e.jsx(n.code,{children:"globals.css"}),"):"]}),`
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
    --muted-foreground: #797593;
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
  }
}

@layer base {
  * { @apply border-border; }
  body { @apply bg-background text-foreground; }
}
`})}),`
`,e.jsx(n.h3,{id:"4-configure-tailwind",children:"4. Configure Tailwind"}),`
`,e.jsxs(n.p,{children:["Map the CSS variables to Tailwind utilities in your ",e.jsx(n.code,{children:"tailwind.config.ts"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
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
export default config
`})}),`
`,e.jsx(n.h3,{id:"5-use-themeprovider",children:"5. Use ThemeProvider"}),`
`,e.jsx(n.p,{children:"Wrap your app to enable theme switching with localStorage persistence:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ThemeProvider } from "@/components/ui/ThemeProvider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="lavender-theme">
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
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"semantic-colors",children:"Semantic Colors"}),`
`,e.jsx(n.p,{children:"The core palette used by every component. Each token resolves to a different value per theme."}),`
`,e.jsxs(s,{children:[e.jsx(r,{title:"background",subtitle:"--background",colors:{Dawn:"#fafafc",Moon:"#1e1e2e"}}),e.jsx(r,{title:"foreground",subtitle:"--foreground",colors:{Dawn:"#575279",Moon:"#cdcce0"}}),e.jsx(r,{title:"card",subtitle:"--card",colors:{Dawn:"#ffffff",Moon:"#262639"}}),e.jsx(r,{title:"primary",subtitle:"--primary",colors:{Dawn:"#907aa9",Moon:"#af9ad2"}}),e.jsx(r,{title:"secondary",subtitle:"--secondary",colors:{Dawn:"#efeef5",Moon:"#282842"}}),e.jsx(r,{title:"muted-foreground",subtitle:"--muted-foreground",colors:{Dawn:"#9893a5",Moon:"#6e6c88"}}),e.jsx(r,{title:"destructive",subtitle:"--destructive",colors:{Dawn:"#b4637a",Moon:"#d4708a"}}),e.jsx(r,{title:"border",subtitle:"--border",colors:{Dawn:"#dfdee8",Moon:"#3a3a54"}}),e.jsx(r,{title:"ring",subtitle:"--ring",colors:{Dawn:"#907aa9",Moon:"#af9ad2"}})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"chart-colors",children:"Chart Colors"}),`
`,e.jsxs(n.p,{children:["Five data-visualization colors tuned for contrast in both themes. Use as ",e.jsx(n.code,{children:'stroke="var(--chart-1)"'})," in Recharts."]}),`
`,e.jsxs(s,{children:[e.jsx(r,{title:"chart-1",subtitle:"Primary series",colors:{Dawn:"#907aa9",Moon:"#af9ad2"}}),e.jsx(r,{title:"chart-2",subtitle:"Secondary series",colors:{Dawn:"#56949f",Moon:"#89bcc6"}}),e.jsx(r,{title:"chart-3",subtitle:"Tertiary series",colors:{Dawn:"#286983",Moon:"#3a84a4"}}),e.jsx(r,{title:"chart-4",subtitle:"Warning / highlight",colors:{Dawn:"#ea9d34",Moon:"#d9ae6e"}}),e.jsx(r,{title:"chart-5",subtitle:"Error / negative",colors:{Dawn:"#d7827e",Moon:"#d29290"}})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"extended-palette-lavender-dawn",children:"Extended Palette: Lavender Dawn"}),`
`,e.jsxs(n.p,{children:["Fixed-hex Tailwind utilities (",e.jsx(n.code,{children:"bg-lavenderDawn-iris"}),", ",e.jsx(n.code,{children:"text-lavenderDawn-love"}),", etc.) for when you need a specific Dawn color regardless of active theme."]}),`
`,e.jsxs(s,{children:[e.jsx(r,{title:"base",subtitle:"lavenderDawn.base",colors:{"":"#fafafc"}}),e.jsx(r,{title:"surface",subtitle:"lavenderDawn.surface",colors:{"":"#ffffff"}}),e.jsx(r,{title:"overlay",subtitle:"lavenderDawn.overlay",colors:{"":"#f3f2f7"}}),e.jsx(r,{title:"muted",subtitle:"lavenderDawn.muted",colors:{"":"#9893a5"}}),e.jsx(r,{title:"text",subtitle:"lavenderDawn.text",colors:{"":"#575279"}}),e.jsx(r,{title:"love",subtitle:"lavenderDawn.love",colors:{"":"#b4637a"}}),e.jsx(r,{title:"gold",subtitle:"lavenderDawn.gold",colors:{"":"#ea9d34"}}),e.jsx(r,{title:"rose",subtitle:"lavenderDawn.rose",colors:{"":"#d7827e"}}),e.jsx(r,{title:"pine",subtitle:"lavenderDawn.pine",colors:{"":"#286983"}}),e.jsx(r,{title:"foam",subtitle:"lavenderDawn.foam",colors:{"":"#56949f"}}),e.jsx(r,{title:"iris",subtitle:"lavenderDawn.iris",colors:{"":"#907aa9"}}),e.jsx(r,{title:"highlightLow",subtitle:"lavenderDawn.highlightLow",colors:{"":"#efeef5"}}),e.jsx(r,{title:"highlightMed",subtitle:"lavenderDawn.highlightMed",colors:{"":"#dfdee8"}}),e.jsx(r,{title:"highlightHigh",subtitle:"lavenderDawn.highlightHigh",colors:{"":"#d0cfd9"}})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"extended-palette-lavender-moon",children:"Extended Palette: Lavender Moon"}),`
`,e.jsxs(n.p,{children:["Fixed-hex Tailwind utilities for the dark theme (",e.jsx(n.code,{children:"bg-lavenderMoon-iris"}),", ",e.jsx(n.code,{children:"text-lavenderMoon-love"}),", etc.)."]}),`
`,e.jsxs(s,{children:[e.jsx(r,{title:"base",subtitle:"lavenderMoon.base",colors:{"":"#1e1e2e"}}),e.jsx(r,{title:"surface",subtitle:"lavenderMoon.surface",colors:{"":"#262639"}}),e.jsx(r,{title:"overlay",subtitle:"lavenderMoon.overlay",colors:{"":"#2f2f44"}}),e.jsx(r,{title:"muted",subtitle:"lavenderMoon.muted",colors:{"":"#6e6c88"}}),e.jsx(r,{title:"text",subtitle:"lavenderMoon.text",colors:{"":"#cdcce0"}}),e.jsx(r,{title:"love",subtitle:"lavenderMoon.love",colors:{"":"#d4708a"}}),e.jsx(r,{title:"gold",subtitle:"lavenderMoon.gold",colors:{"":"#d9ae6e"}}),e.jsx(r,{title:"rose",subtitle:"lavenderMoon.rose",colors:{"":"#d29290"}}),e.jsx(r,{title:"pine",subtitle:"lavenderMoon.pine",colors:{"":"#3a84a4"}}),e.jsx(r,{title:"foam",subtitle:"lavenderMoon.foam",colors:{"":"#89bcc6"}}),e.jsx(r,{title:"iris",subtitle:"lavenderMoon.iris",colors:{"":"#af9ad2"}}),e.jsx(r,{title:"highlightLow",subtitle:"lavenderMoon.highlightLow",colors:{"":"#282842"}}),e.jsx(r,{title:"highlightMed",subtitle:"lavenderMoon.highlightMed",colors:{"":"#3a3a54"}}),e.jsx(r,{title:"highlightHigh",subtitle:"lavenderMoon.highlightHigh",colors:{"":"#4c4c65"}})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"spacing-and-radius",children:"Spacing and Radius"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Token"}),e.jsx(n.th,{children:"Value"}),e.jsx(n.th,{children:"Tailwind"}),e.jsx(n.th,{children:"Usage"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"--radius"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.625rem"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"rounded-lg"})}),e.jsx(n.td,{children:"Cards, buttons, inputs"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{}),e.jsx(n.td,{children:e.jsx(n.code,{children:"calc(var(--radius) - 2px)"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"rounded-md"})}),e.jsx(n.td,{children:"Inner elements"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{}),e.jsx(n.td,{children:e.jsx(n.code,{children:"calc(var(--radius) - 4px)"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"rounded-sm"})}),e.jsx(n.td,{children:"Badges, pills"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"typography",children:"Typography"}),`
`,e.jsx(l,{fontSizes:["0.75rem","0.875rem","1rem","1.125rem","1.25rem","1.5rem"],fontWeight:400,sampleText:"Lavender Finance",fontFamily:"Inter, ui-sans-serif, system-ui, sans-serif"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Class"}),e.jsx(n.th,{children:"Size"}),e.jsx(n.th,{children:"Typical usage"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"text-xs"})}),e.jsx(n.td,{children:"12px"}),e.jsx(n.td,{children:"Tooltips, chart labels, badges"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"text-sm"})}),e.jsx(n.td,{children:"14px"}),e.jsx(n.td,{children:"Body text, form labels, select options"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"text-base"})}),e.jsx(n.td,{children:"16px"}),e.jsx(n.td,{children:"Modal titles, tab triggers"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"text-lg"})}),e.jsx(n.td,{children:"18px"}),e.jsx(n.td,{children:"Section headings"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"text-xl"})}),e.jsx(n.td,{children:"20px"}),e.jsx(n.td,{children:"Page headings"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"text-2xl"})}),e.jsx(n.td,{children:"24px"}),e.jsx(n.td,{children:"Hero headings"})]})]})]})]})}function b(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(d,{...t})}):d(t)}export{b as default};
//# sourceMappingURL=DesignTokens-j_hnPPuL.js.map

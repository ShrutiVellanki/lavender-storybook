import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-BPfm77MI.js";import{M as i}from"./index-Wc4eDdxD.js";import"./index-yBjzXJbu.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Ba5EwVZ0.js";import"./index-DrnuSp5j.js";import"./index-BLHw34Di.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function t(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Getting Started/Introduction"}),`
`,e.jsx(n.h1,{id:"lavender-design-system",children:"Lavender Design System"}),`
`,e.jsxs(n.p,{children:["A themed, accessible component library powering ",e.jsx(n.a,{href:"https://lavender-finance.vercel.app",rel:"nofollow",children:"Lavender Finance"}),". 24+ production-ready React components with a full design token system, dual-theme support, and comprehensive Storybook documentation."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"system-architecture",children:"System Architecture"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Design Tokens (CSS custom properties)
  ├── Semantic tokens (background, foreground, primary, border…)
  ├── Chart tokens (chart-1 through chart-5)
  ├── Extended palettes (lavenderDawn.*, lavenderMoon.*)
  └── Scale tokens (radius, spacing via Tailwind)
        │
        ▼
Tailwind Config (maps tokens → utilities)
        │
        ▼
Primitives & Utilities
  ├── cn() — class composition (clsx + tailwind-merge)
  ├── ThemeProvider — context + localStorage persistence
  └── ThemeSwitcher — toggle component
        │
        ▼
UI Components
  ├── Inputs:     Button, Dropdown, Autocomplete, Combobox, PinCode, StarRating
  ├── Layout:     Card, Modal, Accordion, Tabs, Tooltip
  ├── Data:       TransactionList, VirtualizedList, StatCard, Chart
  ├── Feedback:   Badge, ProgressBar, Loading, ErrorDisplay, Skeleton
  └── Forms:      CreditCardForm, PassportForm
        │
        ▼
Product (Lavender Finance)
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"token-layers",children:"Token Layers"}),`
`,e.jsx(n.p,{children:"The system uses three token layers that allow components to work across themes without any conditional logic:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Layer"}),e.jsx(n.th,{children:"Example"}),e.jsx(n.th,{children:"Purpose"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Semantic"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"--primary"}),", ",e.jsx(n.code,{children:"--border"}),", ",e.jsx(n.code,{children:"--muted"})]}),e.jsx(n.td,{children:"Theme-aware values that swap automatically between Dawn and Moon"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Chart"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"--chart-1"})," through ",e.jsx(n.code,{children:"--chart-5"})]}),e.jsx(n.td,{children:"Data visualization colors tuned for contrast in both themes"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Extended"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"lavenderDawn.iris"}),", ",e.jsx(n.code,{children:"lavenderMoon.foam"})]}),e.jsx(n.td,{children:"Fixed-hex values for when a specific color is needed regardless of theme"})]})]})]}),`
`,e.jsxs(n.p,{children:["→ See ",e.jsx(n.strong,{children:"Getting Started / Design Tokens"})," for the full palette and setup guide."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"component-inventory",children:"Component Inventory"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Category"}),e.jsx(n.th,{children:"Components"}),e.jsx(n.th,{children:"Count"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Input"})}),e.jsx(n.td,{children:"Button, Dropdown, Autocomplete, Combobox, PinCode, StarRating"}),e.jsx(n.td,{children:"6"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Layout"})}),e.jsx(n.td,{children:"Card, Modal, Accordion, Tabs, Tooltip"}),e.jsx(n.td,{children:"5"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Data Display"})}),e.jsx(n.td,{children:"TransactionList, VirtualizedList, StatCard, Chart (Area/Bar/Line)"}),e.jsx(n.td,{children:"4"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Feedback"})}),e.jsx(n.td,{children:"Badge, ProgressBar, Loading, ErrorDisplay, Skeleton, Pagination"}),e.jsx(n.td,{children:"6"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Forms"})}),e.jsx(n.td,{children:"CreditCardForm, PassportForm"}),e.jsx(n.td,{children:"2"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Theme"})}),e.jsx(n.td,{children:"ThemeProvider, ThemeSwitcher"}),e.jsx(n.td,{children:"2"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"design-decisions",children:"Design Decisions"}),`
`,e.jsx(n.h3,{id:"accessibility-first",children:"Accessibility First"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"All interactive components support full keyboard navigation"}),`
`,e.jsxs(n.li,{children:["Focus rings use ",e.jsx(n.code,{children:"--ring"})," token for theme consistency"]}),`
`,e.jsx(n.li,{children:"ARIA attributes on compound components (Accordion, Tabs, Modal, Tooltip)"}),`
`,e.jsx(n.li,{children:"Color contrast ratios meet WCAG AA in both themes"}),`
`]}),`
`,e.jsx(n.h3,{id:"composable-architecture",children:"Composable Architecture"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Each component is a self-contained directory (",e.jsx(n.code,{children:"ComponentName.tsx"}),", ",e.jsx(n.code,{children:"ComponentName.types.ts"}),", ",e.jsx(n.code,{children:"index.ts"}),")"]}),`
`,e.jsxs(n.li,{children:["Variant logic separated into ",e.jsx(n.code,{children:"*.styles.ts"})," files using ",e.jsx(n.code,{children:"cva"}),"-style patterns"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cn()"})," utility enables safe class overrides without specificity wars"]}),`
`]}),`
`,e.jsx(n.h3,{id:"theme-system",children:"Theme System"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["CSS custom properties on ",e.jsx(n.code,{children:":root"})," / ",e.jsx(n.code,{children:".dark"})," — zero JavaScript runtime cost for theming"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ThemeProvider"})," context for programmatic control with ",e.jsx(n.code,{children:"localStorage"})," persistence"]}),`
`,e.jsxs(n.li,{children:["Storybook's ",e.jsx(n.code,{children:"withThemeByClassName"})," decorator for live theme switching in docs"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"quick-start",children:"Quick Start"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install clsx tailwind-merge lucide-react tailwindcss-animate
`})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Copy the component directory into your project"}),`
`,e.jsxs(n.li,{children:["Add ",e.jsx(n.code,{children:"cn()"})," utility and theme tokens (see ",e.jsx(n.strong,{children:"Tokens / Getting Started"}),")"]}),`
`,e.jsxs(n.li,{children:["Wrap your app in ",e.jsx(n.code,{children:"ThemeProvider"})]}),`
`,e.jsx(n.li,{children:"Use components — they respond to the active theme automatically"}),`
`]})]})}function g(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{g as default};
//# sourceMappingURL=Introduction-Dwqk9yJu.js.map

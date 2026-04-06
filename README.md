# Lavender Design System

**[Live Storybook](https://shrutivellanki.github.io/lavender-storybook/)**

A themed, accessible React component library with a full design token system, dual-theme support, and comprehensive Storybook documentation.

## System Architecture

```
tokens/              CSS custom properties on :root / .dark
  ├── Semantic       background, foreground, primary, border, ring…
  ├── Chart          chart-1 through chart-5 (data-viz palette)
  ├── Sidebar        sidebar-background, sidebar-primary, sidebar-border…
  └── Extended       lavenderDawn.* / lavenderMoon.* (fixed-hex)
        │
        ▼
tailwind.config.ts   Maps tokens → Tailwind utilities
        │
        ▼
primitives/
  ├── cn()           Class composition (clsx + tailwind-merge)
  ├── ThemeProvider   React context + localStorage persistence
  └── ThemeSwitcher   Toggle component
        │
        ▼
components/ui/       25 production components
  ├── Inputs         Button, Dropdown, Autocomplete, Combobox, PinCode, StarRating
  ├── Layout         Card, Modal, Accordion, Tabs, Tooltip
  ├── Data Display   TransactionList, VirtualizedList, StatCard, Chart, ProgressBar
  ├── Information    Badge, Loading, ErrorDisplay, Skeleton, Pagination
  └── Forms          CreditCardForm, PassportForm
```

## Token System

Three layers that allow components to work across themes with zero conditional logic:

| Layer | Example | Purpose |
|-------|---------|---------|
| **Semantic** | `--primary`, `--border`, `--muted` | Theme-aware — swaps between Dawn/Moon automatically |
| **Chart** | `--chart-1` … `--chart-5` | Data-viz colors tuned for contrast in both themes |
| **Extended** | `lavenderDawn.iris`, `lavenderMoon.foam` | Fixed-hex values for when you need a specific color regardless of theme |

Themes are controlled by the `dark` class on the document root. No JavaScript runtime cost.

## Component Architecture

Each component follows a consistent pattern:

```
src/components/ui/Button/
  ├── Button.tsx           # Component implementation
  ├── Button.types.ts      # TypeScript interfaces
  ├── Button.styles.ts     # Variant logic (cva-style)
  └── index.ts             # Public export
```

- **Variant logic** separated into `*.styles.ts` for maintainability
- **`cn()` utility** enables safe class overrides without specificity issues
- **Theme tokens** used for all colors — components adapt to Dawn/Moon automatically

## Accessibility

- Full keyboard navigation on all interactive components
- ARIA attributes on compound components (Accordion, Tabs, Modal, Tooltip)
- Focus rings using the `--ring` token for theme consistency
- Color contrast ratios meet WCAG AA in both themes

## Storybook Documentation

Every component has an autodocs page with:
- Interactive controls for prop exploration
- Multiple story variants showing real-world usage
- Interaction tests (`play` functions) that run headlessly in CI
- Theme switching via the toolbar (Lavender Dawn / Lavender Moon)

The Storybook also includes:
- **Welcome** — problem statement and design system overview
- **Getting Started** — environment setup, tokens, Tailwind config, TypeScript conventions, testing
- **Contributing** — how to add components, write stories, and write interaction tests
- **Design Tokens** — full color palette reference with visual swatches

## Tech Stack

| Tool | Role |
|------|------|
| React 18 | Component runtime |
| TypeScript | Static typing (strict, no `any`) |
| Storybook 8.6 | Documentation, visual testing, interaction tests |
| Tailwind CSS 3.4 | Utility-first styling via CSS custom properties |
| Recharts | Chart primitives |
| Lucide React | Icons |
| clsx + tailwind-merge | Classname composition (`cn()`) |
| tailwindcss-animate | Accordion and spinner animations |

## Getting Started

```bash
npm install
npm run storybook        # http://localhost:6006
```

Build and deploy:

```bash
npm run build-storybook   # outputs to storybook-static/
npm run deploy-storybook  # builds and deploys to GitHub Pages
```

Run interaction tests:

```bash
npx playwright install chromium  # one-time setup
npm run test-storybook           # requires Storybook running
```

## Cross-Component Dependencies

| Component | Depends on |
|-----------|-----------|
| TransactionList | Pagination |
| ThemeSwitcher | ThemeProvider (`useTheme` hook) |

## Project Structure

```
src/
├── components/ui/          # One directory per component (25)
├── lib/
│   └── utils.ts            # cn() helper
└── styles/
    └── globals.css          # Tailwind base + theme tokens (Dawn + Moon)
stories/
├── Welcome.mdx              # Problem statement and overview
├── GettingStarted.mdx       # Setup, TypeScript, testing
├── Contributing.mdx         # How to add/modify components
├── Changelog.mdx            # Version history
├── DesignTokens.mdx         # Color palette reference
└── *.stories.tsx            # One story file per component
.storybook/
├── main.js                  # Storybook config, Vite alias, addons
└── preview.js               # Global styles, theme decorator, a11y rules
```

# Lavender Design System

**[Live Storybook](https://lavender-storybook.vercel.app)** · **[Lavender Finance (consumer)](https://lavender-finance.vercel.app)**

A themed, accessible React component library with a full design token system, dual-theme support, and comprehensive Storybook documentation. Powers the Lavender Finance dashboard.

## System Architecture

```
tokens/              CSS custom properties on :root / .dark
  ├── Semantic       background, foreground, primary, border, ring…
  ├── Chart          chart-1 through chart-5 (data-viz palette)
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
components/ui/       24+ production components
  ├── Inputs         Button, Dropdown, Autocomplete, Combobox, PinCode, StarRating
  ├── Layout         Card, Modal, Accordion, Tabs, Tooltip
  ├── Data           TransactionList, VirtualizedList, StatCard, Chart
  ├── Feedback       Badge, ProgressBar, Loading, ErrorDisplay, Skeleton, Pagination
  └── Forms          CreditCardForm, PassportForm
        │
        ▼
product/             Lavender Finance dashboard
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
- Theme switching via the toolbar (Lavender Dawn / Lavender Moon)

The Storybook also includes:
- **Introduction** — system overview, architecture, design decisions
- **Tokens / Getting Started** — full setup guide, color palettes, spacing, typography

## Tech Stack

| Tool | Role |
|------|------|
| React 18 | Component runtime |
| TypeScript | Static typing |
| Storybook 8 | Documentation and visual testing |
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

Build a static site:

```bash
npm run build-storybook  # outputs to storybook-static/
```

## Usage

Copy a component directory into your project along with `src/lib/utils.ts` and the theme tokens from `src/styles/globals.css`.

```bash
npm install clsx tailwind-merge lucide-react tailwindcss-animate
npm install recharts  # only if using Chart components
```

See the **Tokens / Getting Started** page in Storybook for detailed setup instructions.

## Cross-Component Dependencies

| Component | Depends on |
|-----------|-----------|
| TransactionList | Pagination |
| ThemeSwitcher | ThemeProvider (`useTheme` hook) |

## Project Structure

```
src/
├── components/ui/          # One directory per component (24+)
├── lib/
│   └── utils.ts            # cn() helper
└── styles/
    └── globals.css          # Tailwind base + theme tokens (Dawn + Moon)
stories/
├── Introduction.mdx         # System overview and architecture
├── DesignTokens.mdx         # Token reference, palettes, setup guide
└── *.stories.tsx            # One story file per component
.storybook/
├── main.js                  # Storybook config, Vite alias
└── preview.js               # Global styles, theme decorator
```

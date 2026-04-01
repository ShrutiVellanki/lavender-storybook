# Lavender Storybook

A themed, copy-paste React component library documented with Storybook. Built as the design system for [Lavender Finance](https://github.com/ShrutiVellanki/lavender-finance).

## Screenshots

### Component Stories

<p>
  <img src="./docs/screenshots/storybook.png" alt="Storybook" width="720" />
</p>

### Design Tokens

<p>
  <img src="./docs/screenshots/design-tokens.png" alt="Design Tokens" width="720" />
</p>

### Interactive Components

<p>
  <img src="./docs/screenshots/components.png" alt="Components" width="720" />
</p>

## Tech Stack

- **React 18** with TypeScript
- **Storybook 8** for component documentation and visual testing
- **Tailwind CSS v4** for utility-first styling
- **Recharts** (chart components)
- **Lucide React** for icons

## Components

| Component | Description |
|---|---|
| Accordion | Collapsible content sections with keyboard navigation |
| Autocomplete | Type-ahead search with async suggestions and blur-clear |
| Badge | Status and category labels with icon support |
| Button | Primary, outline, ghost, link, and danger variants |
| Card | Container with header, title, and content slots |
| Chart | Composable chart container, tooltip, and legend |
| Combobox | Searchable select with custom `renderOption` / `renderValue` |
| CreditCardForm | Multi-field card input with live preview and flip animation |
| Dropdown / Select | Custom listbox with `renderOption`, `renderValue`, `hideLabel` |
| ErrorDisplay | Error state with retry action |
| LanguageSwitcher | Toggle between supported locales |
| Loading | Spinner with optional message |
| Modal | Dialog overlay with focus trapping and keyboard dismiss |
| Pagination | Page navigation with previous / next and page numbers |
| PassportForm | Identity verification form with country-specific validation |
| PinCode | Numeric PIN input with individual digit fields |
| ProgressBar | Horizontal bar with label, auto-variant coloring |
| Sidebar | Collapsible navigation with brand, items, footer, and tooltips |
| StarRating | Interactive star rating input |
| StatCard | KPI card with label, value, icon, trend, and description |
| Tabs | Accessible tabbed interface with keyboard arrow navigation |
| ThemeProvider | Context provider for light / dark theme state |
| ThemeSwitcher | Toggle button between Lavender Dawn and Lavender Moon |
| Tooltip | Hover / focus tooltip with configurable placement |
| TransactionList | Formatted transaction row display |
| VirtualizedList | Windowed rendering for large lists |

## Theming

All components use **Lavender Dawn** (light) and **Lavender Moon** (dark) theme tokens defined as CSS custom properties. Colors, spacing, and typography are documented in the **Design Tokens** Storybook page.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install and Run Storybook

```bash
npm install
npm run storybook
```

Storybook starts at `http://localhost:6006`.

### Build Static Storybook

```bash
npm run build-storybook
```

Output is written to `storybook-static/`.

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   └── ui/                 # All UI components (directory-per-component)
│       ├── Accordion/
│       │   ├── Accordion.tsx
│       │   ├── Accordion.types.ts
│       │   └── index.ts
│       ├── Button/
│       ├── Card/
│       ├── ...
│       └── chart/
├── lib/
│   └── utils.ts            # cn() helper (clsx + tailwind-merge)
└── index.css               # Tailwind base + theme tokens
stories/
├── *.stories.tsx            # Component stories
└── DesignTokens.mdx         # Design token documentation
.storybook/
├── main.js                  # Storybook config
└── preview.ts               # Global decorators and theme setup
```

## Usage

This is a **copy-paste** component library. To use a component in your project:

1. Copy the component directory (e.g. `src/components/ui/Button/`) into your project
2. Ensure your project has the Lavender theme tokens in your CSS (see `src/index.css`)
3. Import and use — no package installation required

## Future Improvements

- NPM package publishing
- Additional component variants
- Figma token sync
- Automated visual regression testing

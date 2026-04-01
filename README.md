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

## Purpose

Lavender Storybook is the single source of truth for every UI component used in [Lavender Finance](https://github.com/ShrutiVellanki/lavender-finance). Components are copied directly into consuming projects rather than installed as a package.

Use this repo to:

- Browse and interact with every component in isolation
- Reference prop APIs, variants, and accessibility behaviour
- Copy components into your own project with the Lavender theme

## Tech Stack

| Tool | Role |
|---|---|
| **React 18** | Component runtime |
| **TypeScript** | Static typing |
| **Storybook 8** | Component documentation and visual testing |
| **Tailwind CSS v4** | Utility-first styling via CSS custom properties |
| **Recharts** | Chart primitives (bar, line, area) |
| **Lucide React** | Icon library |
| **clsx + tailwind-merge** | Classname composition (`cn()` helper) |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install and Run

```bash
npm install
npm run storybook
```

Storybook starts at [http://localhost:6006](http://localhost:6006).

### Build for Production

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
│   └── ui/                     # All UI components (directory-per-component)
│       ├── Accordion/
│       │   ├── Accordion.tsx
│       │   ├── Accordion.types.ts
│       │   └── index.ts
│       ├── Button/
│       ├── Card/
│       ├── Chart/
│       ├── Combobox/
│       ├── CreditCardForm/
│       ├── Dropdown/
│       ├── ...
│       └── VirtualizedList/
├── lib/
│   └── utils.ts                # cn() helper (clsx + tailwind-merge)
└── index.css                   # Tailwind base + Lavender theme tokens
stories/
├── accordion.stories.tsx       # One story file per component
├── button.stories.tsx
├── ...
├── DesignTokens.mdx            # Design token reference page
├── Introduction.mdx            # Library overview (hidden from sidebar)
├── GettingStarted.mdx          # Onboarding guide (hidden from sidebar)
└── Theming.mdx                 # Theming deep-dive (hidden from sidebar)
.storybook/
├── main.js                     # Storybook config and story globs
└── preview.ts                  # Global decorators, theme setup
```

## Theming

All components ship with two themes:

- **Lavender Dawn** — light mode
- **Lavender Moon** — dark mode

Theme tokens are defined as CSS custom properties in `src/index.css`. Colors, spacing, typography, and border radii are documented on the **Design Tokens** page inside Storybook.

## How to Add a New Component

1. **Create the component folder**

```
src/components/ui/MyComponent/
├── MyComponent.tsx
├── MyComponent.types.ts
└── index.ts
```

2. **Implement the component** in `MyComponent.tsx` using the Lavender theme tokens and the `cn()` utility for classnames.

3. **Define the prop types** in `MyComponent.types.ts`.

4. **Add a barrel export** in `index.ts`:

```ts
export { MyComponent } from "./MyComponent";
export type { MyComponentProps } from "./MyComponent.types";
```

5. **Write a story** at `stories/my-component.stories.tsx`:

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { MyComponent } from "../src/components/ui/MyComponent";

const meta: Meta<typeof MyComponent> = {
  title: "Components/MyComponent",
  component: MyComponent,
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Default: Story = {
  args: { /* default props */ },
};
```

6. **Verify** — run `npm run storybook` and confirm the story renders in both Dawn and Moon themes.

## Usage

To use a component in another project:

1. Copy the component directory (e.g. `src/components/ui/Button/`) into your project
2. Copy `src/lib/utils.ts` (the `cn()` helper used by nearly every component)
3. Copy the Lavender theme tokens from `src/index.css` into your global stylesheet

**Required peer dependencies** — these must be installed in your project:

| Package | Used by |
|---|---|
| `clsx` | `cn()` utility |
| `tailwind-merge` | `cn()` utility |
| `lucide-react` | Most components (icons) |
| `recharts` | Chart components only |

Some components depend on other components in this library:

| Component | Also requires |
|---|---|
| TransactionList | Pagination |
| ThemeSwitcher | ThemeProvider |

## Related

- [Lavender Finance](https://github.com/ShrutiVellanki/lavender-finance) — the personal finance dashboard that consumes this library

## Future Improvements

- NPM package publishing
- Additional component variants
- Figma token sync
- Automated visual regression testing

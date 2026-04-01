# Lavender Storybook

The design system behind [Lavender Finance](https://github.com/ShrutiVellanki/lavender-finance). Browse, test, and copy themed React components documented with Storybook.

## Screenshots

<p>
  <img src="./docs/screenshots/storybook.png" alt="Storybook" width="720" />
</p>

<p>
  <img src="./docs/screenshots/design-tokens.png" alt="Design Tokens" width="720" />
</p>

<p>
  <img src="./docs/screenshots/components.png" alt="Components" width="720" />
</p>

## Tech Stack

| Tool | Role |
|---|---|
| React 18 | Component runtime |
| TypeScript | Static typing |
| Storybook 8 | Documentation and visual testing |
| Tailwind CSS v4 | Utility-first styling via CSS custom properties |
| Recharts | Chart primitives |
| Lucide React | Icons |
| clsx + tailwind-merge | Classname composition (`cn()`) |

## Getting Started

```bash
npm install
npm run storybook        # http://localhost:6006
```

Build a static site:

```bash
npm run build-storybook  # outputs to storybook-static/
```

## Project Structure

```
src/
├── components/ui/          # One directory per component
│   ├── Accordion/
│   │   ├── Accordion.tsx
│   │   ├── Accordion.types.ts
│   │   └── index.ts
│   ├── Button/
│   ├── Card/
│   ├── Chart/
│   ├── Combobox/
│   ├── CreditCardForm/
│   ├── Dropdown/
│   ├── Modal/
│   ├── Pagination/
│   ├── ...
│   └── VirtualizedList/
├── lib/
│   └── utils.ts            # cn() helper
└── index.css               # Tailwind base + theme tokens
stories/
├── *.stories.tsx            # One story file per component
└── DesignTokens.mdx         # Getting Started — setup, themes, color palettes
.storybook/
├── main.js
└── preview.ts
```

## Theming

Two built-in themes defined as CSS custom properties in `src/index.css`:

- **Lavender Dawn** — light
- **Lavender Moon** — dark

Full setup instructions, color palettes, and token reference are on the **Getting Started** page inside Storybook.

## Adding a Component

1. Create `src/components/ui/MyComponent/` with `MyComponent.tsx`, `MyComponent.types.ts`, and `index.ts`.
2. Use `cn()` for classnames and Lavender theme tokens for styling.
3. Add `stories/my-component.stories.tsx`:

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { MyComponent } from "../src/components/ui/MyComponent";

const meta: Meta<typeof MyComponent> = {
  title: "Components/MyComponent",
  component: MyComponent,
};
export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Default: Story = { args: {} };
```

4. Verify it renders in both themes.

## Usage

Copy a component directory into your project along with `src/lib/utils.ts` and the theme tokens from `src/index.css`.

**Peer dependencies:**

- `clsx`, `tailwind-merge` — required by `cn()`
- `lucide-react` — used by most components for icons
- `recharts` — only needed for Chart components

**Cross-component dependencies:**

- TransactionList requires Pagination
- ThemeSwitcher requires ThemeProvider

## Related

[Lavender Finance](https://github.com/ShrutiVellanki/lavender-finance) — the app that consumes this library.

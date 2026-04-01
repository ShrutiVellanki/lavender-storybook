# Lavender Storybook

**[Live Demo](https://lavender-storybook.vercel.app)**

The design system behind [Lavender Finance](https://github.com/ShrutiVellanki/lavender-finance). Browse, test, and copy themed React components documented with Storybook.



## Tech Stack


| Tool                  | Role                                            |
| --------------------- | ----------------------------------------------- |
| React 18              | Component runtime                               |
| TypeScript            | Static typing                                   |
| Storybook 8           | Documentation and visual testing                |
| Tailwind CSS 3.4      | Utility-first styling via CSS custom properties |
| Recharts              | Chart primitives                                |
| Lucide React          | Icons                                           |
| clsx + tailwind-merge | Classname composition (`cn()`)                  |
| tailwindcss-animate   | Accordion and spinner animations                |


## Getting Started

```bash
npm install
npm run storybook        # http://localhost:6006
```

Build a static site:

```bash
npm run build-storybook  # outputs to storybook-static/
```

## Theming

Two built-in themes defined as CSS custom properties in `src/index.css`:

- **Lavender Dawn** — light
- **Lavender Moon** — dark

Full setup instructions, color palettes, and token reference are on the **Getting Started** page inside Storybook.



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
└── styles/
    └── globals.css          # Tailwind base + theme tokens
stories/
├── *.stories.tsx            # One story file per component
└── DesignTokens.mdx         # Getting Started — setup, themes, color palettes
.storybook/
├── main.js
└── preview.ts
```

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

1. Verify it renders in both themes.



## Usage

Copy a component directory into your project along with `src/lib/utils.ts` and the theme tokens from `src/styles/globals.css`.

**Peer dependencies:**


| Package                   | Required by                                                                                                                      |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `clsx` + `tailwind-merge` | `cn()` utility — used by almost every component                                                                                  |
| `lucide-react`            | Accordion, Autocomplete, Combobox, CreditCardForm, Dropdown, ErrorDisplay, Loading, Modal, Pagination, StarRating, ThemeSwitcher |
| `tailwindcss-animate`     | Tailwind plugin for accordion expand/collapse and spinner animations                                                             |
| `recharts`                | Chart components only                                                                                                            |


**Cross-component dependencies:**


| Component       | Depends on                      |
| --------------- | ------------------------------- |
| TransactionList | Pagination                      |
| ThemeSwitcher   | ThemeProvider (`useTheme` hook) |





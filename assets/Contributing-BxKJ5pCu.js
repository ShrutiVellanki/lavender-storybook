import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as r}from"./index-BPfm77MI.js";import{M as o}from"./index-Wc4eDdxD.js";import"./index-yBjzXJbu.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Ba5EwVZ0.js";import"./index-DrnuSp5j.js";import"./index-BLHw34Di.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Getting Started/Contributing"}),`
`,e.jsx(n.h1,{id:"contributing",children:"Contributing"}),`
`,e.jsx(n.p,{children:"How to add or modify components in the Lavender Design System."}),`
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
    ├── Introduction.mdx
    ├── DesignTokens.mdx
    └── button.stories.tsx
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"adding-a-new-component",children:"Adding a New Component"}),`
`,e.jsx(n.h3,{id:"1-create-the-component-directory",children:"1. Create the component directory"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`src/components/ui/MyComponent/
├── MyComponent.tsx        # Component implementation
├── MyComponent.types.ts   # TypeScript interfaces
├── MyComponent.styles.ts  # Variant styles (if using cva pattern)
└── index.ts               # Public exports
`})}),`
`,e.jsx(n.h3,{id:"2-follow-existing-conventions",children:"2. Follow existing conventions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"cn()"})," from ",e.jsx(n.code,{children:"@/lib/utils"})," for class merging"]}),`
`,e.jsxs(n.li,{children:["Source colors from CSS custom properties (",e.jsx(n.code,{children:"var(--primary)"}),", etc.) — never hardcode hex values"]}),`
`,e.jsxs(n.li,{children:["Forward refs with ",e.jsx(n.code,{children:"React.forwardRef"})," on all DOM-wrapping components"]}),`
`,e.jsxs(n.li,{children:["Export types alongside the component from ",e.jsx(n.code,{children:"index.ts"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"3-write-stories",children:"3. Write stories"}),`
`,e.jsxs(n.p,{children:["Create ",e.jsx(n.code,{children:"stories/my-component.stories.tsx"})," with at minimum:"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Story"}),e.jsx(n.th,{children:"Purpose"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Playground"})}),e.jsxs(n.td,{children:["All props wired to Storybook controls via ",e.jsx(n.code,{children:"args"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Feature stories"})}),e.jsx(n.td,{children:"One story per visual variant, state, or behavior"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.strong,{children:"Recipe"})," (optional)"]}),e.jsx(n.td,{children:"Combine with other components in a real-world layout"})]})]})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import type { Meta, StoryObj } from "@storybook/react"
import { MyComponent } from "@/components/ui/MyComponent"

const meta: Meta<typeof MyComponent> = {
  title: "Category/MyComponent",    // Use a functional group
  component: MyComponent,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}
export default meta
type Story = StoryObj<typeof MyComponent>

export const Playground: Story = {
  args: { /* default prop values */ },
}
`})}),`
`,e.jsx(n.h3,{id:"4-choose-the-right-sidebar-group",children:"4. Choose the right sidebar group"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Group"}),e.jsx(n.th,{children:"When to use"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Inputs/"})}),e.jsx(n.td,{children:"Buttons, selects, text fields, toggles — anything that captures user input"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Layout/"})}),e.jsx(n.td,{children:"Containers, modals, accordions, tabs — structural components"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Data Display/"})}),e.jsx(n.td,{children:"Tables, lists, charts, stat cards — components that render data"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Feedback/"})}),e.jsx(n.td,{children:"Badges, progress bars, loaders, skeletons, error states"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Forms/"})}),e.jsx(n.td,{children:"Multi-field composite forms"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Theme/"})}),e.jsx(n.td,{children:"Theme providers, switchers, and utilities"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"modifying-an-existing-component",children:"Modifying an Existing Component"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Edit the component in ",e.jsx(n.code,{children:"src/components/ui/ComponentName/"})]}),`
`,e.jsxs(n.li,{children:["Update types in ",e.jsx(n.code,{children:"ComponentName.types.ts"})," if the API changed"]}),`
`,e.jsx(n.li,{children:"Add or update stories to cover any new props or states"}),`
`,e.jsxs(n.li,{children:["Check both ",e.jsx(n.strong,{children:"Lavender Dawn"})," and ",e.jsx(n.strong,{children:"Lavender Moon"})," themes in Storybook"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"code-style",children:"Code Style"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TypeScript"})," — strict mode, no ",e.jsx(n.code,{children:"any"})," unless unavoidable"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tailwind CSS"})," — use utility classes via ",e.jsx(n.code,{children:"cn()"}),", never inline ",e.jsx(n.code,{children:"style"})," objects for themeable properties"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Naming"})," — PascalCase for components and directories, camelCase for utilities"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessibility"})," — ARIA attributes on interactive components, keyboard navigation, focus management"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"testing",children:"Testing"}),`
`,e.jsxs(n.p,{children:["The project uses ",e.jsx(n.a,{href:"https://storybook.js.org/docs/writing-tests/test-runner",rel:"nofollow",children:"Storybook Test Runner"})," to run all interaction tests (",e.jsx(n.code,{children:"play"})," functions) headlessly via Playwright. This catches broken stories, failed assertions, and accessibility regressions in CI."]}),`
`,e.jsx(n.h3,{id:"prerequisites",children:"Prerequisites"}),`
`,e.jsx(n.p,{children:"Install Playwright's Chromium browser (one-time setup):"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx playwright install chromium
`})}),`
`,e.jsx(n.h3,{id:"running-tests",children:"Running Tests"}),`
`,e.jsx(n.p,{children:"Storybook must be running before you execute the test runner."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Command"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"npm run test-storybook"})}),e.jsxs(n.td,{children:["Run all interaction tests against ",e.jsx(n.code,{children:"http://localhost:6006"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"npm run test-storybook:ci"})}),e.jsx(n.td,{children:"Same as above but exits after a single run (for CI pipelines)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"npm run test-storybook:coverage"})}),e.jsx(n.td,{children:"Run tests and collect code coverage"})]})]})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Terminal 1 — start Storybook
npm run storybook

# Terminal 2 — run tests
npm run test-storybook
`})}),`
`,e.jsxs(n.p,{children:["You can target a specific story file by appending ",e.jsx(n.code,{children:"-- --testPathPattern"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run test-storybook -- --testPathPattern="button"
`})}),`
`,e.jsx(n.h3,{id:"writing-interaction-tests",children:"Writing Interaction Tests"}),`
`,e.jsxs(n.p,{children:["Every Playground story should include a ",e.jsx(n.code,{children:"play"})," function that exercises the component:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { expect, userEvent, within } from "@storybook/test"

export const Playground: Story = {
  args: { /* ... */ },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole("button", { name: "Submit" })
    await userEvent.click(button)
    await expect(button).toBeInTheDocument()
  },
}
`})}),`
`,e.jsx(n.p,{children:"Tips:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"within(canvasElement)"})," to scope queries to the story's rendered output"]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"getByRole"}),", ",e.jsx(n.code,{children:"getByText"}),", ",e.jsx(n.code,{children:"getByPlaceholderText"})," over fragile selectors"]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"waitFor"})," from ",e.jsx(n.code,{children:"@storybook/test"})," for assertions on async state changes"]}),`
`,e.jsxs(n.li,{children:["Feature stories that showcase important states should also have ",e.jsx(n.code,{children:"play"})," functions"]}),`
`,e.jsx(n.li,{children:"The Interactions panel in Storybook (Canvas view → Interactions tab) shows step-by-step execution of each play function"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"building-for-production",children:"Building for Production"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run build-storybook
`})}),`
`,e.jsxs(n.p,{children:["Output goes to ",e.jsx(n.code,{children:"storybook-static/"}),". This is what gets deployed."]})]})}function y(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{y as default};
//# sourceMappingURL=Contributing-BxKJ5pCu.js.map

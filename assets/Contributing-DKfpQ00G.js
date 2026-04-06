import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as r}from"./index-BPfm77MI.js";import{M as i}from"./index-B8JjA4kB.js";import"./index-yBjzXJbu.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Dipdrfh_.js";import"./index-DrnuSp5j.js";import"./index-BLHw34Di.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Contributing"}),`
`,e.jsx(n.h1,{id:"contributing",children:"Contributing"}),`
`,e.jsx(n.p,{children:"How to add or modify components in the Lavender Design System."}),`
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
`,e.jsxs(n.li,{children:["Props live in ",e.jsx(n.code,{children:"ComponentName.types.ts"}),", never inline in the ",e.jsx(n.code,{children:".tsx"})," file"]}),`
`]}),`
`,e.jsx(n.h3,{id:"3-write-stories",children:"3. Write stories"}),`
`,e.jsxs(n.p,{children:["Create ",e.jsx(n.code,{children:"stories/my-component.stories.tsx"})," with at minimum:"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Story"}),e.jsx(n.th,{children:"Purpose"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Playground"})}),e.jsxs(n.td,{children:["All props wired to Storybook controls via ",e.jsx(n.code,{children:"args"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Feature stories"})}),e.jsx(n.td,{children:"One story per visual variant, state, or behavior"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.strong,{children:"Recipe"})," (optional)"]}),e.jsx(n.td,{children:"Combine with other components in a real-world layout"})]})]})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import type { Meta, StoryObj } from "@storybook/react"
import { MyComponent } from "@/components/ui/MyComponent"

const meta: Meta<typeof MyComponent> = {
  title: "Category/MyComponent",
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
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Group"}),e.jsx(n.th,{children:"When to use"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Inputs/"})}),e.jsx(n.td,{children:"Buttons, selects, text fields, toggles — anything that captures user input"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Layout/"})}),e.jsx(n.td,{children:"Containers, modals, accordions, tabs — structural components"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Data Display/"})}),e.jsx(n.td,{children:"Tables, lists, charts, stat cards — components that render data"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Information/"})}),e.jsx(n.td,{children:"Badges, progress bars, loaders, skeletons, error states"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Forms/"})}),e.jsx(n.td,{children:"Multi-field composite forms"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Theme/"})}),e.jsx(n.td,{children:"Theme providers, switchers, and utilities"})]})]})]}),`
`,e.jsx(n.h3,{id:"5-add-interaction-tests",children:"5. Add interaction tests"}),`
`,e.jsxs(n.p,{children:["Every Playground story should include a ",e.jsx(n.code,{children:"play"})," function:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { expect, userEvent, within } from "@storybook/test"

export const Playground: Story = {
  args: { children: "Click me" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole("button", { name: "Click me" })
    await userEvent.click(button)
    await expect(button).toBeInTheDocument()
  },
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Querying elements"})," — use queries scoped via ",e.jsx(n.code,{children:"within(canvasElement)"}),":"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Query"}),e.jsx(n.th,{children:"When to use"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:'getByRole("button", { name: "..." })'})}),e.jsxs(n.td,{children:["Interactive elements — ",e.jsx(n.strong,{children:"preferred"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"getByText(/pattern/i)"})}),e.jsx(n.td,{children:"Visible text content"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:'getByPlaceholderText("...")'})}),e.jsxs(n.td,{children:["Inputs without ",e.jsx(n.code,{children:"htmlFor"})," labels"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:'getByLabelText("...")'})}),e.jsx(n.td,{children:"Inputs with associated labels"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:'findByText("...")'})}),e.jsx(n.td,{children:"Text that appears asynchronously"})]})]})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Simulating user actions:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`await userEvent.click(element)
await userEvent.type(input, "hello")
await userEvent.keyboard("{Enter}")
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Asserting state:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`await expect(element).toBeVisible()
await expect(element).toHaveTextContent("Expected text")
await expect(element).toHaveAttribute("disabled")
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Waiting for async changes:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { waitFor } from "@storybook/test"
await waitFor(() => expect(canvas.getByText("Updated")).toBeVisible())
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Testing callbacks with ",e.jsx(n.code,{children:"fn()"}),":"]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { fn } from "@storybook/test"

export const Playground: Story = {
  args: { onClick: fn() },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole("button"))
    await expect(args.onClick).toHaveBeenCalledOnce()
  },
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"modifying-an-existing-component",children:"Modifying an Existing Component"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Edit the component in ",e.jsx(n.code,{children:"src/components/ui/ComponentName/"})]}),`
`,e.jsxs(n.li,{children:["Update types in ",e.jsx(n.code,{children:"ComponentName.types.ts"})," if the API changed"]}),`
`,e.jsx(n.li,{children:"Add or update stories to cover any new props or states"}),`
`,e.jsxs(n.li,{children:["Check both ",e.jsx(n.strong,{children:"Lavender Dawn"})," and ",e.jsx(n.strong,{children:"Lavender Moon"})," themes in Storybook"]}),`
`,e.jsxs(n.li,{children:["Run ",e.jsx(n.code,{children:"npm run test-storybook"})," to verify all interaction tests pass"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"code-style",children:"Code Style"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TypeScript"})," — strict mode, no ",e.jsx(n.code,{children:"any"}),", explicit prop types in ",e.jsx(n.code,{children:"*.types.ts"})," files"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tailwind CSS"})," — use utility classes via ",e.jsx(n.code,{children:"cn()"}),", never inline ",e.jsx(n.code,{children:"style"})," objects for themeable properties"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Naming"})," — PascalCase for components and directories, camelCase for utilities"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessibility"})," — ARIA attributes on interactive components, keyboard navigation, focus management"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"ci-integration",children:"CI Integration"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx storybook build
npx http-server storybook-static --port 6006 --silent &
npx wait-on http://localhost:6006
npm run test-storybook:ci
`})})]})}function y(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{y as default};
//# sourceMappingURL=Contributing-DKfpQ00G.js.map

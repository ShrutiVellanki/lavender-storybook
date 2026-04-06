import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { expect, within } from "@storybook/test"
import { ProgressBar } from "@/components/ui/ProgressBar"

const meta: Meta<typeof ProgressBar> = {
  title: "Data Display/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A themed progress bar with label, value display, and optional auto-coloring based on thresholds (green < 75%, yellow 75-90%, red > 90%). Supports three sizes and custom value formatters. Ideal for budget tracking and goal progress.",
      },
    },
  },
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100 } },
    max: { control: { type: "number", min: 1 } },
    variant: {
      control: "select",
      options: ["default", "success", "warning", "danger"],
    },
    size: { control: "select", options: ["sm", "default", "lg"] },
    autoVariant: { control: "boolean" },
    showValue: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof ProgressBar>

export const Playground: Story = {
  args: { value: 65, label: "Progress" },
  decorators: [(Story) => <div className="w-[320px]"><Story /></div>],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText("Progress")).toBeVisible()
    await expect(canvas.getByRole("progressbar")).toBeInTheDocument()
  },
}

export const AutoVariant: Story = {
  render: () => (
    <div className="w-[320px] space-y-4">
      <ProgressBar value={40} label="Groceries" autoVariant showValue valueFormatter={(v, m) => `$${v} / $${m}`} max={100} />
      <ProgressBar value={78} label="Dining" autoVariant showValue valueFormatter={(v, m) => `$${v} / $${m}`} max={100} />
      <ProgressBar value={95} label="Shopping" autoVariant showValue valueFormatter={(v, m) => `$${v} / $${m}`} max={100} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText("Groceries")).toBeVisible()
    await expect(canvas.getByText("Dining")).toBeVisible()
    await expect(canvas.getByText("Shopping")).toBeVisible()
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="w-[320px] space-y-4">
      <ProgressBar value={60} label="Small" size="sm" />
      <ProgressBar value={60} label="Default" size="default" />
      <ProgressBar value={60} label="Large" size="lg" />
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="w-[320px] space-y-4">
      <ProgressBar value={50} label="Default" variant="default" />
      <ProgressBar value={50} label="Success" variant="success" />
      <ProgressBar value={50} label="Warning" variant="warning" />
      <ProgressBar value={50} label="Danger" variant="danger" />
    </div>
  ),
}

export const BudgetExample: Story = {
  name: "Recipe: Budget Tracker",
  render: () => (
    <div className="w-[360px] space-y-4">
      <ProgressBar
        value={320}
        max={500}
        label="Groceries"
        autoVariant
        valueFormatter={(v, m) => `$${v.toLocaleString()} / $${m.toLocaleString()}`}
      />
      <ProgressBar
        value={180}
        max={200}
        label="Dining Out"
        autoVariant
        valueFormatter={(v, m) => `$${v.toLocaleString()} / $${m.toLocaleString()}`}
      />
      <ProgressBar
        value={45}
        max={150}
        label="Entertainment"
        autoVariant
        valueFormatter={(v, m) => `$${v.toLocaleString()} / $${m.toLocaleString()}`}
      />
    </div>
  ),
}

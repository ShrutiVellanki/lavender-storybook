import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { expect, within } from "@storybook/test"
import { ProgressBar } from "@/components/ui/ProgressBar"
import type { ProgressBarVariant } from "@/components/ui/ProgressBar"

function budgetVariant(value: number, max: number): ProgressBarVariant {
  const pct = (value / max) * 100
  if (pct >= 90) return "danger"
  if (pct >= 75) return "warning"
  return "success"
}

const meta: Meta<typeof ProgressBar> = {
  title: "Data Display/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Progress indicator with label and value. Size is small, medium, or large. Variant describes intent; consumers choose it rather than leaking color thresholds into the API.",
      },
    },
  },
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100 } },
    max: { control: { type: "number", min: 1 } },
    variant: {
      control: "select",
      options: ["primary", "success", "warning", "danger"],
    },
    size: { control: "select", options: ["small", "medium", "large"] },
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

export const StatusByThreshold: Story = {
  render: () => (
    <div className="w-[320px] space-y-4">
      <ProgressBar value={40} max={100} label="Groceries" variant={budgetVariant(40, 100)} showValue valueFormatter={(v, m) => `$${v} / $${m}`} />
      <ProgressBar value={78} max={100} label="Dining" variant={budgetVariant(78, 100)} showValue valueFormatter={(v, m) => `$${v} / $${m}`} />
      <ProgressBar value={95} max={100} label="Shopping" variant={budgetVariant(95, 100)} showValue valueFormatter={(v, m) => `$${v} / $${m}`} />
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
      <ProgressBar value={60} label="Small" size="small" />
      <ProgressBar value={60} label="Medium" size="medium" />
      <ProgressBar value={60} label="Large" size="large" />
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="w-[320px] space-y-4">
      <ProgressBar value={50} label="Primary" variant="primary" />
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
        variant={budgetVariant(320, 500)}
        valueFormatter={(v, m) => `$${v.toLocaleString()} / $${m.toLocaleString()}`}
      />
      <ProgressBar
        value={180}
        max={200}
        label="Dining Out"
        variant={budgetVariant(180, 200)}
        valueFormatter={(v, m) => `$${v.toLocaleString()} / $${m.toLocaleString()}`}
      />
      <ProgressBar
        value={45}
        max={150}
        label="Entertainment"
        variant={budgetVariant(45, 150)}
        valueFormatter={(v, m) => `$${v.toLocaleString()} / $${m.toLocaleString()}`}
      />
    </div>
  ),
}

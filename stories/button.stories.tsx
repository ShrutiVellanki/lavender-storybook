import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, within, fn } from "@storybook/test"
import { Button } from "@/components/ui/Button"
import { Mail, Plus, Trash2 } from "lucide-react"

const meta: Meta<typeof Button> = {
  title: "Inputs/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Primary action control. Variants describe intent (primary, secondary, danger). Sizes are small, medium, and large. Loading and icon slots stay on the component so consumers do not pass visual styles.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    leadingIcon: { control: false },
    trailingIcon: { control: false },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Playground: Story = {
  args: {
    children: "Add account",
    variant: "primary",
    size: "medium",
    loading: false,
    leadingIcon: <Plus />,
    onClick: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole("button", { name: "Add account" })
    await userEvent.click(button)
    await expect(button).toBeInTheDocument()
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button leadingIcon={<Mail />}>Login with Email</Button>
      <Button variant="danger" leadingIcon={<Trash2 />}>Delete</Button>
      <Button size="small" leadingIcon={<Plus />} aria-label="Add" />
    </div>
  ),
}

export const Loading: Story = {
  args: {
    children: "Please wait",
    loading: true,
  },
}

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole("button", { name: "Disabled" })
    await expect(button).toHaveAttribute("disabled")
  },
}

import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, within, fn } from "@storybook/test"
import { Button } from "@/components/ui/Button"
import { Loader2, Mail, Plus, Trash2 } from "lucide-react"

const meta: Meta<typeof Button> = {
  title: "Inputs/Button",
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A versatile button with six visual variants (default, secondary, destructive, outline, ghost, link) and four sizes (sm, default, lg, icon). Supports icons, loading states, and disabled styling. Forwards refs and accepts all native button attributes.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
      description: "The visual style of the button.",
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg", "icon"],
      description: "The size of the button.",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled.",
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Playground: Story = {
  args: {
    children: "Button",
    variant: "default",
    onClick: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole("button", { name: "Button" })
    await userEvent.click(button)
    await expect(button).toBeInTheDocument()
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button variant="destructive">
        <Trash2 className="mr-2 h-4 w-4" /> Delete
      </Button>
    </div>
  ),
}

export const Loading: Story = {
  render: () => (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
    </Button>
  ),
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

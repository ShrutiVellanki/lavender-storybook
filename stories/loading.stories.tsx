import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { expect, within } from "@storybook/test"
import { Loading } from "@/components/ui/Loading"

const meta: Meta<typeof Loading> = {
  title: "Feedback/Loading",
  component: Loading,
  tags: ['autodocs'],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Centered loading indicator with animated spinner (Lucide Loader2) and customizable message. Supports full-screen (min-h-screen) and inline modes.",
      },
    },
  },
  argTypes: {
    message: {
      control: "text",
      description: "The loading message to display below the spinner.",
    },
    fullScreen: {
      control: "boolean",
      description: "Whether to take up the full viewport height.",
    },
  },
}

export default meta
type Story = StoryObj<typeof Loading>

export const Playground: Story = {
  args: {
    message: "Loading...",
    fullScreen: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText("Loading...")).toBeVisible()
  },
}

export const CustomMessage: Story = {
  args: {
    message: "Loading your financial data...",
    fullScreen: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText("Loading your financial data...")).toBeVisible()
  },
}

export const Inline: Story = {
  name: "Recipe: Inline in Dashboard",
  render: () => (
    <div className="p-8 bg-background">
      <h2 className="text-lg font-semibold text-foreground mb-4">Dashboard</h2>
      <Loading message="Fetching accounts..." fullScreen={false} />
    </div>
  ),
}

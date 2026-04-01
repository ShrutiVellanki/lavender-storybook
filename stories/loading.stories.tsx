import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Loading } from "@/components/ui/Loading"

const meta: Meta<typeof Loading> = {
  title: "Components/Loading",
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

export const Default: Story = {
  args: {
    message: "Loading...",
    fullScreen: true,
  },
}

export const CustomMessage: Story = {
  args: {
    message: "Loading your financial data...",
    fullScreen: true,
  },
}

export const Inline: Story = {
  render: () => (
    <div className="p-8 bg-background">
      <h2 className="text-lg font-semibold text-foreground mb-4">Dashboard</h2>
      <Loading message="Fetching accounts..." fullScreen={false} />
    </div>
  ),
}

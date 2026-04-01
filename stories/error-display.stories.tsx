import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { ErrorDisplay } from "@/components/ui/error-display"

const meta: Meta<typeof ErrorDisplay> = {
  title: "Components/ErrorDisplay",
  component: ErrorDisplay,
  tags: ['autodocs'],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "User-friendly error card with icon, title, message, and optional retry button. Supports full-screen and inline layouts. Uses destructive theme color for the error icon.",
      },
    },
  },
  argTypes: {
    message: {
      control: "text",
      description: "The error message to display.",
    },
    title: {
      control: "text",
      description: "The error title heading.",
    },
    fullScreen: {
      control: "boolean",
      description: "Whether to take up the full viewport height.",
    },
  },
}

export default meta
type Story = StoryObj<typeof ErrorDisplay>

export const Default: Story = {
  args: {
    message: "We couldn't load your data. Please check your connection and try again.",
    onRetry: () => alert("Retrying..."),
  },
}

export const CustomTitle: Story = {
  args: {
    title: "Connection Lost",
    message: "Unable to reach the server. Please check your internet connection.",
    onRetry: () => alert("Retrying..."),
  },
}

export const WithoutRetry: Story = {
  args: {
    title: "Not Found",
    message: "The resource you're looking for doesn't exist.",
  },
}

export const Inline: Story = {
  render: () => (
    <div className="p-8 bg-background">
      <h2 className="text-lg font-semibold text-foreground mb-4">Dashboard</h2>
      <ErrorDisplay
        message="Failed to load account data."
        onRetry={() => alert("Retrying...")}
        fullScreen={false}
      />
    </div>
  ),
}

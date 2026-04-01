import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher"
import { ThemeProvider } from "@/components/ui/ThemeProvider"

const meta: Meta<typeof ThemeSwitcher> = {
  title: "Components/ThemeSwitcher",
  component: ThemeSwitcher,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "One-click toggle between Lavender Dawn (light) and Lavender Moon (dark) themes. Shows a Sun icon in dark mode and Moon icon in light mode. Must be wrapped in a ThemeProvider.",
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ThemeSwitcher>

export const Default: Story = {}

export const InContext: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card">
      <span className="text-sm text-card-foreground font-medium">Theme:</span>
      <ThemeSwitcher />
    </div>
  ),
}

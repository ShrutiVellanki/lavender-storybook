import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { ThemeSwitcher } from "@/components/ui/theme-switcher"
import { ThemeProvider } from "@/components/ui/theme-provider"

const meta: Meta<typeof ThemeSwitcher> = {
  title: "Components/ThemeSwitcher",
  component: ThemeSwitcher,
  parameters: { layout: "centered" },
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

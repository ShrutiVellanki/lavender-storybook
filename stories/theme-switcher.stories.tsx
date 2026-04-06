import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, within } from "@storybook/test"
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher"
import { ThemeProvider } from "@/components/ui/ThemeProvider"

const meta: Meta<typeof ThemeSwitcher> = {
  title: "Theme/ThemeSwitcher",
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

export const Playground: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const toggleButton = canvas.getByRole("button")
    await userEvent.click(toggleButton)

    await expect(toggleButton).toBeInTheDocument()
  },
}

export const InContext: Story = {
  name: "Recipe: In Settings Bar",
  render: () => (
    <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card">
      <span className="text-sm text-card-foreground font-medium">Theme:</span>
      <ThemeSwitcher />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const themeLabel = canvas.getByText("Theme:")
    await expect(themeLabel).toBeVisible()

    const toggleButton = canvas.getByRole("button")
    await expect(toggleButton).toBeInTheDocument()
  },
}

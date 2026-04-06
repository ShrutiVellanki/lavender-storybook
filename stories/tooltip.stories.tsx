import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, within, waitFor } from "@storybook/test"
import { Tooltip } from "@/components/ui/Tooltip"
import { Button } from "@/components/ui/Button"

const meta: Meta<typeof Tooltip> = {
  title: "Layout/Tooltip",
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Hover/focus-triggered tooltip rendered via portal. Supports four placements (top, bottom, left, right) with automatic viewport clamping. Controlled and uncontrolled modes available. Cleans up on Escape, scroll, and resize.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Playground: Story = {
  render: () => (
    <Tooltip content="This is a tooltip">
      <Button variant="outline">Hover me</Button>
    </Tooltip>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.hover(canvas.getByRole("button", { name: "Hover me" }))

    const body = within(document.body)
    await waitFor(() =>
      expect(body.getByText("This is a tooltip")).toBeInTheDocument()
    )
  },
}

export const Placements: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-16">
      <Tooltip content="Top tooltip" placement="top">
        <Button variant="outline" size="sm">Top</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" placement="bottom">
        <Button variant="outline" size="sm">Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" placement="left">
        <Button variant="outline" size="sm">Left</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" placement="right">
        <Button variant="outline" size="sm">Right</Button>
      </Tooltip>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Tooltip content="You won't see this" disabled>
      <Button variant="outline">Tooltip disabled</Button>
    </Tooltip>
  ),
}

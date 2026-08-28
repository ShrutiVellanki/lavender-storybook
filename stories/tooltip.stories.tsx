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
      <Button variant="secondary">Hover me</Button>
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
        <Button variant="secondary" size="small">Top</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" placement="bottom">
        <Button variant="secondary" size="small">Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" placement="left">
        <Button variant="secondary" size="small">Left</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" placement="right">
        <Button variant="secondary" size="small">Right</Button>
      </Tooltip>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Tooltip content="You won't see this" disabled>
      <Button variant="secondary">Tooltip disabled</Button>
    </Tooltip>
  ),
}

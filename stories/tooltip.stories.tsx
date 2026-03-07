import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Tooltip } from "@/components/ui/tooltip"

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <Tooltip content="Hover or focus to see the tooltip">
      <button type="button" style={{ padding: "8px 16px" }}>
        Hover me
      </button>
    </Tooltip>
  ),
}

export const Placements: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
      <Tooltip content="Tooltip on top" placement="top">
        <button type="button" style={{ padding: "8px 16px" }}>Top</button>
      </Tooltip>
      <Tooltip content="Tooltip on bottom" placement="bottom">
        <button type="button" style={{ padding: "8px 16px" }}>Bottom</button>
      </Tooltip>
      <Tooltip content="Tooltip on left" placement="left">
        <button type="button" style={{ padding: "8px 16px" }}>Left</button>
      </Tooltip>
      <Tooltip content="Tooltip on right" placement="right">
        <button type="button" style={{ padding: "8px 16px" }}>Right</button>
      </Tooltip>
    </div>
  ),
}

export const LongContent: Story = {
  render: () => (
    <Tooltip content="This is a longer tooltip message that might wrap to multiple lines when it exceeds the max width.">
      <button type="button" style={{ padding: "8px 16px" }}>
        Long tooltip
      </button>
    </Tooltip>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div>
        <Tooltip
          content="Controlled tooltip"
          open={open}
          onOpenChange={setOpen}
        >
          <button type="button" style={{ padding: "8px 16px" }}>
            Toggle tooltip
          </button>
        </Tooltip>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          style={{ marginLeft: 8, padding: "8px 16px" }}
        >
          {open ? "Close" : "Open"} from outside
        </button>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <Tooltip content="This tooltip is disabled" disabled>
      <button type="button" style={{ padding: "8px 16px" }}>
        Disabled tooltip
      </button>
    </Tooltip>
  ),
}

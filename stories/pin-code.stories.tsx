import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import PinInput from "@/components/ui/pin-code"

const meta: Meta<typeof PinInput> = {
  title: "Components/PinCode",
  component: PinInput,
  parameters: { layout: "centered" },
}

export default meta

type Story = StoryObj<typeof PinInput>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div>
        <PinInput length={6} value={value} onChange={setValue} />
        {value && <p style={{ marginTop: 12, fontSize: 14, color: "#666" }}>Value: {value}</p>}
      </div>
    )
  },
}

export const FourDigits: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div>
        <PinInput length={4} value={value} onChange={setValue} />
        {value && <p style={{ marginTop: 12, fontSize: 14, color: "#666" }}>Value: {value}</p>}
      </div>
    )
  },
}

export const Masked: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div>
        <PinInput length={6} value={value} onChange={setValue} masked />
        {value && <p style={{ marginTop: 12, fontSize: 14, color: "#666" }}>Value: {value}</p>}
      </div>
    )
  },
}

export const Uncontrolled: Story = {
  render: () => {
    return (
      <PinInput
        defaultValue="12"
        length={6}
        onComplete={(v) => alert(`Complete: ${v}`)}
      />
    )
  },
}

export const Disabled: Story = {
  args: {
    length: 6,
    defaultValue: "123456",
    disabled: true,
  },
}

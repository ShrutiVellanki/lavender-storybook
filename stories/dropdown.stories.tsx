import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Select } from "@/components/ui/dropdown"

const FRUITS = ["Apple", "Banana", "Orange", "Mango", "Grape", "Strawberry", "Peach"]

function getOptionLabel(opt: string) {
  return opt
}

const FruitSelect = Select

const meta: Meta<typeof Select> = {
  title: "Components/Dropdown",
  component: Select,
  parameters: { layout: "centered" },
}

export default meta

type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: function DefaultRender() {
    const [value, setValue] = useState(undefined as string | undefined)
    return (
      <div>
        <FruitSelect
          options={FRUITS}
          value={value}
          onChange={setValue}
          getOptionLabel={getOptionLabel}
          placeholder="Choose a fruit..."
        />
        {value ? (
          <p style={{ marginTop: 12, fontSize: 14, color: "#666" }}>
            Selected: {value}
          </p>
        ) : null}
      </div>
    )
  },
}

export const WithDefaultValue: Story = {
  render: function WithDefaultValueRender() {
    return (
      <FruitSelect
        options={FRUITS}
        defaultValue="Orange"
        onChange={function noop() {}}
        getOptionLabel={getOptionLabel}
        placeholder="Choose a fruit..."
      />
    )
  },
}

export const Controlled: Story = {
  render: function ControlledRender() {
    const [value, setValue] = useState("Banana")
    return (
      <div>
        <FruitSelect
          options={FRUITS}
          value={value}
          onChange={setValue}
          getOptionLabel={getOptionLabel}
          placeholder="Choose a fruit..."
        />
        <button
          type="button"
          onClick={function onClick() {
            setValue("Grape")
          }}
          style={{ marginTop: 12, padding: "6px 12px" }}
        >
          Set to Grape
        </button>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: function DisabledRender() {
    return (
      <FruitSelect
        options={FRUITS}
        defaultValue="Apple"
        getOptionLabel={getOptionLabel}
        placeholder="Choose a fruit..."
        disabled={true}
      />
    )
  },
}

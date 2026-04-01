import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Select } from "@/components/ui/Dropdown"

const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"]

const meta: Meta<typeof Select> = {
  title: "Components/Dropdown",
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Custom select dropdown with keyboard navigation (ArrowUp/Down, Enter, Space, Escape). Generic typed — works with strings, objects, or any data shape. Supports controlled and uncontrolled modes, custom option rendering, disabled state, and an optional label.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Select<string>>

export const Default: Story = {
  render: () => (
    <Select
      options={fruits}
      getOptionLabel={(f) => f}
      placeholder="Pick a fruit"
      label="Fruit"
    />
  ),
}

export const WithDefaultValue: Story = {
  render: () => (
    <Select
      options={fruits}
      getOptionLabel={(f) => f}
      defaultValue="Cherry"
      label="Favorite fruit"
    />
  ),
}

export const Controlled: Story = {
  render: function ControlledSelect() {
    const [value, setValue] = useState<string | undefined>(undefined)
    return (
      <div>
        <Select
          options={fruits}
          getOptionLabel={(f) => f}
          value={value}
          onChange={setValue}
          label="Select fruit"
        />
        <p className="mt-3 text-sm text-muted-foreground">
          Selected: {value || "(none)"}
        </p>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <Select
      options={fruits}
      getOptionLabel={(f) => f}
      defaultValue="Banana"
      disabled
      label="Disabled select"
    />
  ),
}

export const ObjectOptions: Story = {
  name: "Object Options",
  render: () => {
    const accounts = [
      { id: "1", name: "Checking", balance: 5000 },
      { id: "2", name: "Savings", balance: 12000 },
      { id: "3", name: "Investment", balance: 45000 },
    ]
    return (
      <Select
        options={accounts}
        getOptionLabel={(a) => a.name}
        getOptionKey={(a) => a.id}
        renderOption={(a, { isSelected }) => (
          <div className="flex justify-between w-full">
            <span>{a.name}</span>
            <span className="text-muted-foreground">
              ${a.balance.toLocaleString()}
            </span>
          </div>
        )}
        label="Account"
      />
    )
  },
}

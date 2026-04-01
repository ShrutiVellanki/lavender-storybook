import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Select } from "@/components/ui/Dropdown"
import { Apple, Cherry, Grape } from "lucide-react"

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

const FRUIT_ICONS: Record<string, React.ReactNode> = {
  Apple: <Apple className="w-3.5 h-3.5" />,
  Cherry: <Cherry className="w-3.5 h-3.5" />,
  Grape: <Grape className="w-3.5 h-3.5" />,
}

export const WithIcons: Story = {
  name: "With Icons (renderValue)",
  render: function IconSelect() {
    const [value, setValue] = useState<string | undefined>(undefined)
    return (
      <Select
        options={fruits}
        value={value}
        onChange={setValue}
        getOptionLabel={(f) => f}
        renderOption={(f) => (
          <span className="flex items-center gap-2">
            {FRUIT_ICONS[f] && <span className="opacity-60">{FRUIT_ICONS[f]}</span>}
            {f}
          </span>
        )}
        renderValue={(f) => (
          <span className="flex items-center gap-2">
            {FRUIT_ICONS[f] && <span className="opacity-60">{FRUIT_ICONS[f]}</span>}
            {f}
          </span>
        )}
        placeholder="Pick a fruit"
        label="Fruit with icon"
      />
    )
  },
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

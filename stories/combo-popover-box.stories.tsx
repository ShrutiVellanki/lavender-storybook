import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { expect, userEvent, within, waitFor } from "@storybook/test"
import { Combobox } from "@/components/ui/Combobox"

const FRUITS = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Grape",
  "Strawberry",
  "Peach",
  "Pear",
  "Plum",
  "Cherry",
]

function getOptionLabel(opt: string) {
  return opt
}

const FruitCombobox = Combobox

const meta: Meta<typeof Combobox> = {
  title: "Inputs/Combobox",
  component: Combobox,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Filterable combobox that combines a text input with a dropdown list. Type to filter options, use keyboard to navigate. Generic typed, supports controlled/uncontrolled modes, custom option rendering, and disabled state.",
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Combobox>

export const Playground: Story = {
  render: function ComboboxDefault() {
    const [value, setValue] = useState(null as string | null)
    return (
      <div>
        <FruitCombobox
          options={FRUITS}
          value={value}
          onChange={setValue}
          getOptionLabel={getOptionLabel}
          placeholder="Search or select..."
        />
        {value !== null ? (
          <p style={{ marginTop: 12, fontSize: 14, color: "#666" }}>
            Selected: {value}
          </p>
        ) : null}
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByPlaceholderText("Search or select...")
    await userEvent.click(input)
    await userEvent.type(input, "App")
    await waitFor(() => expect(canvas.getByText("Apple")).toBeInTheDocument(), {
      timeout: 3000,
    })
  },
}

export const WithDefaultValue: Story = {
  render: function ComboboxWithDefault() {
    return (
      <FruitCombobox
        options={FRUITS}
        defaultValue="Orange"
        onChange={function noop() {}}
        getOptionLabel={getOptionLabel}
        placeholder="Search or select..."
      />
    )
  },
}

export const Controlled: Story = {
  render: function ComboboxControlled() {
    const [value, setValue] = useState("Banana" as string | null)
    return (
      <div>
        <FruitCombobox
          options={FRUITS}
          value={value}
          onChange={setValue}
          getOptionLabel={getOptionLabel}
          placeholder="Search or select..."
        />
        <button
          type="button"
          onClick={function clear() {
            setValue(null)
          }}
          style={{ marginTop: 12, marginLeft: 8, padding: "6px 12px" }}
        >
          Clear
        </button>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: function ComboboxDisabled() {
    return (
      <FruitCombobox
        options={FRUITS}
        defaultValue="Apple"
        getOptionLabel={getOptionLabel}
        placeholder="Search or select..."
        disabled={true}
      />
    )
  },
}

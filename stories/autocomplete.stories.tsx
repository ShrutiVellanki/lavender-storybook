import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { expect, userEvent, within, waitFor } from "@storybook/test"
import { Autocomplete } from "@/components/ui/Autocomplete"

const COUNTRIES = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "India",
  "Brazil",
  "Mexico",
  "Spain",
  "Italy",
  "Netherlands",
  "South Korea",
  "Sweden",
]

function mockFetchCountries(query: string): Promise<string[]> {
  return new Promise((resolve) => {
    const q = query.toLowerCase()
    const filtered = COUNTRIES.filter((c) =>
      c.toLowerCase().includes(q)
    )
    setTimeout(() => resolve(filtered), 300)
  })
}

const meta: Meta<typeof Autocomplete> = {
  title: "Inputs/Autocomplete",
  component: Autocomplete,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Async search input with debounced fetching, loading/error states, and keyboard navigation. Generic typed — works with any data shape via fetchSuggestions, getOptionLabel, and onSelect. Supports configurable debounce delay and minimum query length.",
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Autocomplete>

export const Playground: Story = {
  render: () => {
    const [selected, setSelected] = useState<string | null>(null)
    return (
      <div>
        <Autocomplete<string>
          fetchSuggestions={mockFetchCountries}
          getOptionLabel={(opt) => opt}
          onSelect={setSelected}
          placeholder="Type to search countries..."
        />
        {selected && (
          <p style={{ marginTop: 12, fontSize: 14, color: "#666" }}>
            Selected: {selected}
          </p>
        )}
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByPlaceholderText("Type to search countries...")
    await userEvent.type(input, "United")
    await waitFor(() => expect(canvas.getByText("United States")).toBeInTheDocument(), {
      timeout: 3000,
    })
    await expect(canvas.getByText("United Kingdom")).toBeInTheDocument()
  },
}

export const SlowFetch: Story = {
  render: () => {
    const [selected, setSelected] = useState<string | null>(null)
    const slowFetch = (query: string) =>
      new Promise<string[]>((resolve) => {
        const q = query.toLowerCase()
        const filtered = COUNTRIES.filter((c) => c.toLowerCase().includes(q))
        setTimeout(() => resolve(filtered), 800)
      })
    return (
      <div>
        <Autocomplete<string>
          fetchSuggestions={slowFetch}
          getOptionLabel={(opt) => opt}
          onSelect={setSelected}
          placeholder="Slow search (800ms)..."
          debounceMs={400}
        />
        {selected && (
          <p style={{ marginTop: 12, fontSize: 14, color: "#666" }}>
            Selected: {selected}
          </p>
        )}
      </div>
    )
  },
}

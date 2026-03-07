import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Autocomplete } from "@/components/ui/autocomplete"

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
  title: "Components/Autocomplete",
  component: Autocomplete,
  parameters: { layout: "centered" },
}

export default meta

type Story = StoryObj<typeof Autocomplete>

export const Default: Story = {
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

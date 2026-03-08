import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { StarRating } from "@/components/ui/star-rating"

const meta: Meta<typeof StarRating> = {
  title: "Components/StarRating",
  component: StarRating,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof StarRating>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <div>
        <StarRating value={value} onChange={setValue} label="Rate this" />
        <p style={{ marginTop: 12, fontSize: 12, color: "#666" }}>
          Current: {value} stars
        </p>
      </div>
    )
  },
}

export const Uncontrolled: Story = {
  render: () => (
    <StarRating defaultValue={3} onChange={(v) => alert(`Rated ${v} stars`)} />
  ),
}

export const ReadOnly: Story = {
  args: {
    value: 4,
    readOnly: true,
    label: "Average rating",
  },
}

export const Disabled: Story = {
  args: {
    value: 2,
    disabled: true,
    label: "Disabled rating",
  },
}

export const CustomMax: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <StarRating
        max={10}
        value={value}
        onChange={setValue}
        label="Out of 10"
      />
    )
  },
}

export const ThreeStars: Story = {
  args: {
    max: 3,
    defaultValue: 0,
    label: "3-star rating",
  },
}

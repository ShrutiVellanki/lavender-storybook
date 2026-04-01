import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { StarRating } from "@/components/ui/star-rating"

const meta: Meta<typeof StarRating> = {
  title: "Components/StarRating",
  component: StarRating,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Accessible star rating input rendered as a radio group. Supports hover preview, keyboard navigation (Arrow keys, Home, End), read-only and disabled modes. Controlled and uncontrolled. Configurable max stars.",
      },
    },
  },
  argTypes: {
    max: {
      control: { type: "number", min: 1, max: 10 },
      description: "Maximum number of stars.",
    },
    readOnly: {
      control: "boolean",
      description: "Whether the rating is read-only.",
    },
    disabled: {
      control: "boolean",
      description: "Whether the rating is disabled.",
    },
  },
}

export default meta
type Story = StoryObj<typeof StarRating>

export const Default: Story = {
  args: {
    defaultValue: 3,
  },
}

export const ReadOnly: Story = {
  args: {
    value: 4,
    readOnly: true,
  },
}

export const CustomMax: Story = {
  args: {
    max: 10,
    defaultValue: 7,
  },
}

export const Controlled: Story = {
  render: function ControlledRating() {
    const [rating, setRating] = useState(0)
    return (
      <div>
        <StarRating value={rating} onChange={setRating} />
        <p className="mt-2 text-sm text-muted-foreground">
          You selected: {rating} star{rating !== 1 ? "s" : ""}
        </p>
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    value: 3,
    disabled: true,
  },
}

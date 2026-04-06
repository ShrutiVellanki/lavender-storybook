import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { expect, within } from "@storybook/test"
import { Skeleton } from "@/components/ui/Skeleton"

const meta: Meta<typeof Skeleton> = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Animated placeholder that mimics the shape of content while it loads. Supports text lines, circular avatars, rectangular blocks, and rounded cards. Use inside your page layouts to provide a smooth perceived-loading experience instead of spinners.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "circular", "rectangular", "rounded"],
      description: "Shape of the skeleton element.",
    },
    width: {
      control: "text",
      description: "Explicit width (CSS value or number in px).",
    },
    height: {
      control: "text",
      description: "Explicit height (CSS value or number in px).",
    },
    lines: {
      control: "number",
      description: "Repeat text lines (text variant only). Last line is 75% width.",
    },
  },
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Playground: Story = {
  args: {
    variant: "text",
    height: 16,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const skeletons = canvasElement.querySelectorAll(".animate-pulse")
    await expect(skeletons.length).toBeGreaterThan(0)
  },
}

export const TextLines: Story = {
  render: () => <Skeleton variant="text" lines={4} />,
}

export const Circular: Story = {
  args: {
    variant: "circular",
    width: 48,
    height: 48,
  },
}

export const Rounded: Story = {
  args: {
    variant: "rounded",
    width: "100%",
    height: 160,
  },
}

export const CardSkeleton: Story = {
  name: "Recipe: Card Layout",
  render: () => (
    <div className="w-80 rounded-xl border border-border bg-card p-5 space-y-4">
      <div className="flex items-center gap-3">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" height={14} width="60%" />
          <Skeleton variant="text" height={10} width="40%" />
        </div>
      </div>
      <Skeleton variant="rounded" height={120} />
      <Skeleton variant="text" lines={3} />
    </div>
  ),
}

export const StatCardSkeleton: Story = {
  name: "Recipe: Stat Card",
  render: () => (
    <div className="w-64 rounded-xl border border-border bg-card p-5 space-y-3">
      <div className="flex items-center justify-between">
        <Skeleton variant="text" height={10} width="40%" />
        <Skeleton variant="rounded" width={32} height={32} />
      </div>
      <Skeleton variant="text" height={28} width="55%" />
      <Skeleton variant="text" height={10} width="70%" />
    </div>
  ),
}

export const TableSkeleton: Story = {
  name: "Recipe: Table Rows",
  render: () => (
    <div className="space-y-3 w-full max-w-lg">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <Skeleton variant="text" height={14} width="30%" />
          <Skeleton variant="text" height={14} width="20%" />
          <Skeleton variant="rounded" height={22} width={64} />
          <Skeleton variant="text" height={14} width="15%" className="ml-auto" />
        </div>
      ))}
    </div>
  ),
}

export const DashboardSkeleton: Story = {
  name: "Recipe: Full Dashboard",
  play: async ({ canvasElement }) => {
    await expect(canvasElement.children.length).toBeGreaterThan(0)
  },
  render: () => (
    <div className="space-y-6 w-full max-w-3xl">
      {/* Header */}
      <div className="space-y-2">
        <Skeleton variant="text" height={24} width="30%" />
        <Skeleton variant="text" height={12} width="50%" />
      </div>
      {/* Chart */}
      <div className="rounded-xl border border-border bg-card p-6">
        <Skeleton variant="text" height={14} width="25%" className="mb-4" />
        <Skeleton variant="rounded" height={200} />
      </div>
      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-5 space-y-3">
            <div className="flex items-center justify-between">
              <Skeleton variant="text" height={10} width="40%" />
              <Skeleton variant="rounded" width={32} height={32} />
            </div>
            <Skeleton variant="text" height={28} width="55%" />
            <Skeleton variant="text" height={10} width="70%" />
          </div>
        ))}
      </div>
    </div>
  ),
}

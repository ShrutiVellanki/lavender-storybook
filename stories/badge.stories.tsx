import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { expect, within } from "@storybook/test"
import { Badge } from "@/components/ui/Badge"
import {
  ShoppingCart,
  UtensilsCrossed,
  Car,
  ShoppingBag,
  Zap,
  Film,
  CheckCircle2,
  Clock,
  XCircle,
  Star,
  Bell,
} from "lucide-react"

const meta: Meta<typeof Badge> = {
  title: "Information/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Inline label for status, category, or count. Variants describe intent. Pass a node as `leadingIcon`; icon size stays inside the component.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "success", "warning"],
    },
    leadingIcon: { control: false },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Playground: Story = {
  args: {
    children: "Badge",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText("Badge")).toBeVisible()
  },
}

export const WithIcon: Story = {
  args: {
    children: "Groceries",
    leadingIcon: <ShoppingCart />,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    for (const label of ["Primary", "Secondary", "Danger", "Success", "Warning"]) {
      await expect(canvas.getByText(label)).toBeVisible()
    }
  },
}

export const CategoryBadges: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge leadingIcon={<ShoppingCart />}>Groceries</Badge>
      <Badge leadingIcon={<UtensilsCrossed />}>Dining</Badge>
      <Badge leadingIcon={<Car />}>Transport</Badge>
      <Badge leadingIcon={<ShoppingBag />}>Shopping</Badge>
      <Badge leadingIcon={<Zap />}>Utilities</Badge>
      <Badge leadingIcon={<Film />}>Entertainment</Badge>
    </div>
  ),
}

export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="success" leadingIcon={<CheckCircle2 />}>completed</Badge>
      <Badge variant="warning" leadingIcon={<Clock />}>pending</Badge>
      <Badge variant="danger" leadingIcon={<XCircle />}>failed</Badge>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText("completed")).toBeVisible()
    await expect(canvas.getByText("pending")).toBeVisible()
    await expect(canvas.getByText("failed")).toBeVisible()
  },
}

export const IconVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="primary" leadingIcon={<Star />}>Featured</Badge>
      <Badge variant="success" leadingIcon={<CheckCircle2 />}>Verified</Badge>
      <Badge variant="warning" leadingIcon={<Bell />}>Notification</Badge>
      <Badge variant="danger" leadingIcon={<XCircle />}>Error</Badge>
      <Badge variant="secondary" leadingIcon={<Clock />}>Scheduled</Badge>
    </div>
  ),
}

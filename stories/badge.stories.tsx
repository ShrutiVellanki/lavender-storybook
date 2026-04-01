import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
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
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Inline label for status, category, or count. Supports seven variants and an optional leading icon. Pass any React node as the `icon` prop — SVGs are automatically sized to 12px.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "success", "warning", "danger"],
    },
    icon: { control: false },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    children: "Badge",
  },
}

export const WithIcon: Story = {
  args: {
    children: "Groceries",
    icon: <ShoppingCart />,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
    </div>
  ),
}

export const CategoryBadges: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge icon={<ShoppingCart />}>Groceries</Badge>
      <Badge icon={<UtensilsCrossed />}>Dining</Badge>
      <Badge icon={<Car />}>Transport</Badge>
      <Badge icon={<ShoppingBag />}>Shopping</Badge>
      <Badge icon={<Zap />}>Utilities</Badge>
      <Badge icon={<Film />}>Entertainment</Badge>
    </div>
  ),
}

export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="success" icon={<CheckCircle2 />}>completed</Badge>
      <Badge variant="warning" icon={<Clock />}>pending</Badge>
      <Badge variant="danger" icon={<XCircle />}>failed</Badge>
    </div>
  ),
}

export const IconVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="default" icon={<Star />}>Featured</Badge>
      <Badge variant="success" icon={<CheckCircle2 />}>Verified</Badge>
      <Badge variant="warning" icon={<Bell />}>Notification</Badge>
      <Badge variant="destructive" icon={<XCircle />}>Error</Badge>
      <Badge variant="outline" icon={<Clock />}>Scheduled</Badge>
    </div>
  ),
}

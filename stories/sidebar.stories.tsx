import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Sidebar } from "@/components/ui/Sidebar"
import { Home, Layers, ArrowLeftRight, Calculator, CreditCard } from "lucide-react"
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher"

const sampleItems = [
  { label: "Dashboard", href: "/", icon: <Home />, isActive: true },
  { label: "Accounts", href: "/accounts", icon: <Layers /> },
  { label: "Transactions", href: "/transactions", icon: <ArrowLeftRight /> },
  { label: "Budget", href: "/budget", icon: <Calculator /> },
  { label: "Cards", href: "/cards", icon: <CreditCard /> },
]

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A collapsible sidebar navigation component. Supports a brand header, icon-based nav items with active state, and an optional footer slot for utilities like theme switchers.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Expanded: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false)
    return (
      <div className="h-[500px] flex">
        <Sidebar
          items={sampleItems}
          collapsed={collapsed}
          onCollapsedChange={setCollapsed}
          footer={<ThemeSwitcher collapsed={collapsed} />}
          onNavigate={(href) => alert(`Navigate to ${href}`)}
        />
        <div className="flex-1 p-8 bg-background">
          <p className="text-foreground">Page content area</p>
        </div>
      </div>
    )
  },
}

export const Collapsed: Story = {
  render: () => (
    <div className="h-[500px] flex">
      <Sidebar
        items={sampleItems}
        collapsed
        footer={<ThemeSwitcher collapsed />}
        onNavigate={(href) => alert(`Navigate to ${href}`)}
      />
      <div className="flex-1 p-8 bg-background">
        <p className="text-foreground">Page content with collapsed sidebar</p>
      </div>
    </div>
  ),
}

export const WithActiveItem: Story = {
  render: () => {
    const [active, setActive] = useState("/")
    const items = sampleItems.map((item) => ({
      ...item,
      isActive: item.href === active,
    }))
    return (
      <div className="h-[500px] flex">
        <Sidebar
          items={items}
          onNavigate={(href) => setActive(href)}
          footer={<ThemeSwitcher />}
        />
        <div className="flex-1 p-8 bg-background">
          <p className="text-foreground">Active route: <strong>{active}</strong></p>
        </div>
      </div>
    )
  },
}

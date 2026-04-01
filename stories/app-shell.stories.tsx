import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { AppShell } from "@/components/ui/AppShell"
import { Home, Layers, ArrowLeftRight, Calculator, CreditCard } from "lucide-react"
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"

const sampleItems = [
  { label: "Dashboard", href: "/", icon: <Home />, isActive: true },
  { label: "Accounts", href: "/accounts", icon: <Layers /> },
  { label: "Transactions", href: "/transactions", icon: <ArrowLeftRight /> },
  { label: "Budget", href: "/budget", icon: <Calculator /> },
  { label: "Cards", href: "/cards", icon: <CreditCard /> },
]

const meta: Meta<typeof AppShell> = {
  title: "Components/AppShell",
  component: AppShell,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A full application shell composing the Sidebar, a mobile-responsive top bar with hamburger menu, and a content area. Handles sidebar collapse state, mobile drawer, and responsive breakpoints automatically.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof AppShell>

export const Default: Story = {
  render: () => (
    <div className="h-[600px]">
      <AppShell
        sidebarItems={sampleItems}
        sidebarFooter={<ThemeSwitcher />}
      >
        <h1 className="text-xl font-semibold text-foreground mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Total Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-foreground">$125,430.00</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Monthly Income</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-foreground">$8,250.00</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-foreground">$3,180.00</p>
            </CardContent>
          </Card>
        </div>
      </AppShell>
    </div>
  ),
}

export const WithContent: Story = {
  name: "With Rich Content",
  render: () => (
    <div className="h-[600px]">
      <AppShell
        sidebarItems={sampleItems}
        sidebarFooter={<ThemeSwitcher />}
      >
        <div className="space-y-6">
          <div>
            <h1 className="text-xl font-semibold text-foreground">Accounts</h1>
            <p className="text-sm text-muted-foreground mt-1">Manage all your financial accounts in one place.</p>
          </div>
          <Card className="p-6">
            <p className="text-foreground">
              The AppShell automatically handles responsive sidebar collapse,
              mobile drawer with hamburger menu, and content area padding.
            </p>
          </Card>
        </div>
      </AppShell>
    </div>
  ),
}

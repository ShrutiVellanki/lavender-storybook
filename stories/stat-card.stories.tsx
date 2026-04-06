import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { expect, within } from "@storybook/test"
import { StatCard } from "@/components/ui/StatCard"

const WalletIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>
)

const TrendUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
)

const meta: Meta<typeof StatCard> = {
  title: "Data Display/StatCard",
  component: StatCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A metric display card showing a label, formatted value, trend indicator (up/down/neutral arrow + label), and optional icon. Designed for dashboard KPIs like net worth, total spending, or portfolio value.",
      },
    },
  },
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
  },
}

export default meta
type Story = StoryObj<typeof StatCard>

export const Playground: Story = {
  args: {
    label: "Net Worth",
    value: "$685,769.89",
    trend: { direction: "up", value: "+2.4% this month" },
  },
  decorators: [(Story) => <div className="w-[260px]"><Story /></div>],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText("Net Worth")).toBeVisible()
    await expect(canvas.getByText("$685,769.89")).toBeVisible()
    await expect(canvas.getByText(/\+2\.4% this month/)).toBeVisible()
  },
}

export const WithIcon: Story = {
  args: {
    label: "Total Assets",
    value: "$929,524.38",
    trend: { direction: "up", value: "+$12,430" },
    icon: <WalletIcon />,
  },
  decorators: [(Story) => <div className="w-[260px]"><Story /></div>],
}

export const NegativeTrend: Story = {
  args: {
    label: "Monthly Spending",
    value: "$4,320.00",
    trend: { direction: "down", value: "+18% vs last month" },
  },
  decorators: [(Story) => <div className="w-[260px]"><Story /></div>],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText("Monthly Spending")).toBeVisible()
    await expect(canvas.getByText("$4,320.00")).toBeVisible()
  },
}

export const NeutralTrend: Story = {
  args: {
    label: "Credit Score",
    value: "742",
    trend: { direction: "neutral", value: "No change" },
  },
  decorators: [(Story) => <div className="w-[260px]"><Story /></div>],
}

export const DashboardRow: Story = {
  name: "Recipe: Dashboard Row",
  render: () => (
    <div className="grid grid-cols-4 gap-4 w-[900px]">
      <StatCard
        label="Net Worth"
        value="$685,769"
        trend={{ direction: "up", value: "+2.4%" }}
        icon={<TrendUpIcon />}
      />
      <StatCard
        label="Total Assets"
        value="$929,524"
        trend={{ direction: "up", value: "+$12.4k" }}
        icon={<WalletIcon />}
      />
      <StatCard
        label="Liabilities"
        value="$241,754"
        trend={{ direction: "down", value: "-$2.1k" }}
      />
      <StatCard
        label="Monthly Spend"
        value="$4,320"
        trend={{ direction: "down", value: "+18%" }}
      />
    </div>
  ),
}

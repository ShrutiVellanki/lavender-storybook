import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { expect, within } from "@storybook/test"
import { ChartContainer } from "@/components/ui/chart/chart-container"
import { ChartTooltipContent } from "@/components/ui/chart/chart-tooltip"
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart/chart-legend"
import type { ChartConfig } from "@/components/ui/chart/config"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"

const sampleData = [
  { month: "Jan", revenue: 4000, expenses: 2400 },
  { month: "Feb", revenue: 3000, expenses: 1398 },
  { month: "Mar", revenue: 2000, expenses: 9800 },
  { month: "Apr", revenue: 2780, expenses: 3908 },
  { month: "May", revenue: 1890, expenses: 4800 },
  { month: "Jun", revenue: 2390, expenses: 3800 },
  { month: "Jul", revenue: 3490, expenses: 4300 },
]

const chartConfig: ChartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
  expenses: {
    label: "Expenses",
    color: "var(--chart-5)",
  },
}

const meta: Meta<typeof ChartContainer> = {
  title: "Data Display/Chart",
  component: ChartContainer,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Themed Recharts wrapper system. ChartContainer provides a responsive container with automatic CSS variable injection for chart colors. ChartTooltipContent renders themed tooltips with configurable value formatters. ChartLegendContent renders themed legend items. Supports Area, Bar, and Line chart types.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ChartContainer>

export const Playground: Story = {
  name: "Area Chart",
  render: () => (
    <div className="w-full max-w-[600px]">
      <ChartContainer config={chartConfig} title="Revenue vs Expenses">
        <AreaChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            content={
              <ChartTooltipContent
                valueFormatter={(v) => `$${v.toLocaleString()}`}
              />
            }
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="var(--chart-1)"
            fill="var(--chart-1)"
            fillOpacity={0.2}
          />
          <Area
            type="monotone"
            dataKey="expenses"
            stroke="var(--chart-5)"
            fill="var(--chart-5)"
            fillOpacity={0.2}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText("Revenue vs Expenses")).toBeVisible()
  },
}

export const BarChartExample: Story = {
  name: "Bar Chart",
  render: () => (
    <div className="w-full max-w-[600px]">
      <ChartContainer config={chartConfig} title="Monthly Comparison">
        <BarChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            content={
              <ChartTooltipContent
                valueFormatter={(v) => `$${v.toLocaleString()}`}
              />
            }
          />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="revenue" fill="var(--chart-1)" radius={4} />
          <Bar dataKey="expenses" fill="var(--chart-5)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText("Monthly Comparison")).toBeVisible()
  },
}

export const LineChartExample: Story = {
  name: "Line Chart",
  render: () => (
    <div className="w-full max-w-[600px]">
      <ChartContainer config={chartConfig} title="Trend Over Time">
        <LineChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            content={
              <ChartTooltipContent
                valueFormatter={(v) => `$${v.toLocaleString()}`}
              />
            }
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="var(--chart-1)"
            strokeWidth={2}
            dot={{ fill: "var(--chart-1)" }}
          />
          <Line
            type="monotone"
            dataKey="expenses"
            stroke="var(--chart-5)"
            strokeWidth={2}
            dot={{ fill: "var(--chart-5)" }}
          />
        </LineChart>
      </ChartContainer>
    </div>
  ),
}

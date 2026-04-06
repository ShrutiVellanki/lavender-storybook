import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, within, waitFor } from "@storybook/test"
import TransactionList from "@/components/ui/TransactionList"

const sampleTransactions = [
  {
    id: "txn_1",
    customerName: "Alice Chen",
    amountCents: 4999,
    currency: "USD",
    status: "succeeded" as const,
    createdAt: "2024-03-15T14:32:00.000Z",
  },
  {
    id: "txn_2",
    customerName: "Bob Smith",
    amountCents: 12500,
    currency: "USD",
    status: "succeeded" as const,
    createdAt: "2024-03-15T11:20:00.000Z",
  },
  {
    id: "txn_3",
    customerName: "Carol Jones",
    amountCents: 3200,
    currency: "USD",
    status: "pending" as const,
    createdAt: "2024-03-15T09:15:00.000Z",
  },
  {
    id: "txn_4",
    customerName: "Dave Wilson",
    amountCents: 8900,
    currency: "USD",
    status: "failed" as const,
    createdAt: "2024-03-14T16:45:00.000Z",
  },
  {
    id: "txn_5",
    customerName: "Eve Brown",
    amountCents: 2100,
    currency: "USD",
    status: "succeeded" as const,
    createdAt: "2024-03-14T10:00:00.000Z",
  },
]

const meta: Meta<typeof TransactionList> = {
  title: "Data Display/TransactionList",
  component: TransactionList,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Sortable, searchable, filterable data table for financial transactions. Features column sorting with direction indicators, text search across customer name and ID, status filtering (succeeded/pending/failed), and computed volume totals. Formats currency and dates with Intl formatters.",
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof TransactionList>

export const Playground: Story = {
  args: {
    transactions: sampleTransactions,
    title: "Recent transactions",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText("Recent transactions")).toBeVisible()
    await expect(canvas.getByText("Alice Chen")).toBeVisible()

    const searchInput = canvas.getByPlaceholderText("Search customer or ID")
    await userEvent.type(searchInput, "Bob")

    await waitFor(() => {
      expect(canvas.getByText("Bob Smith")).toBeVisible()
      expect(canvas.queryByText("Alice Chen")).not.toBeInTheDocument()
    })
  },
}

export const Loading: Story = {
  args: {
    transactions: [],
    loading: true,
    title: "Recent transactions",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText("Recent transactions")).toBeVisible()
    await expect(canvas.getByText("Loading transactions...")).toBeVisible()
  },
}

export const Empty: Story = {
  args: {
    transactions: [],
    title: "Recent transactions",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText("No transactions found.")).toBeVisible()
  },
}

export const ManyRows: Story = {
  args: {
    transactions: Array.from({ length: 15 }, function (_, i) {
      const statuses = ["succeeded", "pending", "failed"] as const
      return {
        id: "txn_m" + (i + 1),
        customerName: "Customer " + (i + 1),
        amountCents: (i + 1) * 1000,
        currency: "USD",
        status: statuses[i % 3],
        createdAt: new Date(2024, 2, 15 - i).toISOString(),
      }
    }),
    title: "Recent transactions",
  },
}

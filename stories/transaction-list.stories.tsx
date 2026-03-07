import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import TransactionList from "@/components/ui/transaction-list"

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
  title: "Components/TransactionList",
  component: TransactionList,
  parameters: { layout: "centered" },
}

export default meta

type Story = StoryObj<typeof TransactionList>

export const Default: Story = {
  args: {
    transactions: sampleTransactions,
    title: "Recent transactions",
  },
}

export const Loading: Story = {
  args: {
    transactions: [],
    loading: true,
    title: "Recent transactions",
  },
}

export const Empty: Story = {
  args: {
    transactions: [],
    title: "Recent transactions",
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

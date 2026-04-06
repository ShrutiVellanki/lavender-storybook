import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { expect, within } from "@storybook/test"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

const meta: Meta<typeof Card> = {
  title: "Layout/Card",
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Composable container with five sub-components: CardHeader, CardTitle, CardDescription, CardContent, and CardFooter. Uses theme tokens for background, border, and shadow. Forwards refs on all sub-components.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Playground: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          Card description with supporting text goes here.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground">
          This is the card content area. You can place any content here
          including forms, images, or lists.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText("Card Title")).toBeVisible()
    await expect(canvas.getByText(/card description with supporting text/i)).toBeVisible()
    await expect(canvas.getByRole("button", { name: "Cancel" })).toBeInTheDocument()
    await expect(canvas.getByRole("button", { name: "Save" })).toBeInTheDocument()
  },
}

export const SimpleCard: Story = {
  render: () => (
    <Card className="w-[350px] p-6">
      <h3 className="text-lg font-semibold text-foreground">Simple Card</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        A minimal card with just padding, no header/footer structure.
      </p>
    </Card>
  ),
}

export const AccountCard: Story = {
  name: "Recipe: Account Card",
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardDescription>Total Balance</CardDescription>
        <CardTitle className="text-3xl">$12,450.00</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-green-600 dark:text-green-400 font-medium">
            +2.5%
          </span>
          <span className="text-muted-foreground">vs last month</span>
        </div>
      </CardContent>
    </Card>
  ),
}

export const CardGrid: Story = {
  name: "Recipe: Card Grid",
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-[600px]">
      {["Checking", "Savings", "Investment", "Credit"].map((name) => (
        <Card key={name} className="p-4">
          <p className="text-sm text-muted-foreground">{name}</p>
          <p className="text-xl font-semibold text-foreground mt-1">
            ${(Math.random() * 10000).toFixed(2)}
          </p>
        </Card>
      ))}
    </div>
  ),
}

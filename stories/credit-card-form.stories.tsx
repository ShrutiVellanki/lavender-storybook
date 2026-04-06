import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, within } from "@storybook/test"
import { CreditCardForm, CreditCardDisplay } from "@/components/ui/CreditCardForm"

const meta: Meta<typeof CreditCardForm> = {
  title: "Forms/CreditCardForm",
  component: CreditCardForm,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Interactive credit card form with a 3D card preview that flips when editing the CVV. Detects card type (Visa, Mastercard, Amex, Discover) and formats the card number with appropriate spacing. Includes CreditCardDisplay for standalone card rendering.",
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof CreditCardForm>

export const Playground: Story = {
  render: () => <CreditCardForm onSubmit={(data) => console.log("Card submitted:", data)} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const numberInput = canvas.getByPlaceholderText("0000 0000 0000 0000")
    await userEvent.type(numberInput, "4242424242424242")

    const nameInput = canvas.getByPlaceholderText("Full Name")
    await userEvent.type(nameInput, "SHRUTI VELLANKI")

    const expiryInput = canvas.getByPlaceholderText("MM/YY")
    await userEvent.type(expiryInput, "1228")

    const nameOnCard = await canvas.findByText("SHRUTI VELLANKI")
    await expect(nameOnCard).toBeInTheDocument()
  },
}

export const WithDisplayOnly: StoryObj<typeof CreditCardDisplay> = {
  render: () => (
    <CreditCardDisplay
      data={{ number: "4242 4242 4242 4242", name: "SHRUTI VELLANKI", expiry: "12/28", cvv: "123" }}
      flipped={false}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const name = canvas.getByText("SHRUTI VELLANKI")
    await expect(name).toBeVisible()

    const number = canvas.getByText(/4242 4242/)
    await expect(number).toBeVisible()
  },
}

export const DisplayFlipped: StoryObj<typeof CreditCardDisplay> = {
  render: () => (
    <CreditCardDisplay
      data={{ number: "5500 0000 0000 0004", name: "SHRUTI VELLANKI", expiry: "06/27", cvv: "456" }}
      flipped={true}
    />
  ),
}

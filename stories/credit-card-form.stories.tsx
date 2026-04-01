import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { CreditCardForm, CreditCardDisplay } from "@/components/ui/credit-card-form"

const meta: Meta<typeof CreditCardForm> = {
  title: "Components/CreditCardForm",
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

export const Default: Story = {
  render: () => <CreditCardForm onSubmit={(data) => console.log("Card submitted:", data)} />,
}

export const WithDisplayOnly: StoryObj<typeof CreditCardDisplay> = {
  render: () => (
    <CreditCardDisplay
      data={{ number: "4242 4242 4242 4242", name: "SHRUTI VELLANKI", expiry: "12/28", cvv: "123" }}
      flipped={false}
    />
  ),
}

export const DisplayFlipped: StoryObj<typeof CreditCardDisplay> = {
  render: () => (
    <CreditCardDisplay
      data={{ number: "5500 0000 0000 0004", name: "SHRUTI VELLANKI", expiry: "06/27", cvv: "456" }}
      flipped={true}
    />
  ),
}

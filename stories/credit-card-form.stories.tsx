import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import CreditCardForm from "@/components/ui/credit-card-form"

const meta: Meta<typeof CreditCardForm> = {
  title: "Components/CreditCardForm",
  component: CreditCardForm,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Complete credit card payment form with real-time validation. Detects card type (Visa, Mastercard, Amex), formats card number with appropriate spacing, validates via Luhn algorithm, and validates expiry and CVC with card-type-aware rules.",
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof CreditCardForm>

export const Default: Story = {
  render: () => <CreditCardForm />,
}

import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import CreditCardForm from "@/components/ui/credit-card-form"

const meta: Meta<typeof CreditCardForm> = {
  title: "Components/CreditCardForm",
  component: CreditCardForm,
  parameters: { layout: "centered" },
}

export default meta

type Story = StoryObj<typeof CreditCardForm>

export const Default: Story = {
  render: () => <CreditCardForm />,
}

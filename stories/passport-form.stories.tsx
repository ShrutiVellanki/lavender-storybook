import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import PassportForm from "@/components/ui/passport-form"

const meta: Meta<typeof PassportForm> = {
  title: "Components/PassportForm",
  component: PassportForm,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Country-aware passport number form with dynamic validation rules. Supports USA (9 digits), Canada (2 letters + 6 digits), and UK (9 alphanumeric) formats. Auto-uppercases input for Canada and UK. Validates on blur and submit.",
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof PassportForm>

export const Default: Story = {
  render: () => <PassportForm />,
}

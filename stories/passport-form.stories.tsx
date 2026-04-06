import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, within } from "@storybook/test"
import PassportForm from "@/components/ui/PassportForm"

const meta: Meta<typeof PassportForm> = {
  title: "Forms/PassportForm",
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

export const Playground: Story = {
  render: () => <PassportForm />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const countrySelect = canvas.getByLabelText("Country")
    await userEvent.selectOptions(countrySelect, "USA")

    const passportInput = canvas.getByLabelText("Government ID Number")
    await userEvent.type(passportInput, "123456789")

    await expect(passportInput).toHaveValue("123456789")
  },
}

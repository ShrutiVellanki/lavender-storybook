import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import PassportForm from "@/components/ui/passport-form"

const meta: Meta<typeof PassportForm> = {
  title: "Components/PassportForm",
  component: PassportForm,
  parameters: { layout: "centered" },
}

export default meta

type Story = StoryObj<typeof PassportForm>

export const Default: Story = {
  render: () => <PassportForm />,
}

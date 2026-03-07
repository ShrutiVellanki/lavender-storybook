import React from "react"
import type { Meta, Story } from "@storybook/react"
import { Button, type ButtonProps } from "../components/Button"

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  children: "Primary Button",
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: "Secondary Button",
}


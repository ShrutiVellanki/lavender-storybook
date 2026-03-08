import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <Accordion type="single" defaultValue="one">
        <AccordionItem value="one">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. Keyboard (Arrow keys, Home, End) and ARIA attributes are supported.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="two">
          <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
          <AccordionContent>
            Use <code>type="multiple"</code> on Accordion to allow multiple panels open at once.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="three">
          <AccordionTrigger>How do I control it?</AccordionTrigger>
          <AccordionContent>
            Pass <code>value</code> and <code>onValueChange</code> for controlled mode.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const Multiple: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <Accordion type="multiple" defaultValue={["faq-1"]}>
        <AccordionItem value="faq-1">
          <AccordionTrigger>Shipping options</AccordionTrigger>
          <AccordionContent>
            Standard (5–7 days), Express (2–3 days), Next day.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2">
          <AccordionTrigger>Returns policy</AccordionTrigger>
          <AccordionContent>
            ‎30-day returns. Item must be unused and in original packaging.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3">
          <AccordionTrigger>Contact support</AccordionTrigger>
          <AccordionContent>
            Email support@example.com or use the live chat.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const Controlled: Story = {
  render: function ControlledAccordion() {
    const [value, setValue] = useState<string>("")
    return (
      <div style={{ width: 360 }}>
        <p style={{ marginBottom: 8, fontSize: 13, color: "#666" }}>
          Open: {value || "(none)"}
        </p>
        <Accordion type="single" value={value} onValueChange={setValue}>
          <AccordionItem value="first">
            <AccordionTrigger>First panel</AccordionTrigger>
            <AccordionContent>First panel content.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="second">
            <AccordionTrigger>Second panel</AccordionTrigger>
            <AccordionContent>Second panel content.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    )
  },
}

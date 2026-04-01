import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion"

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Collapsible content panels. Supports single-expand and multiple-expand modes, controlled and uncontrolled usage, and full keyboard navigation (ArrowDown, ArrowUp, Home, End). Built with React context for nested composition via Accordion, AccordionItem, AccordionTrigger, and AccordionContent sub-components.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => (
    <div className="w-[360px]">
      <Accordion type="single" defaultValue="one">
        <AccordionItem value="one">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. Keyboard (Arrow keys, Home, End) and ARIA attributes are
            supported out of the box.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="two">
          <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
          <AccordionContent>
            Use <code className="text-primary">type="multiple"</code> on
            Accordion to allow multiple panels open at once.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="three">
          <AccordionTrigger>How do I control it?</AccordionTrigger>
          <AccordionContent>
            Pass <code className="text-primary">value</code> and{" "}
            <code className="text-primary">onValueChange</code> for controlled
            mode.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const Multiple: Story = {
  render: () => (
    <div className="w-[360px]">
      <Accordion type="multiple" defaultValue={["faq-1"]}>
        <AccordionItem value="faq-1">
          <AccordionTrigger>Shipping options</AccordionTrigger>
          <AccordionContent>
            Standard (5-7 days), Express (2-3 days), Next day.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2">
          <AccordionTrigger>Returns policy</AccordionTrigger>
          <AccordionContent>
            30-day returns. Item must be unused and in original packaging.
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
      <div className="w-[360px]">
        <p className="mb-2 text-sm text-muted-foreground">
          Open: {value || "(none)"}
        </p>
        <Accordion type="single" value={value} onValueChange={(v) => setValue(v as string)}>
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

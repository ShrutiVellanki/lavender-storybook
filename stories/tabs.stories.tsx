import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsPanel } from "@/components/ui/tabs"

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: { layout: "centered" },
}

export default meta

type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: function TabsDefault() {
    return (
      <div style={{ width: 400 }}>
        <Tabs defaultValue="tab1">
          <TabsList aria-label="Example tabs">
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsPanel value="tab1">Content for tab 1.</TabsPanel>
        <TabsPanel value="tab2">Content for tab 2.</TabsPanel>
        <TabsPanel value="tab3">Content for tab 3.</TabsPanel>
        </Tabs>
      </div>
    )
  },
}

export const Vertical: Story = {
  render: function TabsVertical() {
    return (
      <div style={{ display: "flex", gap: 16 }}>
        <Tabs defaultValue="a" orientation="vertical">
          <TabsList aria-label="Vertical tabs">
          <TabsTrigger value="a">First</TabsTrigger>
          <TabsTrigger value="b">Second</TabsTrigger>
          <TabsTrigger value="c">Third</TabsTrigger>
        </TabsList>
        <div style={{ flex: 1 }}>
          <TabsPanel value="a">First panel content.</TabsPanel>
          <TabsPanel value="b">Second panel content.</TabsPanel>
          <TabsPanel value="c">Third panel content.</TabsPanel>
        </div>
        </Tabs>
      </div>
    )
  },
}

export const Controlled: Story = {
  render: function TabsControlled() {
    const [value, setValue] = useState("one")
    return (
      <div style={{ width: 400 }}>
        <Tabs value={value} onValueChange={setValue}>
          <TabsList aria-label="Controlled tabs">
            <TabsTrigger value="one">One</TabsTrigger>
            <TabsTrigger value="two">Two</TabsTrigger>
          </TabsList>
          <TabsPanel value="one">Selected: one</TabsPanel>
          <TabsPanel value="two">Selected: two</TabsPanel>
        </Tabs>
        <p style={{ marginTop: 12, fontSize: 14, color: "#666" }}>
          Current value: {value}
        </p>
      </div>
    )
  },
}

export const WithDisabledTab: Story = {
  render: function TabsWithDisabled() {
    return (
      <div style={{ width: 400 }}>
        <Tabs defaultValue="active">
          <TabsList aria-label="Tabs with disabled">
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="disabled" disabled>
            Disabled
          </TabsTrigger>
          <TabsTrigger value="other">Other</TabsTrigger>
        </TabsList>
        <TabsPanel value="active">Active content.</TabsPanel>
        <TabsPanel value="disabled">Disabled content (cannot select via tab).</TabsPanel>
        <TabsPanel value="other">Other content.</TabsPanel>
        </Tabs>
      </div>
    )
  },
}

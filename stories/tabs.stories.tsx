import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsPanel } from "@/components/ui/tabs"

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Accessible tab navigation with ARIA roving tabindex. Supports horizontal and vertical orientations, controlled and uncontrolled modes, and disabled tabs. Composed via Tabs, TabsList, TabsTrigger, and TabsPanel sub-components.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsPanel value="account">
          <div className="p-4 rounded-lg border border-border mt-2">
            <h3 className="text-base font-medium text-foreground">Account</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Make changes to your account settings here.
            </p>
          </div>
        </TabsPanel>
        <TabsPanel value="password">
          <div className="p-4 rounded-lg border border-border mt-2">
            <h3 className="text-base font-medium text-foreground">Password</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Change your password here. After saving, you'll be logged out.
            </p>
          </div>
        </TabsPanel>
        <TabsPanel value="settings">
          <div className="p-4 rounded-lg border border-border mt-2">
            <h3 className="text-base font-medium text-foreground">Settings</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Manage your notification preferences and other settings.
            </p>
          </div>
        </TabsPanel>
      </Tabs>
    </div>
  ),
}

export const WithDisabled: Story = {
  render: () => (
    <div className="w-[400px]">
      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="disabled" disabled>
            Disabled
          </TabsTrigger>
          <TabsTrigger value="other">Other</TabsTrigger>
        </TabsList>
        <TabsPanel value="active">
          <p className="text-sm text-foreground mt-4">Active tab content.</p>
        </TabsPanel>
        <TabsPanel value="other">
          <p className="text-sm text-foreground mt-4">Other tab content.</p>
        </TabsPanel>
      </Tabs>
    </div>
  ),
}

export const Controlled: Story = {
  render: function ControlledTabs() {
    const [value, setValue] = useState("tab1")
    return (
      <div className="w-[400px]">
        <p className="mb-2 text-sm text-muted-foreground">
          Active: {value}
        </p>
        <Tabs value={value} onValueChange={setValue}>
          <TabsList>
            <TabsTrigger value="tab1">Overview</TabsTrigger>
            <TabsTrigger value="tab2">Analytics</TabsTrigger>
            <TabsTrigger value="tab3">Reports</TabsTrigger>
          </TabsList>
          <TabsPanel value="tab1">
            <p className="text-sm text-foreground mt-4">Overview content.</p>
          </TabsPanel>
          <TabsPanel value="tab2">
            <p className="text-sm text-foreground mt-4">Analytics content.</p>
          </TabsPanel>
          <TabsPanel value="tab3">
            <p className="text-sm text-foreground mt-4">Reports content.</p>
          </TabsPanel>
        </Tabs>
      </div>
    )
  },
}

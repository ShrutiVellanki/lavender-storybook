import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { VirtualizedList } from "@/components/ui/virtualized-list"

const manyItems = Array.from({ length: 500 }, function (_, i) {
  return "Item " + (i + 1)
})

function renderRow(item: string, index: number) {
  return (
    <div
      style={{
        padding: "8px 12px",
        borderBottom: "1px solid #eee",
        fontSize: 14,
      }}
    >
      {item}
    </div>
  )
}

const StringList = VirtualizedList

const meta: Meta<typeof VirtualizedList> = {
  title: "Components/VirtualizedList",
  component: VirtualizedList,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Windowed list that only renders visible items plus a configurable overscan buffer. Handles thousands of items efficiently by absolutely positioning only the rows in the viewport. Generic typed — accepts any data shape via the renderItem callback.",
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof VirtualizedList>

export const Default: Story = {
  render: function VirtualizedDefault() {
    return (
      <div style={{ width: 320 }}>
        <StringList
          items={manyItems}
          height={300}
          itemHeight={40}
          overscan={4}
          renderItem={renderRow}
        />
      </div>
    )
  },
}

export const ShortList: Story = {
  render: function VirtualizedShort() {
    const items = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon"]
    return (
      <div style={{ width: 280 }}>
        <StringList
          items={items}
          height={200}
          itemHeight={36}
          renderItem={renderRow}
        />
      </div>
    )
  },
}

export const LargeItems: Story = {
  render: function VirtualizedLarge() {
    const items = Array.from({ length: 100 }, function (_, i) {
      return "Row " + (i + 1)
    })
    return (
      <div style={{ width: 320 }}>
        <StringList
          items={items}
          height={400}
          itemHeight={56}
          overscan={2}
          renderItem={renderRow}
        />
      </div>
    )
  },
}

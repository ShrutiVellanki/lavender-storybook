import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Pagination } from "@/components/ui/Pagination"

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Page navigation with smart ellipsis. Automatically hides when there's only one page. Supports configurable sibling count for how many page numbers appear around the current page.",
      },
    },
  },
  argTypes: {
    currentPage: { control: { type: "number", min: 1 } },
    totalPages: { control: { type: "number", min: 1 } },
    siblingCount: { control: { type: "number", min: 0, max: 3 } },
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
  },
}

export const MiddlePage: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
  },
}

export const FewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 3,
  },
}

export const ManyPages: Story = {
  args: {
    currentPage: 12,
    totalPages: 50,
    siblingCount: 2,
  },
}

export const Interactive: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    return (
      <div className="space-y-4 text-center">
        <p className="text-sm text-muted-foreground">Page {page} of 20</p>
        <Pagination currentPage={page} totalPages={20} onPageChange={setPage} />
      </div>
    )
  },
}

export const SinglePage: Story = {
  args: {
    currentPage: 1,
    totalPages: 1,
  },
  parameters: {
    docs: {
      description: {
        story: "When there's only one page, the component renders nothing.",
      },
    },
  },
}

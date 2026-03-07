import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Modal } from "@/components/ui/modal"

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: { layout: "centered" },
}

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Open modal
        </button>
        <Modal open={open} onClose={() => setOpen(false)} title="Modal title">
          <p className="text-sm text-muted-foreground">
            This is the modal content. You can close by clicking the backdrop, pressing Escape, or the close button.
          </p>
        </Modal>
      </>
    )
  },
}

export const WithButtonTrigger: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Open modal
        </button>
        <Modal open={open} onClose={() => setOpen(false)} title="Confirm action">
          <p className="text-sm text-muted-foreground">
            Are you sure you want to continue? This action cannot be undone.
          </p>
          <div className="mt-4 flex justify-end gap-2">
            <button
              type="button"
              className="rounded-md border border-input bg-background px-4 py-2 text-sm hover:bg-accent"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
              onClick={() => setOpen(false)}
            >
              Confirm
            </button>
          </div>
        </Modal>
      </>
    )
  },
}

export const NoTitleNoCloseButton: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Open (no title/close button)
        </button>
        <Modal open={open} onClose={() => setOpen(false)} title="" showCloseButton={false}>
          <p className="text-sm text-muted-foreground">
            Modal without a title or close button. Close via backdrop or Escape.
          </p>
        </Modal>
      </>
    )
  },
}

export const Controlled: Story = {
  render: function ControlledStory() {
    const [open, setOpen] = useState(false)
    return (
      <>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Open
        </button>
        <Modal open={open} onClose={() => setOpen(false)} title="Controlled modal">
          <p className="text-sm text-muted-foreground">
            Open state is controlled by the parent. Close button or Escape will call onClose.
          </p>
        </Modal>
      </>
    )
  },
}

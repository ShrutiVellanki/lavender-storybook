import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Modal } from "@/components/ui/Modal"
import { Button } from "@/components/ui/Button"

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Portal-based dialog rendered at the document body. Features focus trapping, Escape key dismissal, backdrop click handling, and scroll locking. Accepts a title, optional close button, and configurable dismiss behavior.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Modal title">
          <p className="text-sm text-muted-foreground">
            This is the modal content. You can close by clicking the backdrop,
            pressing Escape, or the close button.
          </p>
        </Modal>
      </>
    )
  },
}

export const WithActions: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Confirm action</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Confirm action"
        >
          <p className="text-sm text-muted-foreground">
            Are you sure you want to continue? This action cannot be undone.
          </p>
          <div className="mt-4 flex justify-end gap-2">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
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
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open (no title/close)
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title=""
          showCloseButton={false}
        >
          <p className="text-sm text-muted-foreground">
            Modal without a title or close button. Close via backdrop or Escape.
          </p>
        </Modal>
      </>
    )
  },
}

export const DestructiveConfirm: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="destructive" onClick={() => setOpen(true)}>
          Delete account
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Delete account?"
        >
          <p className="text-sm text-muted-foreground">
            This will permanently delete your account and all associated data.
            This action cannot be undone.
          </p>
          <div className="mt-4 flex justify-end gap-2">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => setOpen(false)}>
              Delete
            </Button>
          </div>
        </Modal>
      </>
    )
  },
}

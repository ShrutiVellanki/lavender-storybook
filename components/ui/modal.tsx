"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ModalProps {
  /** Controlled: whether the modal is open */
  open: boolean
  /** Called when the modal should close (backdrop click, Escape, or close button) */
  onClose: () => void
  /** Dialog title for accessibility (aria-labelledby) */
  title?: string
  /** Optional description id for aria-describedby */
  descriptionId?: string
  /** Modal content */
  children: React.ReactNode
  /** Close when backdrop is clicked (default: true) */
  closeOnBackdropClick?: boolean
  /** Close when Escape is pressed (default: true) */
  closeOnEscape?: boolean
  /** Show a close button in the corner (default: true) */
  showCloseButton?: boolean
  className?: string
  /** Content wrapper className */
  contentClassName?: string
}

export function Modal({
  open,
  onClose,
  title,
  descriptionId,
  children,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  className,
  contentClassName,
}: ModalProps) {
  const titleId = React.useId()
  const contentRef = React.useRef<HTMLDivElement>(null)
  const previousActiveElement = React.useRef<HTMLElement | null>(null)

  // Keyboard: Escape to close
  React.useEffect(() => {
    if (!open || !closeOnEscape) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        onClose()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [open, closeOnEscape, onClose])

  // Focus management: capture focus on open, restore on close
  React.useEffect(() => {
    if (open) {
      previousActiveElement.current = document.activeElement as HTMLElement | null
      // Move focus into modal after paint
      const t = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const firstFocusable = contentRef.current?.querySelector<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
          if (firstFocusable) {
            firstFocusable.focus()
          } else {
            contentRef.current?.focus()
          }
        })
      })
      return () => cancelAnimationFrame(t)
    } else {
      previousActiveElement.current?.focus?.()
      previousActiveElement.current = null
    }
  }, [open])

  // Prevent body scroll when open
  React.useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [open])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target !== e.currentTarget) return
    if (closeOnBackdropClick) onClose()
  }

  if (!open) return null

  const dialog = (
    <div
      role="presentation"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
    >
      {/* Backdrop */}
      <div
        aria-hidden
        onClick={handleBackdropClick}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 9998,
        }}
      />
      {/* Content */}
      <div
        ref={contentRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={descriptionId || undefined}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          zIndex: 10000,
          width: "100%",
          maxWidth: 28 * 16,
          borderRadius: 8,
          backgroundColor: "#fff",
          padding: 20,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
          outline: "none",
        }}
        className={contentClassName}
      >
        <div className={cn("flex flex-col gap-3", className)}>
          {(title || showCloseButton) && (
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
              {title && (
                <h2 id={titleId} style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close dialog"
                  style={{
                    marginLeft: "auto",
                    padding: 4,
                    border: "none",
                    borderRadius: 4,
                    background: "transparent",
                    color: "#6b7280",
                    cursor: "pointer",
                  }}
                >
                  <X size={16} />
                </button>
              )}
            </div>
          )}
          <div>{children}</div>
        </div>
      </div>
    </div>
  )

  if (typeof document === "undefined") return null
  return createPortal(dialog, document.body)
}

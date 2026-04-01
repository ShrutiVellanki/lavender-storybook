import * as React from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  descriptionId?: string
  children: React.ReactNode
  closeOnBackdropClick?: boolean
  closeOnEscape?: boolean
  showCloseButton?: boolean
  className?: string
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

  React.useEffect(() => {
    if (open) {
      previousActiveElement.current = document.activeElement as HTMLElement | null
      const t = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const firstFocusable = contentRef.current?.querySelector<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div
        aria-hidden
        onClick={handleBackdropClick}
        className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm"
      />
      <div
        ref={contentRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={descriptionId || undefined}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "relative z-[10000] w-full max-w-md rounded-lg bg-card p-5 shadow-lg outline-none border border-border",
          contentClassName,
        )}
      >
        <div className={cn("flex flex-col gap-3", className)}>
          {(title || showCloseButton) && (
            <div className="flex items-start justify-between gap-3">
              {title && (
                <h2
                  id={titleId}
                  className="m-0 text-base font-semibold text-card-foreground"
                >
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close dialog"
                  className="ml-auto p-1 border-none rounded bg-transparent text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
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

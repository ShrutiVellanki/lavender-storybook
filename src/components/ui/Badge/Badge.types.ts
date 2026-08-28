import React from "react"

export type BadgeVariant = "primary" | "secondary" | "danger" | "success" | "warning"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant
  leadingIcon?: React.ReactNode
}

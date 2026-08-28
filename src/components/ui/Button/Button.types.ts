import React from "react"

export type ButtonVariant = "primary" | "secondary" | "danger"
export type ButtonSize = "small" | "medium" | "large"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
}

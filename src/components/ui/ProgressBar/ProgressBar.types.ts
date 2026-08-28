export type ProgressBarVariant = "primary" | "success" | "warning" | "danger"
export type ProgressBarSize = "small" | "medium" | "large"

export interface ProgressBarProps {
  value: number
  max?: number
  label?: string
  showValue?: boolean
  valueFormatter?: (value: number, max: number) => string
  variant?: ProgressBarVariant
  size?: ProgressBarSize
  className?: string
}

import { ProgressBarVariant, ProgressBarSize } from "./ProgressBar.types"

export const variantColors: Record<ProgressBarVariant, string> = {
  primary: "bg-primary",
  success: "bg-chart-2",
  warning: "bg-chart-4",
  danger: "bg-destructive",
}

export const sizeClasses: Record<ProgressBarSize, string> = {
  small: "h-1.5",
  medium: "h-1.5",
  large: "h-4",
}

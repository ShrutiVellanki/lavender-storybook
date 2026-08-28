import { BadgeVariant } from "./Badge.types"

export const variantClasses: Record<BadgeVariant, string> = {
  primary: "border-transparent bg-primary/10 text-primary",
  secondary: "border-transparent bg-secondary text-secondary-foreground",
  danger: "border-transparent bg-destructive/10 text-destructive",
  success: "border-transparent bg-chart-2/10 text-chart-2",
  warning: "border-transparent bg-chart-4/10 text-chart-4",
}

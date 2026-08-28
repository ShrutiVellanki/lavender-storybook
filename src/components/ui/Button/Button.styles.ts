import { ButtonVariant, ButtonSize } from "./Button.types"

export const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  danger: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
}

export const sizeClasses: Record<ButtonSize, string> = {
  small: "h-[var(--size-sm)] px-3 text-label",
  medium: "h-[var(--size-md)] px-4 text-label",
  large: "h-[var(--size-lg)] px-5 text-label",
}

export const iconOnlySizeClasses: Record<ButtonSize, string> = {
  small: "h-[var(--size-sm)] w-[var(--size-sm)] px-0",
  medium: "h-[var(--size-md)] w-[var(--size-md)] px-0",
  large: "h-[var(--size-lg)] w-[var(--size-lg)] px-0",
}

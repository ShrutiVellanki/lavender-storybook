import { cn } from "@/lib/utils"
import { BadgeProps } from "./Badge.types"
import { variantClasses } from "./Badge.styles"

export function Badge({ className, variant = "primary", leadingIcon, children, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-label tracking-wide transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {leadingIcon && <span className="shrink-0 [&>svg]:w-3 [&>svg]:h-3">{leadingIcon}</span>}
      {children}
    </div>
  )
}

import React from "react"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { ButtonProps } from "./Button.types"
import { variantClasses, sizeClasses, iconOnlySizeClasses } from "./Button.styles"

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "medium",
      disabled,
      loading = false,
      leadingIcon,
      trailingIcon,
      children,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading
    const iconOnly = !children && Boolean(leadingIcon || trailingIcon)

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-control",
          "transition-all duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
          "disabled:pointer-events-none disabled:opacity-50",
          "active:scale-[0.98]",
          "[&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
          variantClasses[variant],
          iconOnly ? iconOnlySizeClasses[size] : sizeClasses[size],
          className,
        )}
        {...props}
      >
        {loading ? <Loader2 className="animate-spin" /> : leadingIcon}
        {children}
        {!loading && trailingIcon}
      </button>
    )
  },
)

Button.displayName = "Button"

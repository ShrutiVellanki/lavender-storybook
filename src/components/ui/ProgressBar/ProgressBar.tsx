import { cn } from "@/lib/utils"
import { ProgressBarProps } from "./ProgressBar.types"
import { variantColors, sizeClasses } from "./ProgressBar.styles"

export function ProgressBar({
  value,
  max = 100,
  label,
  showValue = true,
  valueFormatter,
  variant = "primary",
  size = "medium",
  className,
}: ProgressBarProps) {
  const clamped = Math.min(Math.max(value, 0), max)
  const pct = max > 0 ? (clamped / max) * 100 : 0

  const formatted = valueFormatter
    ? valueFormatter(clamped, max)
    : `${Math.round(pct)}%`

  return (
    <div className={cn("w-full", className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between mb-1.5">
          {label && (
            <span className="text-label text-foreground">{label}</span>
          )}
          {showValue && (
            <span className="text-label tabular-nums text-muted-foreground">
              {formatted}
            </span>
          )}
        </div>
      )}
      <div
        className={cn(
          "w-full rounded-pill bg-muted overflow-hidden",
          sizeClasses[size],
        )}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
      >
        <div
          className={cn(
            "h-full rounded-pill transition-all duration-500 ease-out",
            variantColors[variant],
          )}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

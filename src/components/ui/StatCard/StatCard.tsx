import { cn } from "@/lib/utils"
import { StatCardProps } from "./StatCard.types"
import { trendConfig } from "./StatCard.styles"

export function StatCard({ label, value, trend, leadingIcon, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-card border border-border bg-card p-5 flex flex-col gap-3 transition-all duration-200",
        "hover:shadow-sm hover:border-border/80",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-label text-muted-foreground uppercase tracking-[0.06em]">
          {label}
        </span>
        {leadingIcon && (
          <span className="w-8 h-8 rounded-control bg-primary/8 flex items-center justify-center text-primary">
            {leadingIcon}
          </span>
        )}
      </div>
      <p className="text-number-lg text-foreground">
        {value}
      </p>
      {trend && (
        <span className={cn("text-label", trendConfig[trend.direction].color)}>
          {trendConfig[trend.direction].arrow} {trend.value}
        </span>
      )}
    </div>
  )
}

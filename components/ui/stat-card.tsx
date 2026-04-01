import React from "react"
import { cn } from "@/lib/utils"

type TrendDirection = "up" | "down" | "neutral"

interface StatCardProps {
  label: string
  value: string
  trend?: { direction: TrendDirection; value: string }
  icon?: React.ReactNode
  className?: string
}

const trendConfig: Record<TrendDirection, { color: string; arrow: string }> = {
  up: {
    color: "text-[#56949f] dark:text-[#9ccfd8]",
    arrow: "↑",
  },
  down: {
    color: "text-destructive",
    arrow: "↓",
  },
  neutral: {
    color: "text-muted-foreground",
    arrow: "→",
  },
}

export function StatCard({ label, value, trend, icon, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-5 flex flex-col gap-3 transition-colors",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
        {icon && <span className="text-muted-foreground">{icon}</span>}
      </div>
      <p className="text-2xl font-semibold tracking-tight text-foreground">{value}</p>
      {trend && (
        <div className="flex items-center gap-1.5">
          <span className={cn("text-sm font-medium", trendConfig[trend.direction].color)}>
            {trendConfig[trend.direction].arrow} {trend.value}
          </span>
        </div>
      )}
    </div>
  )
}

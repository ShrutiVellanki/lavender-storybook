import { cn } from "@/lib/utils"

export const inputCls = cn(
  "w-full h-[var(--size-md)] px-3 text-body rounded-control border border-input bg-background text-foreground",
  "placeholder:text-muted-foreground",
  "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 ring-offset-background",
  "transition-colors",
)

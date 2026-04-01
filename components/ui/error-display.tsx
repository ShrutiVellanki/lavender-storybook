import React from "react"
import { AlertCircle, RefreshCcw } from "lucide-react"
import { cn } from "@/lib/utils"

interface ErrorDisplayProps {
  message: string
  title?: string
  onRetry?: () => void
  className?: string
  fullScreen?: boolean
}

export function ErrorDisplay({
  message,
  title = "Something went wrong",
  onRetry,
  className,
  fullScreen = true,
}: ErrorDisplayProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center bg-background",
        fullScreen && "min-h-screen",
        !fullScreen && "py-12",
        className,
      )}
    >
      <div className="p-8 rounded-xl bg-card border border-border max-w-md w-full mx-4">
        <div className="flex items-center justify-center mb-6">
          <div className="p-3 rounded-full bg-destructive/10">
            <AlertCircle className="w-8 h-8 text-destructive" />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-card-foreground text-center mb-2">
          {title}
        </h2>
        <p className="text-muted-foreground text-center mb-6">{message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="flex items-center justify-center w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <RefreshCcw className="w-4 h-4 mr-2" />
            Try again
          </button>
        )}
      </div>
    </div>
  )
}

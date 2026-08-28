import { AlertCircle, RefreshCcw } from "lucide-react"
import { cn } from "@/lib/utils"
import { ErrorDisplayProps } from "./ErrorDisplay.types"
import { Button } from "@/components/ui/Button"

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
      <div className="p-6 rounded-card bg-card border border-border max-w-md w-full mx-4 shadow-sm">
        <div className="flex items-center justify-center mb-5">
          <div className="p-3 rounded-circular bg-destructive/10">
            <AlertCircle className="w-6 h-6 text-destructive" />
          </div>
        </div>
        <h2 className="text-heading text-card-foreground text-center mb-1.5">
          {title}
        </h2>
        <p className="text-body text-muted-foreground text-center mb-5">{message}</p>
        {onRetry && (
          <Button className="w-full" leadingIcon={<RefreshCcw />} onClick={onRetry}>
            Try again
          </Button>
        )}
      </div>
    </div>
  )
}

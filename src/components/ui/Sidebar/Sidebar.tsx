import React from "react"
import { ChevronLeft, ChevronRight, PiggyBank } from "lucide-react"
import { cn } from "@/lib/utils"
import type { SidebarProps } from "./Sidebar.types"

export const Sidebar: React.FC<SidebarProps> = ({
  brand,
  items,
  footer,
  collapsed = false,
  onCollapsedChange,
  onNavigate,
  className,
}) => {
  return (
    <aside
      className={cn(
        "flex flex-col border-r transition-all duration-300 ease-in-out h-full",
        "bg-card border-border",
        collapsed ? "w-[60px]" : "w-[240px]",
        className,
      )}
    >
      {/* Brand */}
      <div
        className={cn(
          "h-14 flex items-center shrink-0 border-b border-border",
          collapsed ? "justify-center" : "justify-between px-5",
        )}
      >
        {brand ?? (
          <div className="flex items-center gap-2.5 min-w-0">
            <PiggyBank className="w-[22px] h-[22px] shrink-0 text-primary" />
            {!collapsed && (
              <span className="text-[15px] font-semibold tracking-[-0.02em] text-foreground truncate">
                Lavender
              </span>
            )}
          </div>
        )}
        {onCollapsedChange && !collapsed && (
          <button
            onClick={() => onCollapsedChange(true)}
            className="w-7 h-7 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}
        {onCollapsedChange && collapsed && (
          <button
            onClick={() => onCollapsedChange(false)}
            className="absolute -right-3 top-4 w-6 h-6 flex items-center justify-center rounded-full bg-card border border-border shadow-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronRight className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className={cn("flex-1 overflow-y-auto py-3", collapsed ? "px-2" : "px-3")}>
        <div className="space-y-0.5">
          {items.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => onNavigate?.(item.href)}
              title={collapsed ? item.label : undefined}
              className={cn(
                "group w-full flex items-center gap-3 rounded-lg transition-all duration-150",
                collapsed ? "justify-center px-0 py-2.5" : "px-3 py-2",
                item.isActive
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/60",
              )}
            >
              {item.icon && (
                <span className={cn("w-[18px] h-[18px] shrink-0 [&>svg]:w-full [&>svg]:h-full", !item.isActive && "opacity-70 group-hover:opacity-100 transition-opacity")}>
                  {item.icon}
                </span>
              )}
              {!collapsed && <span className="text-[13px] tracking-[-0.01em]">{item.label}</span>}
            </button>
          ))}
        </div>
      </nav>

      {/* Footer */}
      {footer && (
        <div className={cn("border-t border-border", collapsed ? "p-2" : "p-3")}>
          {footer}
        </div>
      )}
    </aside>
  )
}

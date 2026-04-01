import React, { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Sidebar } from "../Sidebar/Sidebar"
import type { AppShellProps } from "./AppShell.types"

function useIsMobile(breakpoint = 767) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`)
    const handler = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(e.matches)
    handler(mq)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [breakpoint])
  return isMobile
}

export const AppShell: React.FC<AppShellProps> = ({
  children,
  sidebarItems,
  sidebarFooter,
  brand,
  className,
}) => {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (!isMobile) setMobileOpen(false)
  }, [isMobile])

  return (
    <div className={cn("min-h-screen bg-background", className)}>
      {/* Mobile top bar */}
      {isMobile && (
        <div className="fixed top-0 left-0 right-0 z-40 h-14 flex items-center px-4 border-b bg-card border-border">
          <button
            onClick={() => setMobileOpen(true)}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-foreground hover:bg-accent transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span className="ml-3 text-[15px] font-semibold tracking-[-0.02em] text-foreground">
            Lavender
          </span>
        </div>
      )}

      {/* Mobile overlay */}
      {isMobile && mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      {isMobile ? (
        <div className={`fixed inset-y-0 left-0 z-50 transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <Sidebar
            brand={brand}
            items={sidebarItems}
            footer={sidebarFooter}
            collapsed={false}
            onCollapsedChange={() => setMobileOpen(false)}
            onNavigate={() => setMobileOpen(false)}
          />
        </div>
      ) : (
        <div className="fixed inset-y-0 left-0 z-30">
          <Sidebar
            brand={brand}
            items={sidebarItems}
            footer={sidebarFooter}
            collapsed={collapsed}
            onCollapsedChange={setCollapsed}
          />
        </div>
      )}

      <main className={cn(
        "transition-all duration-300 ease-in-out",
        isMobile ? "pt-14 pl-0" : collapsed ? "pl-16" : "pl-60",
      )}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8">
          {children}
        </div>
      </main>
    </div>
  )
}

import type React from "react"
import type { NavItem } from "../Sidebar/Sidebar.types"

export interface AppShellProps {
  children: React.ReactNode
  sidebarItems: NavItem[]
  sidebarFooter?: React.ReactNode
  brand?: React.ReactNode
  className?: string
}

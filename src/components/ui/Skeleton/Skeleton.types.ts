import React from "react"

export type SkeletonVariant = "text" | "circular" | "rectangular" | "rounded"

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant
  width?: string | number
  height?: string | number
  /** Number of repeated skeleton lines (only applies to "text" variant) */
  lines?: number
  /** Gap between lines when lines > 1 */
  gap?: string
}

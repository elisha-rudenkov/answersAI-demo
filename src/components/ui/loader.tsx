"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
  variant?: "default" | "subtle" | "minimal"
}

export function Loader({
  className,
  size = "md",
  variant = "default",
  ...props
}: LoaderProps) {
  return (
    <div 
      className={cn(
        "inline-flex items-center justify-center",
        size === "sm" && "h-4 w-4",
        size === "md" && "h-5 w-5",
        size === "lg" && "h-6 w-6",
        className
      )}
      {...props}
    >
      <div 
        className={cn(
          "animate-spin rounded-full border-2 border-solid border-current border-r-transparent",
          "h-full w-full",
          variant === "default" && "text-primary",
          variant === "subtle" && "text-muted-foreground/70",
          variant === "minimal" && "text-muted-foreground/50 border-[1px]"
        )}
      />
    </div>
  )
}

export function PageLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-[1px]">
      <Loader size="lg" className="text-primary" />
    </div>
  )
}

export function ButtonLoader({ className }: { className?: string }) {
  return <Loader size="sm" className={cn("mr-2", className)} />
} 
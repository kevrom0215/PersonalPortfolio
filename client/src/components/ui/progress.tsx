import * as React from "react"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value: number
    max?: number
    barColor?: string
  }
>(({ className, value, max = 100, barColor = "bg-primary", ...props }, ref) => {
  const percentage = (value / max) * 100;
  
  return (
    <div
      ref={ref}
      className={cn(
        "h-[6px] w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
        className
      )}
      {...props}
    >
      <div
        className={cn("h-full w-full flex-1 transition-all duration-1000", barColor)}
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
})
Progress.displayName = "Progress"

export { Progress }

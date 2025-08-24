import React from 'react'

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

const Separator = ({ orientation = "horizontal", className = "" }: SeparatorProps) => (
  <div
    className={`shrink-0 bg-zion-slate-200 dark:bg-zion-slate-800 ${
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"
    } ${className}`}
  />
)

export { Separator }
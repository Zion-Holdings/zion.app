import * as React from "react"
import { cn } from "@/lib/utils"

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  onValueChange?: (value: string) => void;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, onValueChange, ...props }, ref) => (
    <select
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      onChange={(e) => onValueChange?.(e.target.value)}
      {...props}
    >
      {children}
    </select>
  )
)
Select.displayName = "Select"

export interface SelectTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <button
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
)
SelectTrigger.displayName = "SelectTrigger"

export interface SelectValueProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  placeholder?: string;
}

const SelectValue = React.forwardRef<HTMLSpanElement, SelectValueProps>(
  ({ className, placeholder, ...props }, ref) => (
    <span
      className={cn("block truncate", className)}
      ref={ref}
      {...props}
    >
      {placeholder}
    </span>
  )
)
SelectValue.displayName = "SelectValue"

export interface SelectContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className, children, ...props }, ref) => (
    <div
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
)
SelectContent.displayName = "SelectContent"

export interface SelectItemProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {}

const SelectItem = React.forwardRef<HTMLOptionElement, SelectItemProps>(
  ({ className, children, value, ...props }, ref) => (
    <option
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      ref={ref}
      value={value}
      {...props}
    >
      {children}
    </option>
  )
)
SelectItem.displayName = "SelectItem"

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
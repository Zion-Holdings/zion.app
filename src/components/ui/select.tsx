import React from 'react'

interface SelectProps {
  children: React.ReactNode
  className?: string
}

interface SelectTriggerProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
}

interface SelectValueProps {
  placeholder?: string
  className?: string
}

interface SelectContentProps {
  children: React.ReactNode
  className?: string
}

interface SelectItemProps {
  children: React.ReactNode
  className?: string
  value: string
  onClick?: () => void
}

const Select = ({ children, className = "" }: SelectProps) => (
  <div className={`relative ${className}`}>
    {children}
  </div>
)

const SelectTrigger = ({ children, className = "", onClick, disabled = false }: SelectTriggerProps) => (
  <button
    className={`flex h-10 w-full items-center justify-between rounded-md border border-zion-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-zion-slate-500 focus:outline-none focus:ring-2 focus:ring-zion-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zion-slate-800 dark:bg-zion-slate-950 dark:ring-offset-zion-slate-950 dark:placeholder:text-zion-slate-400 dark:focus-visible:ring-zion-slate-300 ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)

const SelectValue = ({ placeholder, className = "" }: SelectValueProps) => (
  <span className={`block truncate ${className}`}>
    {placeholder}
  </span>
)

const SelectContent = ({ children, className = "" }: SelectContentProps) => (
  <div className={`absolute top-full z-50 mt-1 w-full rounded-md border border-zion-slate-200 bg-white p-1 shadow-md dark:border-zion-slate-800 dark:bg-zion-slate-950 ${className}`}>
    {children}
  </div>
)

const SelectItem = ({ children, className = "", value, onClick }: SelectItemProps) => (
  <div
    className={`relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-zion-slate-100 focus:bg-zion-slate-100 dark:hover:bg-zion-slate-800 dark:focus:bg-zion-slate-800 ${className}`}
    onClick={onClick}
    data-value={value}
  >
    {children}
  </div>
)

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
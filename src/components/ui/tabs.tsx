import React from 'react'

interface TabsProps {
  children: React.ReactNode
  className?: string
}

interface TabsListProps {
  children: React.ReactNode
  className?: string
}

interface TabsTriggerProps {
  children: React.ReactNode
  className?: string
  isActive?: boolean
  onClick?: () => void
}

interface TabsContentProps {
  children: React.ReactNode
  className?: string
  isActive?: boolean
}

const Tabs = ({ children, className = "" }: TabsProps) => (
  <div className={`w-full ${className}`}>
    {children}
  </div>
)

const TabsList = ({ children, className = "" }: TabsListProps) => (
  <div
    className={`inline-flex h-10 items-center justify-center rounded-md bg-zion-slate-100 p-1 text-zion-slate-500 dark:bg-zion-slate-800 dark:text-zion-slate-400 ${className}`}
  >
    {children}
  </div>
)

const TabsTrigger = ({ children, className = "", isActive = false, onClick }: TabsTriggerProps) => (
  <button
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zion-slate-950 dark:focus-visible:ring-zion-slate-300 ${
      isActive
        ? "bg-white text-zion-slate-950 shadow-sm dark:bg-zion-slate-950 dark:text-zion-slate-50"
        : "hover:bg-white/[0.08] hover:text-zion-slate-950 dark:hover:bg-zion-slate-800 dark:hover:text-zion-slate-50"
    } ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
)

const TabsContent = ({ children, className = "", isActive = false }: TabsContentProps) => (
  <div
    className={`mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-slate-950 focus-visible:ring-offset-2 dark:ring-offset-zion-slate-950 dark:focus-visible:ring-zion-slate-300 ${
      isActive ? "block" : "hidden"
    } ${className}`}
  >
    {children}
  </div>
)

export { Tabs, TabsList, TabsTrigger, TabsContent }
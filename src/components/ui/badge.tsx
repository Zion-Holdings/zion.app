import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'zion' | 'success' | 'warning' | 'info'
  className?: string
}

const badgeVariants = {
  default: "bg-zion-slate-900 text-zion-slate-50 hover:bg-zion-slate-900/90 dark:bg-zion-slate-50 dark:text-zion-slate-900 dark:hover:bg-zion-slate-50/90",
  secondary: "bg-zion-slate-100 text-zion-slate-900 hover:bg-zion-slate-100/80 dark:bg-zion-slate-800 dark:text-zion-slate-50 dark:hover:bg-zion-slate-800/80",
  destructive: "bg-red-500 text-zion-slate-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-zion-slate-50 dark:hover:bg-red-900/80",
  outline: "text-zion-slate-950 dark:border-zion-slate-200 dark:text-zion-slate-50",
  zion: "bg-gradient-to-r from-zion-cyan to-zion-purple text-white",
  success: "bg-green-500 text-white",
  warning: "bg-yellow-500 text-white",
  info: "bg-blue-500 text-white",
}

function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zion-slate-950 focus:ring-offset-2 dark:ring-offset-zion-slate-950 dark:focus-visible:ring-zion-slate-300"
  const variantClasses = badgeVariants[variant]
  
  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </div>
  )
}

export { Badge }
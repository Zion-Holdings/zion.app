import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'zion'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const buttonVariants = {
  variant: {
    default: "bg-zion-slate-900 text-zion-slate-50 hover:bg-zion-slate-900/90 dark:bg-zion-slate-50 dark:text-zion-slate-900 dark:hover:bg-zion-slate-50/90",
    destructive: "bg-red-500 text-zion-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-zion-slate-50 dark:hover:bg-red-900/90",
    outline: "border border-zion-slate-200 bg-white hover:bg-zion-slate-100 hover:text-zion-slate-900 dark:border-zion-slate-800 dark:bg-zion-slate-950 dark:hover:bg-zion-slate-800 dark:hover:text-zion-slate-50",
    secondary: "bg-zion-slate-100 text-zion-slate-900 hover:bg-zion-slate-100/80 dark:bg-zion-slate-800 dark:text-zion-slate-50 dark:hover:bg-zion-slate-800/80",
    ghost: "hover:bg-zion-slate-100 hover:text-zion-slate-900 dark:hover:bg-zion-slate-800 dark:hover:text-zion-slate-50",
    link: "text-zion-slate-900 underline-offset-4 hover:underline dark:text-zion-slate-50",
    zion: "bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan/90 hover:to-zion-purple/90",
  },
  size: {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  },
}

function Button({ 
  children, 
  variant = "default", 
  size = "default", 
  className = "",
  onClick,
  disabled = false,
  type = "button"
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zion-slate-950 dark:focus-visible:ring-zion-slate-300"
  const variantClasses = buttonVariants.variant[variant]
  const sizeClasses = buttonVariants.size[size]
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export { Button }
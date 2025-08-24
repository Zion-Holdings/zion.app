import React from 'react'

interface AlertProps {
  children: React.ReactNode
  variant?: 'default' | 'destructive'
  className?: string
}

interface AlertTitleProps {
  children: React.ReactNode
  className?: string
}

interface AlertDescriptionProps {
  children: React.ReactNode
  className?: string
}

const alertVariants = {
  default: "border-zion-slate-200 bg-white text-zion-slate-950 dark:border-zion-slate-800 dark:bg-zion-slate-950 dark:text-zion-slate-50",
  destructive: "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-50",
}

const Alert = ({ children, variant = "default", className = "" }: AlertProps) => (
  <div
    className={`relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-zion-slate-950 dark:[&>svg]:text-zion-slate-50 ${alertVariants[variant]} ${className}`}
  >
    {children}
  </div>
)

const AlertTitle = ({ children, className = "" }: AlertTitleProps) => (
  <h5
    className={`mb-1 font-medium leading-none tracking-tight ${className}`}
  >
    {children}
  </h5>
)

const AlertDescription = ({ children, className = "" }: AlertDescriptionProps) => (
  <div
    className={`text-sm [&_p]:leading-relaxed ${className}`}
  >
    {children}
  </div>
)

export { Alert, AlertTitle, AlertDescription }
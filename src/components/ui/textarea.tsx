import React from 'react'

interface TextareaProps {
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
  disabled?: boolean
  required?: boolean
  name?: string
  id?: string
  rows?: number
}

const Textarea = ({ className = "", rows = 4, ...props }: TextareaProps) => {
  return (
    <textarea
      className={`flex min-h-[80px] w-full rounded-md border border-zion-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-zion-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zion-slate-800 dark:bg-zion-slate-950 dark:ring-offset-zion-slate-950 dark:placeholder:text-zion-slate-400 dark:focus-visible:ring-zion-slate-300 ${className}`}
      rows={rows}
      {...props}
    />
  )
}

export { Textarea }
import React from 'react'

interface InputProps {
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  disabled?: boolean
  required?: boolean
  name?: string
  id?: string
}

const Input = ({ className = "", type = "text", ...props }: InputProps) => {
  return (
    <input
      type={type}
      className={`flex h-10 w-full rounded-md border border-zion-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zion-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zion-slate-800 dark:bg-zion-slate-950 dark:ring-offset-zion-slate-950 dark:placeholder:text-zion-slate-400 dark:focus-visible:ring-zion-slate-300 ${className}`}
      {...props}
    />
  )
}

export { Input }
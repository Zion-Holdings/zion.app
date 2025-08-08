import React, { useState, KeyboardEvent } from 'react'

export type TagInputProps = {
  value: string[]
  onChange: (next: string[]) => void
  placeholder?: string
}

export default function TagInput({ value, onChange, placeholder }: TagInputProps) {
  const [input, setInput] = useState('')

  const addTag = (tag: string) => {
    const cleaned = tag.trim()
    if (!cleaned) return
    if (value.includes(cleaned)) return
    onChange([...value, cleaned])
    setInput('')
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      addTag(input)
    } else if (e.key === 'Backspace' && input === '' && value.length > 0) {
      onChange(value.slice(0, -1))
    }
  }

  return (
    <div className="border rounded px-2 py-1 flex flex-wrap gap-2 bg-white dark:bg-black">
      {value.map((tag) => (
        <span key={tag} className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm">
          {tag}
          <button
            type="button"
            className="text-xs text-gray-500 hover:text-red-500"
            onClick={() => onChange(value.filter((t) => t !== tag))}
          >
            ×
          </button>
        </span>
      ))}
      <input
        className="flex-1 min-w-[160px] outline-none bg-transparent"
        placeholder={placeholder || 'Add and press Enter'}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onKeyDown}
      />
    </div>
  )
}
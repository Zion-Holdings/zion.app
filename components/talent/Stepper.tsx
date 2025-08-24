import React from 'react'

export type StepperProps = {
  steps: string[]
  current: number
}

export default function Stepper({ steps, current }: StepperProps) {
  return (
    <ol className="flex items-center gap-4 overflow-x-auto py-2">
      {steps.map((label, idx) => {
        const isActive = idx === current
        const isDone = idx < current
        return (
          <li key={label} className="flex items-center gap-2">
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border ${
                isActive ? 'bg-blue-600 text-white border-blue-600' : isDone ? 'bg-green-600 text-white border-green-600' : 'border-gray-400 text-gray-600'
              }`}
            >
              {idx + 1}
            </span>
            <span className={isActive ? 'font-semibold' : 'text-gray-500'}>{label}</span>
          </li>
        )
      })}
    </ol>
  )
}
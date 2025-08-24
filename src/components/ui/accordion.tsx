import React from 'react'

interface AccordionProps {
  children: React.ReactNode
  className?: string
}

interface AccordionItemProps {
  children: React.ReactNode
  className?: string
}

interface AccordionTriggerProps {
  children: React.ReactNode
  className?: string
  isOpen?: boolean
  onClick?: () => void
}

interface AccordionContentProps {
  children: React.ReactNode
  className?: string
  isOpen?: boolean
}

const Accordion = ({ children, className = "" }: AccordionProps) => (
  <div className={`w-full ${className}`}>
    {children}
  </div>
)

const AccordionItem = ({ children, className = "" }: AccordionItemProps) => (
  <div className={`border-b ${className}`}>
    {children}
  </div>
)

const AccordionTrigger = ({ children, className = "", isOpen = false, onClick }: AccordionTriggerProps) => (
  <button
    className={`flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 ${className}`}
    onClick={onClick}
  >
    {children}
    <svg
      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
        isOpen ? "rotate-180" : ""
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>
)

const AccordionContent = ({ children, className = "", isOpen = false }: AccordionContentProps) => (
  <div
    className={`overflow-hidden text-sm transition-all ${
      isOpen ? "max-h-96 pb-4" : "max-h-0"
    } ${className}`}
  >
    {children}
  </div>
)

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
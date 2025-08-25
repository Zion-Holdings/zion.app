import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

export interface AccordionProps {
  items: {
    title: string;
    content: React.ReactNode;
    defaultOpen?: boolean;
  }[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>(
    items.map((item, index) => item.defaultOpen ? index : -1).filter(i => i !== -1)
  );

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item, index) => (
        <div key={index} className="border border-zion-blue-light rounded-lg">
          <button
            onClick={() => toggleItem(index)}
            className="flex w-full items-center justify-between p-4 text-left hover:bg-zion-blue-light/10 transition-colors"
          >
            <span className="font-medium text-white">{item.title}</span>
            <ChevronDown 
              className={cn(
                "w-4 h-4 text-zion-slate-light transition-transform",
                openItems.includes(index) && "rotate-180"
              )} 
            />
          </button>
          {openItems.includes(index) && (
            <div className="px-4 pb-4 text-zion-slate-light">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

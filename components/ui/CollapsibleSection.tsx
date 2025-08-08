import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export type CollapsibleSectionProps = {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
};

export default function CollapsibleSection({ title, defaultOpen = false, children }: CollapsibleSectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className="border border-gray-200 dark:border-neutral-800 rounded-lg overflow-hidden">
      <button
        type="button"
        className="w-full flex items-center justify-between px-4 py-3 text-left bg-gray-50 dark:bg-neutral-900"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-base">{title}</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`${open ? 'block' : 'hidden'} p-4 space-y-4`}>{children}</div>
    </section>
  );
}
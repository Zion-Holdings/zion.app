import React, { useEffect, useState } from 'react''';
import { Menu, X } from '@/components/ui/icons''';
import { useIsMobile } from '@/hooks/use-mobile''';
import GlobalErrorBoundary from '@/components/GlobalErrorBoundary''';
export default function MarketplaceSidebar({ children }) {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(!isMobile);

  useEffect(() => {
    setIsOpen(!isMobile)
  }, [isMobile])

  return (
    <GlobalErrorBoundary>
      <div className="relative flex>"
        <button
<<<<<<< HEAD
          onClick={() => setIsOpen(!isOpen)}"
          className=md:hidden p-2 text-white"
          aria-expanded={isOpen}
          aria-label="Toggle marketplace sidebar
        >"
          {isOpen ? <X className=h-6 w-6" /> : <Menu className="h-6 w-6" />}
=======
          onClick={() => setIsOpen(!isOpen)}
          className=md:hidden p-2 text-white""
          aria-expanded={isOpen}
          aria-label="Toggle marketplace sidebar"
        >
          {isOpen ? <X className=h-6 w-6" /> : <Menu className="h-6 w-6" />}"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        </button>
        <aside
          className={`bg-zion-blue-dark border-r border-zion-blue-light overflow-hidden transition-all duration-300 ${isOpen ? 'w-[250px]' : 'w-0'}`}'
          aria-expanded={isOpen}
        >
          {children}
        </aside>
      </div>
    </GlobalErrorBoundary>
  );
}

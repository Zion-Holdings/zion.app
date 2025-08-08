import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export type DrawerProps = {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Drawer({ open, title, onClose, children }: DrawerProps) {
  const startXRef = useRef<number | null>(null);
  const deltaXRef = useRef<number>(0);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  function onTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    startXRef.current = e.touches[0].clientX;
  }
  function onTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    if (startXRef.current == null) return;
    deltaXRef.current = e.touches[0].clientX - startXRef.current;
  }
  function onTouchEnd() {
    if (Math.abs(deltaXRef.current) > 80) onClose();
    startXRef.current = null;
    deltaXRef.current = 0;
  }

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className={`absolute top-0 bottom-0 right-0 w-full md:w-[420px] bg-white dark:bg-neutral-900 shadow-xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="sticky top-0 flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 backdrop-blur">
          <h3 className="font-medium text-base">{title}</h3>
          <button aria-label="Close" onClick={onClose} className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="overflow-y-auto p-4" style={{ height: 'calc(100% - 56px)' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
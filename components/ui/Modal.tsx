import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export type ModalProps = {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ open, title, onClose, children }: ModalProps) {
  const startYRef = useRef<number | null>(null);
  const deltaYRef = useRef<number>(0);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    document.body.classList.toggle('modal-open', open);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('modal-open');
    };
  }, [onClose, open]);

  function onTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    startYRef.current = e.touches[0].clientY;
  }
  function onTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    if (startYRef.current == null) return;
    deltaYRef.current = e.touches[0].clientY - startYRef.current;
  }
  function onTouchEnd() {
    if (deltaYRef.current > 80) onClose();
    startYRef.current = null;
    deltaYRef.current = 0;
  }

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className={`absolute inset-x-0 md:inset-auto md:top-1/2 md:left-1/2 bg-white dark:bg-neutral-900 shadow-xl transition-transform duration-300
        ${open ? 'translate-y-0 md:-translate-y-1/2 md:-translate-x-1/2' : 'translate-y-full md:-translate-y-1/2 md:-translate-x-1/2 md:scale-95'}
      `}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ height: '100%', maxHeight: '100%', width: '100%', maxWidth: '640px' }}
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
import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  unreadCount?: number;
}

export function MobileMenu({ isOpen, onClose, unreadCount = 0 }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-80 bg-background border-l border-zion-slate/20 p-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-zion-slate-light">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-zion-slate/10 transition-colors"
          >
            <svg className="w-6 h-6 text-zion-slate-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="space-y-4">
          <a href="/" className="block py-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
            Home
          </a>
          <a href="/contact" className="block py-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
            Contact
          </a>
          {unreadCount > 0 && (
            <div className="flex items-center justify-between py-3">
              <span className="text-zion-slate-light">Messages</span>
              <span className="bg-zion-cyan text-white text-xs px-2 py-1 rounded-full">
                {unreadCount}
              </span>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
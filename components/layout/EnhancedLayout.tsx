import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';

export type EnhancedLayoutProps = {
  children: React.ReactNode;
};

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  return (
    <div className="min-h-screen relative bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      {/* Futuristic background layer */}
      <div className="futuristic-bg" aria-hidden>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="drift"></div>
        <div className="stars"></div>
      </div>

      {/* Site content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <header>
          <EnhancedNavigation />
        </header>
        <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
        <footer>
          <EnhancedFooter />
        </footer>
      </div>
    </div>
  );
}
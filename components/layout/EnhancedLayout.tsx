import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';

export type EnhancedLayoutProps = {
  children: React.ReactNode;
};

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col bg-transparent text-gray-900 dark:text-gray-100">
      <header>
        <EnhancedNavigation />
      </header>
      <main className="relative z-10 flex-1 container mx-auto px-4 py-6">{children}</main>
      <footer>
        <EnhancedFooter />
      </footer>
    </div>
  );
}
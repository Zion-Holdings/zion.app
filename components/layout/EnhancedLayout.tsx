import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';

export type EnhancedLayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export default function EnhancedLayout({ children, title }: EnhancedLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <header>
        <EnhancedNavigation />
      </header>
      <main className="flex-1 container mx-auto px-4 py-6">
        {title && <h1 className="text-2xl font-semibold mb-4">{title}</h1>}
        {children}
      </main>
      <footer>
        <EnhancedFooter />
      </footer>
    </div>
  );
}
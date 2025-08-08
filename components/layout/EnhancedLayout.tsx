import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
import dynamic from 'next/dynamic';

export type EnhancedLayoutProps = {
  children: React.ReactNode;
};

// Lazy-load chat widget to avoid adding to initial critical path
const ChatWidget = dynamic(() => import('../chat/ChatWidget'), { ssr: false });

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <header>
        <EnhancedNavigation />
      </header>
      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
      <footer>
        <EnhancedFooter />
      </footer>
      {/* Global chat assistant */}
      <ChatWidget />
    </div>
  );
}
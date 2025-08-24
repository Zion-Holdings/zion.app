import React, { ReactNode } from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
import dynamic from 'next/dynamic';

interface EnhancedLayoutProps {
  children: ReactNode;
}

// Lazy-load chat widget to avoid adding to initial critical path
const ChatWidget = dynamic(() => import('../chat/ChatWidget'), { ssr: false });

// Simple animated background component
const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
  </div>
);

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <AnimatedBackground />
      <header className="relative z-10">
        <EnhancedNavigation />
      </header>
      <main className="relative z-10 flex-1">{children}</main>
      <footer className="relative z-10">
        <EnhancedFooter />
      </footer>
      {/* Global chat assistant */}
      <ChatWidget />
    </div>
  );
}
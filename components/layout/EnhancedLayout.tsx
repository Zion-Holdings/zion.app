import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
import AnimatedBackground from '../ui/AnimatedBackground';

export type EnhancedLayoutProps = {
  children: React.ReactNode;
};

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <AnimatedBackground />
      <header className="relative z-10">
        <EnhancedNavigation />
      </header>
      <main className="relative z-10 flex-1 container mx-auto px-4 py-6">{children}</main>
      <footer className="relative z-10">
        <EnhancedFooter />
      </footer>
    </div>
  );
}
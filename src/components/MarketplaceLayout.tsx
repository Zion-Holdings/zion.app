import React from 'react';
import MarketplaceSidebar from './MarketplaceSidebar';

interface MarketplaceLayoutProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}

export function MarketplaceLayout({ children, sidebar }: MarketplaceLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      {sidebar && (
        <MarketplaceSidebar>
          {sidebar}
        </MarketplaceSidebar>
      )}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
} 

import React, { useState } from 'react';
import { AppHeader } from './AppHeader';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';

interface AppLayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
  hideSidebar?: boolean;
}

export function AppLayout({ children, hideFooter = false, hideSidebar = false }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-zion-blue">
      <AppHeader onSidebarToggle={toggleSidebar} />
      
      <div className="flex">
        {/* Sidebar */}
        {!hideSidebar && (
          <Sidebar 
            isOpen={sidebarOpen} 
            onToggle={toggleSidebar} 
          />
        )}
        
        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${!hideSidebar ? 'lg:ml-64' : ''}`}>
          {children}
          {!hideFooter && <Footer />}
        </main>
      </div>
    </div>
  );
}

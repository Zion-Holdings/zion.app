
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { Menu, X } from "lucide-react";

interface AppLayoutProps {
  children?: React.ReactNode;
  hideFooter?: boolean;
  showSidebar?: boolean;
}

export function AppLayout({ children, hideFooter = false, showSidebar = false }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <div className="flex flex-1">
        {/* Sidebar */}
        {showSidebar && (
          <>
            {/* Desktop Sidebar */}
            <div className="hidden lg:block">
              <Sidebar isOpen={true} />
            </div>
            
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
              <div className="lg:hidden fixed inset-0 z-40">
                <div 
                  className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                  onClick={() => setSidebarOpen(false)}
                  aria-hidden="true"
                />
                <div className="relative h-full">
                  <Sidebar isOpen={true} onClose={() => setSidebarOpen(false)} />
                </div>
              </div>
            )}
            
            {/* Mobile Sidebar Toggle */}
            <div className="lg:hidden fixed bottom-4 right-4 z-50">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="bg-zion-purple text-white p-3 rounded-full shadow-lg hover:bg-zion-purple-light transition-colors"
                aria-label="Toggle sidebar"
              >
                {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </>
        )}
        
        {/* Main Content */}
        <main className={`flex-grow ${showSidebar ? 'lg:ml-64' : ''}`}>
          {children ?? <Outlet />}
        </main>
      </div>
      {!hideFooter && <Footer />}
    </div>
  );
}

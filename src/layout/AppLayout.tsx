
import React from "react";
import { Outlet } from "react-router-dom";
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";

interface AppLayoutProps {
  children?: React.ReactNode;
  hideFooter?: boolean;
  showSidebar?: boolean;
}

export function AppLayout({ children, hideFooter = false, showSidebar = false }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <div className="flex flex-1">
        {showSidebar && <Sidebar />}
        <main className="flex-grow">
          {children ?? <Outlet />}
        </main>
      </div>
      {!hideFooter && <Footer />}
    </div>
  );
}

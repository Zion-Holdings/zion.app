
import React from "react";
import { Outlet } from "react-router-dom";
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";
import { MainSidebar } from "@/components/MainSidebar";

interface AppLayoutProps {
  children?: React.ReactNode;
  hideFooter?: boolean;
}

export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <div className="flex flex-grow">
        <MainSidebar />
        <main className="flex-grow">
          {children ?? <Outlet />}
        </main>
      </div>
      {!hideFooter && <Footer />}
    </div>
  );
}

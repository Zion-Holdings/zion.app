
import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";

interface AppLayoutProps {
  children?: React.ReactNode;
  hideFooter?: boolean;
}

export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
  return (
    <ErrorBoundary>
      <div className="flex flex-col min-h-screen bg-background">
        <AppHeader />
        <main className="flex-grow">
          {children ?? <Outlet />}
        </main>
        {!hideFooter && <Footer />}
      </div>
      <Toaster position="top-right" />
    </ErrorBoundary>
  );
}

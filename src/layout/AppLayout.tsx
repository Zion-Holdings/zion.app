
import React from "react";
import { Outlet } from "react-router-dom";
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";

interface AppLayoutProps {
  children?: React.ReactNode;
  hideFooter?: boolean;
}

export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SkipLink />
      <AppHeader />
      <main id="main-content" className="flex-grow">
        {children ?? <Outlet />}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}

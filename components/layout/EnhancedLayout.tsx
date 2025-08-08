import { ReactNode } from "react";
import EnhancedNavigation from "./EnhancedNavigation";
import EnhancedFooter from "./EnhancedFooter";

interface EnhancedLayoutProps {
  children: ReactNode;
}

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:top-2 focus:left-2 bg-black text-white rounded px-3 py-2 shadow"
      >
        Skip to content
      </a>
      <header className="w-full">
        <EnhancedNavigation />
      </header>
      <main
        id="main-content"
        tabIndex={-1}
        className="container mx-auto max-w-screen-xl px-4 py-8 flex-1"
      >
        {children}
      </main>
      <footer className="w-full">
        <EnhancedFooter />
      </footer>
    </div>
  );
}

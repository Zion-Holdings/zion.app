import { ReactNode } from "react";

interface EnhancedLayoutProps {
  children: ReactNode;
}

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}

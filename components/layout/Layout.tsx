import React, { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Main Content */}
      <main className="relative z-10 pt-24 lg:pt-28 min-h-screen">
        {children}
      </main>
      
      {/* Floating Elements */}
      <div className="fixed top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse z-50"></div>
      <div className="fixed top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000 z-50"></div>
      <div className="fixed bottom-40 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-2000 z-50"></div>
      <div className="fixed bottom-20 right-10 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-3000 z-50"></div>
    </div>
  );
}

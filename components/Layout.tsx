import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Sidebar />
      <div className="ml-72 min-h-screen">
        {children}
      </div>
    </div>
  );
}
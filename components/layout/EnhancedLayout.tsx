import React from 'react';

type EnhancedLayoutProps = {
  children?: React.ReactNode;
};

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 border-b">Zion App</header>
      <main className="flex-1 p-4">{children}</main>
      <footer className="p-4 border-t">© {new Date().getFullYear()}</footer>
    </div>
  );
}
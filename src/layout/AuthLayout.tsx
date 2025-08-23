import React, { ReactNode } from 'react';
import { Logo } from '@/components/header/Logo';
import { LanguageSelector } from '@/components/header/LanguageSelector';

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="auth-layout flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 border-b border-zion-purple/20 bg-zion-blue-dark">
        <Logo />
        <LanguageSelector />
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}

export default AuthLayout;

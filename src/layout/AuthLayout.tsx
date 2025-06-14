import React, { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return <div className="auth-layout">{children}</div>;
}

export default AuthLayout;

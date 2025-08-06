import React from 'react';
import Head from 'next/head';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Head>
        <title>Zion - Authentication</title>
        <meta name="description" content="Zion authentication pages" />
      </Head>
      
      <div className="min-h-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

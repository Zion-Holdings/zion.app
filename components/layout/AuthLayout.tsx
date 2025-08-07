import React from "react";
import Head from "next/head";

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title = "Authentication",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        {children}
      </div>
    </>
  );
};

export default AuthLayout;

import React from "react";
import Head from "next/head";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "Zion - AI-Powered Marketplace",
  description = "The first free AI-powered marketplace",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;

import React from "react";
import Head from 'next/head";
import Link from 'next/link";
import { motion } from 'framer-motion";
import ImprovedNavigation from './ImprovedNavigation";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children, 
  title = 'Zion App - AI-Powered Solutions',
  description = 'Advanced AI-powered solutions for modern businesses'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}
    </>
  );
};

export default Layout;
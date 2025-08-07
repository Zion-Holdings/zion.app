import React from 'react';
import Head from 'next/head';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';

interface EnhancedLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const EnhancedLayout: React.FC<EnhancedLayoutProps> = ({
  children,
  title = 'Zion - The First Free AI-Powered Marketplace',
  description = 'Experience the future of commerce with our cutting-edge AI-powered marketplace. Connect with top-tier IT services, AI talents, and innovative products.',
  keywords = 'AI marketplace, IT services, AI talent, technology solutions, cloud computing, machine learning',
  ogImage = '/og-image.jpg'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:image" content={ogImage} />
      </Head>
      <EnhancedNavigation />
      <main>{children}</main>
      <EnhancedFooter />
    </>
  );
};

export default EnhancedLayout;

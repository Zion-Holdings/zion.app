import Head from 'next/head';
import React from 'react';

type SEOHeadProps = {
  children?: React.ReactNode;
};

const SEOHead = ({ children }: SEOHeadProps) => {
  return (
    <Head>
      {children}
    </Head>
  );
};

export default SEOHead;
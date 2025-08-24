import React from 'react';
import Head from 'next/head';

type Props = { children?: React.ReactNode };

const EnhancedLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Zion</title>
      </Head>
      <div className="min-h-screen bg-high-contrast-secondary text-high-contrast">
        <div className="max-w-6xl mx-auto py-8 px-4">
          {children}
        </div>
      </div>
    </>
  );
};

export default EnhancedLayout;
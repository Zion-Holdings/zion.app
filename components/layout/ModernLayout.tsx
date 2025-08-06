import React from 'react'
import Head from 'next/head'
;
interface ModernLayoutProps {;
  children: "React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
"};
const ModernLayout: "React.FC<ModernLayoutProps> = ({;
  children",;
  title = 'Bolt - Modern Web Platform',;
  description = 'A modern web platform built with Next.js and TypeScript',;
  className="
}) => {;
  return (;
    <>;
      <Head>;
        <title>{title}</title>;
        <meta name=description" content="Page description   />
      </Head>
        <meta name="viewport" content=width=device-width, initial-scale=1   />"
        <link rel="icon href=""/favicon.ico   />;
      </Head>
      <div className={`min-h-screen bg-gray-50 ${className}`}>"
        <main className="container mx-auto px-4 py-8>;
          {children};
        </main>;
      </div>;
    <  />;
  );
};

export default ModernLayout; "
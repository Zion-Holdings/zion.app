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
  noIndex?: boolean;
}

const EnhancedLayout: React.FC<EnhancedLayoutProps> = ({
  children,
  title = 'Zion - The First Free AI-Powered Marketplace',
  description = 'Experience the future of commerce with our cutting-edge AI-powered marketplace. Connect with top-tier IT services, AI talents, and innovative products.',
  keywords = 'AI marketplace, IT services, AI talent, technology solutions, cloud computing, machine learning',
  ogImage = '/og-image.jpg',
  noIndex = false
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Robots */}
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion",
              "description": "The First Free AI-Powered Marketplace",
              "url": "https://zion.app",
              "logo": "https://zion.app/logo.png",
              "sameAs": [
                "https://twitter.com/zion",
                "https://linkedin.com/company/zion",
                "https://github.com/zion"
              ]
            })
          }}
        />
      </Head>

      {/* Background Effects */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center opacity-5 pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5 pointer-events-none"></div>
      
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue/30 rounded-full animate-particle-drift"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Navigation */}
      <EnhancedNavigation />

      {/* Main Content */}
      <main className="relative pt-20">
        {children}
      </main>

      {/* Footer */}
      <EnhancedFooter />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

// Scroll to Top Component
const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
};

export default EnhancedLayout;

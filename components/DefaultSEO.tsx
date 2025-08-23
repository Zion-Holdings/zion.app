import React, { useContext, useRef, useEffect } from 'react';
import { SEOContext } from './SEOContext';
import SEO from './SEO';

const DefaultSEO: React.FC = () => {
  const localRenderedRef = useRef(false);
  
  // Default SEO data
  const defaultSEOData = {
    pageTitle: "Zion Tech Group - Revolutionary Technology Solutions",
    pageDescription: "Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions.",
    pageKeywords: ["AI consciousness", "quantum computing", "space technology", "cybersecurity", "autonomous solutions", "Zion Tech Group"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions",
      "url": "https://ziontechgroup.com"
    }
  };

  return (
    <SEOContext.Consumer>
      {(ctx) => {
        if (ctx?.renderedRef?.current) return null;
        if (!localRenderedRef.current) localRenderedRef.current = true;
        
        return <SEO 
          title={defaultSEOData.pageTitle}
          description={defaultSEOData.pageDescription}
          keywords={defaultSEOData.pageKeywords}
          structuredData={defaultSEOData.structuredData}
        />;
      }}
    </SEOContext.Consumer>
  );
};

export default DefaultSEO;
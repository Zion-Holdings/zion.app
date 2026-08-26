'use client';

import React from 'react';

interface EnhancedSkipLinkProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedSkipLink: React.FC<EnhancedSkipLinkProps> = ({ className = '', children }) => {
  return (
    <nav className={`enhancedskiplink-component ${className}`} aria-label="Skip links">
      {children || (
        <>
          <a href="#main-content" className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium">
            Skip to main content
          </a>
          <a href="#site-navigation" className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-44 focus:z-50 focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium">
            Skip to navigation
          </a>
          <a href="#site-footer" className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-80 focus:z-50 focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium">
            Skip to footer
          </a>
        </>
      )}
    </nav>
  );
};

EnhancedSkipLink.displayName = 'EnhancedSkipLink';

export default EnhancedSkipLink;
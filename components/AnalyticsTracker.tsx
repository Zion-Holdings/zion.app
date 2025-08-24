import React, { useEffect } from 'react';

interface AnalyticsTrackerProps {
  pageTitle?: string;
  pagePath?: string;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({
  pageTitle,
  pagePath
}) => {
  useEffect(() => {
    // Basic page view tracking
    if (typeof window !== 'undefined') {
      // Google Analytics 4
      if ((window as any).gtag) {
        (window as any).gtag('config', 'G-XXXXXXXXXX', {
          page_title: pageTitle || document.title,
          page_location: window.location.href,
          page_path: pagePath || window.location.pathname
        });
      }

      // Log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Page View:', { 
          title: pageTitle || document.title, 
          path: pagePath || window.location.pathname, 
          url: window.location.href 
        });
      }
    }
  }, [pageTitle, pagePath]);

  // This component doesn't render anything visible
  return null;
};

export default AnalyticsTracker;
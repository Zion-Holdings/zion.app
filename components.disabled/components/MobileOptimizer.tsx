import React, { useState, useEffect, useRef } from 'react';

interface MobileOptimizerProps {
  children: React.ReactNode;
  showDebugInfo?: boolean;
  enableTouchGestures?: boolean;
  enableMobileLayout?: boolean;
  enablePerformanceMode?: boolean;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({
  children,
  showDebugInfo = false,
  enableTouchGestures = true,
  enableMobileLayout = true,
  enablePerformanceMode = true
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [touchSupport, setTouchSupport] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /mobile|android|iphone|ipad|ipod|blackberry|windows phone/g.test(userAgent);
      const isTabletDevice = /ipad|android(?!.*mobile)|tablet/g.test(userAgent);
      const hasTouchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      setIsMobile(isMobileDevice);
      setIsTablet(isTabletDevice);
      setTouchSupport(hasTouchSupport);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Detect orientation changes
  useEffect(() => {
    const checkOrientation = () => {
      const newOrientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
      setOrientation(newOrientation);
    };

    checkOrientation();
    window.addEventListener('orientationchange', checkOrientation);
    window.addEventListener('resize', checkOrientation);
    
    return () => {
      window.removeEventListener('orientationchange', checkOrientation);
      window.removeEventListener('resize', checkOrientation);
    };
  }, []);

  // Apply mobile optimizations
  useEffect(() => {
    if (isMobile && enableMobileLayout) {
      document.documentElement.classList.add('mobile-optimized');
    }
    
    if (isMobile && enablePerformanceMode) {
      document.documentElement.classList.add('mobile-performance-mode');
    }
  }, [isMobile, enableMobileLayout, enablePerformanceMode]);

  return (
    <>
      {children}
      
      {showDebugInfo && (
        <div className="fixed bottom-4 left-4 bg-black/80 text-white p-4 rounded-lg text-xs z-50">
          <div>Device: {isMobile ? (isTablet ? 'Tablet' : 'Mobile') : 'Desktop'}</div>
          <div>Orientation: {orientation}</div>
          <div>Touch: {touchSupport ? 'Yes' : 'No'}</div>
        </div>
      )}
      
      <style jsx global>{`
        .mobile-optimized * {
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }

        .mobile-performance-mode * {
          animation-duration: 0.3s !important;
          transition-duration: 0.3s !important;
        }

        @media (max-width: 768px) {
          .mobile-optimized button,
          .mobile-optimized a {
            min-height: 44px;
            min-width: 44px;
          }
          
          .mobile-optimized input,
          .mobile-optimized select,
          .mobile-optimized textarea {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default MobileOptimizer;
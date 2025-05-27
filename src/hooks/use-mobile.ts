
import { useState, useEffect } from 'react';

export function useIsMobile() {
  // Avoid using `window` during the initial render to prevent hydration
  // mismatches when server-side rendering. Determine the width after mount.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    if (typeof window !== 'undefined') {
      // Determine the current width on mount
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
    return undefined;
  }, []);

  return isMobile;
}

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

/**
 * Adds basic swipe gesture navigation similar to mobile apps.
 * Swiping from the left edge navigates back if possible.
 */
export function useNavigationGestures() {
  const router = useRouter();
  const startX = useRef(0);
  const startTime = useRef(0);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches[0]) {
        startX.current = e.touches[0].clientX;
        startTime.current = Date.now();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (e.changedTouches[0]) {
        const deltaX = e.changedTouches[0].clientX - startX.current;
        const deltaTime = Date.now() - startTime.current;

        if (startX.current < 30 && deltaX > 50 && deltaTime < 500) {
          router.back();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [router]);
}

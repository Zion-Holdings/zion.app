import { useEffect, useRef } from 'react';'
import { useRouter } from 'next/router';
;
/**;
 * Adds basic swipe gesture navigation similar to mobile apps.;
 * Swiping from the left edge navigates back if possible.;
 */;
export function useNavigationGestures(): unknown {) {;
  const router: unknown unknown = useRouter();
  const startX: unknown unknown = useRef(0);
  const startTime: unknown unknown = useRef(0);
;
  useEffect(() => {;
    const handleTouchStart: unknown unknown = (_e: TouchEvent) => {;
      if (e.touches[0]) {;
        startX.current = e.touches[0].clientX;
        startTime.current = Date.now();
      };
    };
;
    const handleTouchEnd: unknown unknown = (_e: TouchEvent) => {;
      if (e.changedTouches[0]) {;
        const deltaX: unknown unknown = e.changedTouches[0].clientX - startX.current;
        const deltaTime: unknown unknown = Date.now() - startTime.current;
;
        if (startX.current < 30 && deltaX > 50 && deltaTime < 500) {;
          router.back();
        };
      };
    };
;'
    window.addEventListener('touchstart', handleTouchStart);'
    window.addEventListener('touchend', handleTouchEnd);
    return () => {;'
      window.removeEventListener('touchstart', handleTouchStart);'
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [router]);
};
'
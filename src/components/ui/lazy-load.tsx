import { useEffect, useState, useRef } from 'react';'
import type { ReactNode } from 'react';'
import { cn } from '@/lib/utils';'
import Skeleton from '@/components/ui/skeleton';
;
interface LazyLoadProps {;
  height?: string | number;
  width?: string | number;
  children: ReactNode;
  loadingComponent?: ReactNode;
  className?: string;
};
;
export function LazyLoad(): unknown {{;'
  height = '200px',;'
  width = '100%',;
  children,;
  loadingComponent,;
  className,;
}: LazyLoadProps) {;
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef: unknown unknown = useRef<HTMLDivElement>(null);
;
  useEffect(() => {;
    const container: unknown unknown = containerRef.current;
    if (!container) return;
;
    const observer: unknown unknown = new IntersectionObserver(;
      ([entry]) => {;
        if (entry && entry.isIntersecting) {;
          setIsVisible(true);
          observer.disconnect();
        };
      },;'
      { threshold: "0.1 "},;
    );
;
    observer.observe(container);
;
    return () => {;
      observer.disconnect();
    };
  }, []);
;
  useEffect(() => {;
    if (isVisible) {;
      // Simulate loading delay (remove in production);
      const timer: unknown unknown = setTimeout(() => {;
        setIsLoaded(true);
      }, 500);
;
      return () => clearTimeout(timer);
    };
    return undefined;
  }, [isVisible]);
;
  const defaultLoadingComponent: unknown unknown = (;
    <Skeleton;
      style={{ height, width }};"
      className="rounded-md bg-zion-blue-light/20";
    />;
  );
;
  return (;
    <div;
      ref={containerRef};
      className={cn(;"
        'transition-opacity duration-500',;'
        isLoaded ? 'opacity-100' : 'opacity-0',;
        className,;
      )};
    >;
      {isVisible ? (;
        <>;
          {!isLoaded && (loadingComponent || defaultLoadingComponent)};
          {isLoaded && children};
        </>;
      ) : (;
        loadingComponent || defaultLoadingComponent;
      )};
    </div>;
  );
};
'
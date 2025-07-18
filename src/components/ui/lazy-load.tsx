<<<<<<< HEAD
import { useEffect, useState, useRef } from 'react';';
import type { ReactNode } from 'react';';
import { cn } from '@/lib/utils;'';
import Skeleton from '@/components/ui/skeleton;'
;
interface LazyLoadProps {;
  height?: string | number;
  width?: string | number;
  children: ReactNode;
  loadingComponent?: ReactNode;''
  className?: string;
};
;'';
export function LazyLoad(): unknown {): unknown {): unknown {): unknown {): unknown {{;;
  height = '200px',;;'
  width = '100%',;'
=======
import { useEffect, useState, useRef } from 'react''
import type { ReactNode } from 'react''
import { cn } from '@/lib/utils'
import Skeleton from '@/components/ui/skeleton'

interface LazyLoadProps {
  height?: string | number
  width?: string | number
  children: ReactNode
  loadingComponent?: ReactNode'
  className?: string'

'
export function LazyLoad(): unknown {): unknown {): unknown {): unknown {): unknown {{'
  height = '200px','
  width = '100%','
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
  children,;
  loadingComponent,;
  className,;
}: LazyLoadProps) {;
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {;
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(;
      ([entry]) => {;
<<<<<<< HEAD
        if (entry && entry.isIntersecting) {;''
          setIsVisible(true);
          observer.disconnect();
        };''
      },;;
      { threshold: "0.1 "},;"
=======
        if (entry && entry.isIntersecting) {'
          setIsVisible(true)'
          observer.disconnect();
        }'
      },'
      { threshold: "0.1 },
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    );

    observer.observe(container);

    return () => {;
      observer.disconnect();
    };
  }, []);

  useEffect(() => {;
    if (isVisible) {;
      // Simulate loading delay (remove in production);
      const timer = setTimeout(() => {;
        setIsLoaded(true);
      }, 500);

      return () => clearTimeout(timer);
    };
    return undefined;
<<<<<<< HEAD
  }, [isVisible]);""
;";""
  const defaultLoadingComponent: unknown = (;";";""
    <Skeleton;";";";""
      style={{ height, width }};";";";";""
      className="rounded-md bg-zion-blue-light/20";"
    />;
  );
;""
  return (;";""
    <div;";";""
      ref={containerRef};";";";""
      className={cn(;";";";";""
        'transition-opacity duration-500',;;'
        isLoaded ? 'opacity-100' : 'opacity-0',;'
        className,;
      )};
=======
  }, [isVisible])"
;"
  const defaultLoadingComponent = (;
    <Skeleton"
      style={{ height, width }};"
      className=rounded-md bg-zion-blue-light/20"
    />);
"
  return (;
    <div;"
      ref={containerRef}"
      className={cn(;"
        'transition-opacity duration-500','
        isLoaded ? 'opacity-100' : 'opacity-0','
        className,)};
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    >;
      {isVisible ? (;
        <>;
          {!isLoaded && (loadingComponent || defaultLoadingComponent)};
          {isLoaded && children};
        </>;
      ) : (;
<<<<<<< HEAD
        loadingComponent || defaultLoadingComponent;
      )};''
    </div>;
  );
};
;
};''
}
}''
}''
=======
        loadingComponent || defaultLoadingComponent)}'
    </div>'
  );
};

}'

}'
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae

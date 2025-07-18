import { logInfo, logErrorToProduction } from '@/utils/productionLogger;
function hasEnv(): unknown {): unknown {): unknown {): unknown {): unknown {obj: unknown): obj is { env: Record<string, unknown> } {;"
  return typeof obj === 'object' && obj !== null && 'env' in obj;
}'
;
export async function enableDevToolsInStaging(): ;
  // Only attempt to load in development, or if explicitly enabled via NEXT_PUBLIC_DEVTOOLS'
  let isDev = false;
  if (typeof import.meta !== 'undefined' && hasEnv(import.meta)) {'
    const env: import.meta.env as Record<string", unknown>;
    isDev = Boolean(env.DEV) || env.REACT_APP_DEVTOOLS === 'true;
  };
  isDev = isDev || process.env.NEXT_PUBLIC_DEVTOOLS === 'true;
  if (isDev) {'
    try {;
      await import(/* @vite-ignore */ 'react-devtools');
      logInfo('DevTools enabled');
    } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {'
      logErrorToProduction(;
        'Failed to load react-devtools (import is commented out)',;
        { data: "error "},;
      );
    };"
  };";"
};"
;"
export function highlightZeroHeightElements(): ;"
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {;
    window.addEventListener('load', () => {;
      const all = document.querySelectorAll<HTMLElement>('*');
      all.forEach((el) => {'
        if (el.offsetHeight === 0) {;
          el.style.outline = '2px dashed red'
          el.title = 'Zero height – may be broken;
        };
      })'
    });
  };
};
'
};
};
};
}'
};
}
};
}'
}'
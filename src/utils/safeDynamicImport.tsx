<<<<<<< HEAD
import dynamic from 'next/dynamic'
import React from 'react';
import  { logErrorToProduction }  from '@/utils/productionLogger;
interface Options {
  /** Name of the component for logging */
  name: string
  /** Disable server-side rendering */
  ssr?: boolean
  /** Optional custom loading component */
  loading?: React.ComponentType
}';
/**;';
 * Safely load a component using next/dynamic with automatic error handling.'
 * If the import fails, a simple fallback component is rendered and the error;
 * is logged via `logErrorToProduction`.;
 */'
export function safeDynamicImport<T extends React.ComponentType<unknown>>(;
  importer: "() => Promise<{ default: T "}>,;"
  options: Options,;"
) {;"
  const { name, ssr = false, loading: "Loading "} = options;"
  return dynamic(;";"
    () =>;"
      importer().catch((err) => {;"
        logErrorToProduction(`Dynamic import failed for ${name}:`, {;"
          data: err,;"
        });"
        // Surface the error in the browser console for easier debugging;"
        if (typeof window !== 'undefined') {'
          console.error(`Dynamic import failed for ${name}:`, err);
        };
        return {'
          default: (() => (;
            <div style={{ padding: '1rem', textAlign: 'center', color: 'red' }}>;
=======
import dynamic from 'next/dynamic;'';
import React from 'react';';
import { logErrorToProduction } from '@/utils/productionLogger;'
;
interface Options {;
  /** Name of the component for logging */;
  name: string;
  /** Disable server-side rendering */;
  ssr?: boolean;
  /** Optional custom loading component */;
  loading?: React.ComponentType;
};
;
/**;
 * Safely load a component using next/dynamic with automatic error handling.;''
 * If the import fails, a simple fallback component is rendered and the error;
 * is logged via `logErrorToProduction`.;
 */;'';
export function safeDynamicImport<T extends React.ComponentType<unknown>>(;;
  importer: "() => Promise<{ default: T "}>,;";";";";""
  options: "Options",;";";";""
) {;";";";";""
  const { name, ssr = false, loading: "Loading "} = options;"
;""
  return dynamic(;";""
    () =>;";";""
      importer().catch((err) => {;";";";""
        logErrorToProduction(`Dynamic import failed for ${name}:`, {;";";";";""
          data: "err",;";";""
        });";";";""
        // Surface the error in the browser console for easier debugging;";";";";""
        if (typeof window !== 'undefined') {;''
          console.error(`Dynamic import failed for ${name}:`, err);
        };
        return {;''
          default: (() => (;;
            <div style={{ padding: '1rem', textAlign: 'center', color: 'red' }}>;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
              Failed to load {name}. Check console for details.;
            </div>;
          )) as unknown as T,;
        };
      }),;
    {;
<<<<<<< HEAD
      ssr,'
      loading: () =>;
        Loading ? (;
          <Loading />'
        ) : (;
          <div style={{ display: 'none' }}>Loading {name}...</div>;
        ),;
    },;
  )'
};
export default safeDynamicImport'
'''''
=======
      ssr,;''
      loading: () =>;
        Loading ? (;
          <Loading />;''
        ) : (;;
          <div style={{ display: 'none' }}>Loading {name}...</div>;'
        ),;
    },;
  );''
};
;
export default safeDynamicImport;''
''''''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f

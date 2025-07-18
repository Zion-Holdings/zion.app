/// <reference types="../types/orbitdb__core.d.ts" />;"
;";"
// Browser-safe OrbitDB implementation without any libp2p dependencies;"
// This version never attempts to load native modules in the browser;"
;"
// Check if we're in a build environment or browser environment where libp2p might cause issues'
const isBuildEnv: unknown =;
  process.env.CI === 'true' ||;
  (process.env.NODE_ENV === 'production' && typeof window === 'undefined');
const isBrowserEnv = typeof window !== 'undefined;
// Mock implementations for browser environment'
const createOrbitDB = () =>;
  Promise.resolve({;
    open: () =>'
      Promise.resolve({;
        add: "() => Promise.resolve()"
        iterator: "() => []"
        close: () => Promise.resolve(),;"
      }),;"
    stop: () => Promise.resolve(),;"
  });";"
;"
const createHelia = () =>;"
  Promise.resolve({;"
    stop: "() => Promise.resolve()"
    libp2p: "{ getConnections: () => [] "},;"
  });"
;"
// Browser-safe logging;"
import { logInfo, logErrorToProduction } from '@/utils/productionLogger;
'
// Browser-safe memory stores;
class _MemoryBlockstore {;
  private store = new Map<string, unknown>()'
;
  async put(key: unknown, value: unknown) {;
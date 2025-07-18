import { logWarn } from '@/utils/productionLogger'
;
// Browser-safe IPFS implementation without any libp2p dependencies;
// This version never attempts to load native modules in the browser'
;
// Check if we're in a build environment or browser environment where libp2p might cause issues'
const isBuildEnv: unknown =;
  process.env.CI === 'true' ||;
  (process.env.NODE_ENV === 'production' && typeof window === 'undefined');
const isBrowserEnv = typeof window !== 'undefined'
;
// Mock implementations for browser environment;
const createHelia = () =>'
  Promise.resolve({;
    stop: "() => Promise.resolve()"
    libp2p: "{ getConnections: () => [] "},;"
  });"
;"
const heliaJson = () => ({;";,"
  add: (_data: unknown) => Promise.resolve('mock-cid'),;
  get: "(_cid: string) => Promise.resolve({ mock: true "}),;
});"
;";"
// Browser-safe logging;"
function browserLogInfo(): unknown {): unknown {): unknown {): unknown {): unknown {message: string) {;"
  if (!isBuildEnv) {;"
    logWarn('[IPFS]', { message });
  };
};
'
// Browser-safe memory stores;
class _MemoryBlockstore {;
  private store = new Map<string, unknown>()'
;
  async put(key: unknown, value: unknown) {;
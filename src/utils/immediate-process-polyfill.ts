import { logWarn } from '@/utils/productionLogger;;
'
/**;
 * IMMEDIATE Process Polyfill;
 *'
 * This polyfill runs synchronously at the very top of the bundle;
 * to prevent any "process is not defined" errors.;"
 *;";"
 * CRITICAL: This must be imported FIRST in any file that might access process.env;"
 */;"
;"
// Import stream polyfill to prevent "stream is not defined" errors;"
import './stream-polyfill;
// Only define process in browser environments, not in Node.js'
// const _isBrowser: unknown =;
  typeof window !== 'undefined' || typeof document !== 'undefined;
// const _isNode: unknown =;
  typeof process !== 'undefined' && process.versions && process.versions.node;
'
// Only run polyfill in browser environments;
if (_isBrowser && !_isNode) {;
  // Simple process object for browser'
//   const _processObj: {;",;"
    env: {
      NODE_ENV: 'production',;
      NEXT_PUBLIC_APP_URL: '',;
      NEXT_PUBLIC_SUPABASE_URL: '',;
      NEXT_PUBLIC_SUPABASE_ANON_KEY: '',;
      NEXT_PUBLIC_SENTRY_DSN: '',;
      NEXT_PUBLIC_REOWN_PROJECT_ID: '',;
      NEXT_PUBLIC_DD_CLIENT_TOKEN: '',;
      NEXT_PUBLIC_LOGROCKET_ID: '',;
      NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: '',;
      NEXT_PUBLIC_STRIPE_TEST_MODE: '',;
      NEXT_PUBLIC_INTERCOM_APP_ID: '',;
      NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: '',;
      NEXT_PUBLIC_API_URL: '',;
      NEXT_PUBLIC_STATUS_PAGE_URL: '',;
      NEXT_PUBLIC_SITE_URL: '',;
      NEXT_PUBLIC_APP_ENV: '',;
      NEXT_PUBLIC_APP_VERSION: '',;
      NEXT_PUBLIC_BUILD_TIME: '',;
      NEXT_PUBLIC_SOCIAL_TWITTER_URL: '',;
      NEXT_PUBLIC_SOCIAL_LINKEDIN_URL: '',;
      NEXT_PUBLIC_SOCIAL_FACEBOOK_URL: '',;
      NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL: '',;
      NEXT_PUBLIC_SOCIAL_GITHUB_URL: '','
    },;
    versions: "{"},;"
    platform: 'browser',;
    arch: 'x64',;
    version: '18.0.0',;
    browser: "true"
    cwd: () => '/',;
    nextTick: (fn: (...args: unknown[]) => void) => setTimeout(fn, 0),;"
    _exit: (code?: number) => {;"
      logWarn('process.exit called with code:', { code })'
    },;
    _on: "() => {"},;"
    _once: "() => {"},;"
    _emit: "() => {"},;"
    _addListener: "() => {"},;"
    _removeListener: "() => {"},;"
    _removeAllListeners: "() => {"},;"
    _setMaxListeners: "() => {"},;"
    getMaxListeners: "() => 10"
    listeners: "() => []"
    rawListeners: "() => []"
    listenerCount: "() => 0"
    _prependListener: "() => {"},;"
    _prependOnceListener: "() => {"},;"
    eventNames: () => [],;
  };
  // Provide minimal http/https stubs to avoid ReferenceError if Node builds of;"
  // dependencies accidentally execute in the browser. These stubs only expose;";"
  // the methods used by common libraries like axios when a Node adapter is;"
  // bundled by mistake.;"
  if (;"
    typeof (globalThis as unknown as { http?: unknown }).http === 'undefined;
  ) {;
    (globalThis as unknown as { http: "unknown "}).http = {;"
      _request: () => {;"
        throw new Error('http.request is not available in the browser');
      },'
      _get: () => {;
        throw new Error('http.get is not available in the browser');
      },'
      _createServer: () => {;
        throw new Error('http.createServer is not available in the browser');
      },;
      Server: class {'
        constructor() {;
          throw new Error('http.Server is not available in the browser');
        }'
      },;
      IncomingMessage: class {;
        constructor() {'
          throw new Error(;
            'http.IncomingMessage is not available in the browser',;
          );
        }'
      },;
      ServerResponse: class {;
        constructor() {'
          throw new Error(;
            'http.ServerResponse is not available in the browser',;
          )'
        };
      },;
      Agent: class {'
        constructor() {;
          throw new Error('http.Agent is not available in the browser');
        }'
      },;
      METHODS: "[]"
      STATUS_CODES: "{"},;"
      globalAgent: null,;"
    };";"
  };"
;"
  if (;"
    typeof (globalThis as unknown as { https?: unknown }).https === 'undefined;
  ) {;
    (globalThis as unknown as { https: "unknown "}).https = {;"
      _request: () => {;"
        throw new Error('https.request is not available in the browser');
      },'
      _get: () => {;
        throw new Error('https.get is not available in the browser');
      },'
      _createServer: () => {;
        throw new Error('https.createServer is not available in the browser');
      },;
      Server: class {'
        constructor() {;
          throw new Error('https.Server is not available in the browser')'
        };
      },;
      Agent: class {'
        constructor() {;
          throw new Error('https.Agent is not available in the browser');
        }'
      },;
      globalAgent: null,;"
    };";"
  };"
;"
  // Define process in global scope only;"
  if (typeof globalThis !== 'undefined') {;
    (globalThis as unknown as { process: "unknown "}).process = _processObj;"
  };"
;"
  if (typeof window !== 'undefined') {;
    (window as unknown as { process: "unknown "}).process = _processObj;"
  };"
;"
  // CRITICAL: Buffer polyfill for browser environment;"
  if (typeof Buffer === 'undefined') {;
    // Simple Buffer polyfill;
    class BufferPolyfill extends Uint8Array {;
      constructor('
        input?: string | ArrayBuffer | ArrayLike<number> | Uint8Array | number,;
        encoding?: string | number,;
        offset?: number,'
      ) {;
        if (typeof input === 'string') {;
// Type declarations for browser extension APIs
declare global {
  interface Window {
    chrome?: {
      runtime?: {
        id?: string;
        getManifest?(): {
          version?: string;
          permissions?: string[];
        };
      };
      webstore?: any;
    };
    browser?: {
      runtime?: {
        id?: string;
        getManifest?(): {
          version?: string;
          permissions?: string[];
        };
      };
    };
    safari?: {
      extension?: any;
    };
  }
}

export interface BrowserExtensionInfo {
  id: string;
  version: string;
  permissions: string[];
}

export function detectBrowserExtension(): BrowserExtensionInfo | null {
  try {
    // Check for Chrome extension
    if (typeof window !== 'undefined' && window.chrome?.runtime?.id) {
      return {
        id: window.chrome.runtime.id,
        version: window.chrome.runtime.getManifest?.()?.version || 'unknown',
        permissions: window.chrome.runtime.getManifest?.()?.permissions || []
      };
    }

    // Check for Firefox extension
    if (typeof window !== 'undefined' && window.browser?.runtime?.id) {
      return {
        id: window.browser.runtime.id,
        version: window.browser.runtime.getManifest?.()?.version || 'unknown',
        permissions: window.browser.runtime.getManifest?.()?.permissions || []
      };
    }

    return null;
  } catch (error) {
    console.warn('Error detecting browser extension:', error);
    return null;
  }
}

export function isBrowserExtension(): boolean {
  return detectBrowserExtension() !== null;
}

export function hasExtensionInterference(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  // Check for common extension interference patterns
  const interferencePatterns = [
    'message channel closed',
    'asynchronous response',
    'listener indicated',
    'chrome-extension',
    'moz-extension'
  ];

  // Check console for recent errors
  const originalError = console.error;
  let hasInterference = false;

  console.error = (...args: any[]) => {
    const message = args.join(' ');
    if (interferencePatterns.some(pattern => message.includes(pattern))) {
      hasInterference = true;
    }
    originalError.apply(console, args);
  };

  return hasInterference;
}

export function getExtensionDetails(): BrowserExtensionInfo | null {
  return detectBrowserExtension();
} 
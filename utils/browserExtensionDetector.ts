// Type declarations for browser extension APIs
declare global {
  interface Window {
    chrome?: {
      runtime: {
        id: string;
        getManifest(): {
          version?: string;
          permissions?: string[];
        };
      };
    };
    browser?: {
      runtime: {
        id: string;
        getManifest(): {
          version?: string;
          permissions?: string[];
        };
      };
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
      const manifest = window.chrome.runtime.getManifest();
      return {
        id: window.chrome.runtime.id,
        version: manifest.version || 'unknown',
        permissions: manifest.permissions || []
      };
    }
    
    // Check for Firefox extension
    if (typeof window !== 'undefined' && window.browser?.runtime?.id) {
      const manifest = window.browser.runtime.getManifest();
      return {
        id: window.browser.runtime.id,
        version: manifest.version || 'unknown',
        permissions: manifest.permissions || []
      };
    }
    
    return null;
  } catch (error) {
    console.warn('Error detecting browser extension:', error);
    return null;
  }
}

export function isBrowserExtension(): boolean {
  try {
    if (typeof window === 'undefined') return false;
    
    // Check for Chrome extension
    if (window.chrome?.runtime?.id) {
      return true;
    }
    
    // Check for Firefox extension
    if (window.browser?.runtime?.id) {
      return true;
    }
    
    // Check for extension-related URLs
    if (window.location.protocol === 'chrome-extension:' || 
        window.location.protocol === 'moz-extension:') {
      return true;
    }
    
    return false;
  } catch (error) {
    console.warn('Error checking browser extension:', error);
    return false;
  }
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
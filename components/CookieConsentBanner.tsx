import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, X, Settings, Check, AlertTriangle, 
  Info, Cookie, Lock, Eye, EyeOff
} from 'lucide-react';

// Type declarations for global window properties
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

interface CookieConsentBannerProps {
  enabled?: boolean;
  showUI?: boolean;
}

const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({
  enabled = true,
  showUI = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    preferences: false
  });
  const [hasConsented, setHasConsented] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Performance optimization: Check consent status
  useEffect(() => {
    if (!enabled) return;

    const consentStatus = localStorage.getItem('cookie-consent');
    if (consentStatus) {
      try {
        const parsed = JSON.parse(consentStatus);
        setHasConsented(true);
        setPreferences(parsed.preferences);
        applyCookiePreferences(parsed.preferences);
      } catch (error) {
        console.warn('Failed to parse cookie consent:', error);
        showBanner();
      }
    } else {
      showBanner();
    }
  }, [enabled]);

  // Performance optimization: Show banner with delay
  const showBanner = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Show after 2 seconds
  }, []);

  // Performance optimization: Apply cookie preferences
  const applyCookiePreferences = useCallback((prefs: CookiePreferences) => {
    if (!enabled) return;

    // Apply analytics tracking
    if (prefs.analytics) {
      // Enable Google Analytics, etc.
      window.gtag = window.gtag || function() { (window.gtag as any).q = (window.gtag as any).q || []; (window.gtag as any).q.push(arguments); };
    } else {
      // Disable analytics
      window.gtag = undefined;
    }

    // Apply marketing cookies
    if (prefs.marketing) {
      // Enable marketing tracking
      window.fbq = window.fbq || function() { (window.fbq as any).q = (window.fbq as any).q || []; (window.fbq as any).q.push(arguments); };
    } else {
      // Disable marketing
      window.fbq = undefined;
    }

    // Apply preference cookies
    if (prefs.preferences) {
      // Enable preference storage
      localStorage.setItem('preferences-enabled', 'true');
    } else {
      // Disable preference storage
      localStorage.removeItem('preferences-enabled');
    }
  }, [enabled]);

  // Performance optimization: Accept all cookies
  const acceptAll = useCallback(() => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };

    setPreferences(allAccepted);
    setHasConsented(true);
    setIsVisible(false);
    setIsSettingsOpen(false);

    // Save consent
    const consentData = {
      timestamp: new Date().toISOString(),
      preferences: allAccepted,
      version: '1.0'
    };

    localStorage.setItem('cookie-consent', JSON.stringify(consentData));
    applyCookiePreferences(allAccepted);
  }, [applyCookiePreferences]);

  // Performance optimization: Accept necessary only
  const acceptNecessary = useCallback(() => {
    const necessaryOnly: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    };

    setPreferences(necessaryOnly);
    setHasConsented(true);
    setIsVisible(false);
    setIsSettingsOpen(false);

    // Save consent
    const consentData = {
      timestamp: new Date().toISOString(),
      preferences: necessaryOnly,
      version: '1.0'
    };

    localStorage.setItem('cookie-consent', JSON.stringify(consentData));
    applyCookiePreferences(necessaryOnly);
  }, [applyCookiePreferences]);

  // Performance optimization: Save custom preferences
  const saveCustomPreferences = useCallback(() => {
    setHasConsented(true);
    setIsVisible(false);
    setIsSettingsOpen(false);

    // Save consent
    const consentData = {
      timestamp: new Date().toISOString(),
      preferences,
      version: '1.0'
    };

    localStorage.setItem('cookie-consent', JSON.stringify(consentData));
    applyCookiePreferences(preferences);
  }, [preferences, applyCookiePreferences]);

  // Performance optimization: Toggle preference
  const togglePreference = useCallback((key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Cannot disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  }, []);

  // Performance optimization: Update preferences
  const updatePreferences = useCallback((key: keyof CookiePreferences, value: boolean) => {
    if (key === 'necessary') return; // Cannot disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  if (!enabled || !showUI || hasConsented || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-t border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
      >
        <div className="max-w-7xl mx-auto p-4 lg:p-6">
          {!isSettingsOpen ? (
            /* Main Banner */
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex items-start space-x-3 flex-1">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    We value your privacy
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                    By clicking "Accept All", you consent to our use of cookies. 
                    <button
                      onClick={() => setIsSettingsOpen(true)}
                      className="text-cyan-400 hover:text-cyan-300 underline ml-1"
                    >
                      Learn more
                    </button>
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <button
                  onClick={acceptNecessary}
                  className="px-6 py-3 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
                >
                  Necessary Only
                </button>
                <button
                  onClick={() => setIsSettingsOpen(true)}
                  className="px-6 py-3 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
                >
                  <Settings className="w-4 h-4 inline mr-2" />
                  Customize
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            /* Settings Panel */
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-cyan-400" />
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setIsSettingsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close settings"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Necessary Cookies */}
                <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Lock className="w-4 h-4 text-green-400" />
                      <span className="font-medium text-white">Necessary</span>
                    </div>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">
                      Always Active
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">
                    Essential cookies required for the website to function properly. Cannot be disabled.
                  </p>
                  <div className="text-xs text-gray-500">
                    Examples: Authentication, security, basic functionality
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-blue-400" />
                      <span className="font-medium text-white">Analytics</span>
                    </div>
                    <button
                      onClick={() => togglePreference('analytics')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.analytics ? 'bg-blue-500' : 'bg-gray-600'
                      }`}
                      role="switch"
                      aria-checked={preferences.analytics}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.analytics ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">
                    Help us understand how visitors interact with our website.
                  </p>
                  <div className="text-xs text-gray-500">
                    Examples: Page views, user behavior, performance metrics
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Cookie className="w-4 h-4 text-purple-400" />
                      <span className="font-medium text-white">Marketing</span>
                    </div>
                    <button
                      onClick={() => togglePreference('marketing')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.marketing ? 'bg-purple-500' : 'bg-gray-600'
                      }`}
                      role="switch"
                      aria-checked={preferences.marketing}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.marketing ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">
                    Used to deliver personalized advertisements and content.
                  </p>
                  <div className="text-xs text-gray-500">
                    Examples: Ad targeting, social media integration
                  </div>
                </div>

                {/* Preferences Cookies */}
                <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Settings className="w-4 h-4 text-cyan-400" />
                      <span className="font-medium text-white">Preferences</span>
                    </div>
                    <button
                      onClick={() => togglePreference('preferences')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.preferences ? 'bg-cyan-500' : 'bg-gray-600'
                      }`}
                      role="switch"
                      aria-checked={preferences.preferences}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.preferences ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">
                    Store your preferences and settings for a better experience.
                  </p>
                  <div className="text-xs text-gray-500">
                    Examples: Language, theme, accessibility settings
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-700/50">
                <button
                  onClick={() => setIsSettingsOpen(false)}
                  className="px-6 py-3 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
                >
                  Back
                </button>
                <button
                  onClick={saveCustomPreferences}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
                >
                  <Check className="w-4 h-4 inline mr-2" />
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsentBanner;
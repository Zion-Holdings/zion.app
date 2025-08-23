import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Settings, Shield, Cookie, Info } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
      } catch (error) {
        console.warn('Failed to load cookie preferences:', error);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    
    setPreferences(allAccepted);
    savePreferences(allAccepted);
    setIsVisible(false);
    
    // Announce to screen readers
    announceToScreenReader('All cookies accepted');
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    
    setPreferences(necessaryOnly);
    savePreferences(necessaryOnly);
    setIsVisible(false);
    
    // Announce to screen readers
    announceToScreenReader('Only necessary cookies accepted');
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
    setShowSettings(false);
    setIsVisible(false);
    
    // Announce to screen readers
    announceToScreenReader('Cookie preferences saved');
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs));
    
    // Apply preferences
    if (prefs.analytics) {
      enableAnalytics();
    } else {
      disableAnalytics();
    }
    
    if (prefs.marketing) {
      enableMarketing();
    } else {
      disableMarketing();
    }
    
    if (prefs.functional) {
      enableFunctional();
    } else {
      disableFunctional();
    }
  };

  const enableAnalytics = () => {
    // Enable Google Analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const disableAnalytics = () => {
    // Disable Google Analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
  };

  const enableMarketing = () => {
    // Enable marketing cookies
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('consent', 'update', {
        ad_storage: 'granted'
      });
    }
  };

  const disableMarketing = () => {
    // Disable marketing cookies
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('consent', 'update', {
        ad_storage: 'denied'
      });
    }
  };

  const enableFunctional = () => {
    // Enable functional cookies
    console.log('Functional cookies enabled');
  };

  const disableFunctional = () => {
    // Disable functional cookies
    console.log('Functional cookies disabled');
  };

  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  const cookieTypes = [
    {
      key: 'necessary' as keyof CookiePreferences,
      title: 'Necessary Cookies',
      description: 'Essential for the website to function properly. These cannot be disabled.',
      icon: Shield,
      required: true
    },
    {
      key: 'analytics' as keyof CookiePreferences,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      icon: Info,
      required: false
    },
    {
      key: 'marketing' as keyof CookiePreferences,
      title: 'Marketing Cookies',
      description: 'Used to track visitors across websites to display relevant and engaging advertisements.',
      icon: Cookie,
      required: false
    },
    {
      key: 'functional' as keyof CookiePreferences,
      title: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization, such as live chat support and language preferences.',
      icon: Settings,
      required: false
    }
  ];

  if (!isVisible) return null;

  return (
    <>
      {/* Main Banner */}
      <AnimatePresence>
        {isVisible && !showSettings && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-2xl"
            role="banner"
            aria-labelledby="cookie-banner-title"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <Cookie className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <h2 id="cookie-banner-title" className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        We use cookies to enhance your experience
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl">
                        We use cookies and similar technologies to help personalize content, tailor and measure ads, 
                        and provide a better experience. By clicking "Accept All", you consent to our use of cookies. 
                        You can customize your preferences in our cookie settings.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <a 
                          href="/privacy" 
                          className="text-cyan-600 dark:text-cyan-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Privacy Policy
                        </a>
                        <span>•</span>
                        <a 
                          href="/cookies" 
                          className="text-cyan-600 dark:text-cyan-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Cookie Policy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                    aria-label="Customize cookie preferences"
                  >
                    <span className="flex items-center gap-2">
                      <Settings className="w-4 h-4" />
                      Customize
                    </span>
                  </button>
                  
                  <button
                    onClick={handleAcceptNecessary}
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                    aria-label="Accept only necessary cookies"
                  >
                    Necessary Only
                  </button>
                  
                  <button
                    onClick={handleAcceptAll}
                    className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 shadow-lg hover:shadow-xl"
                    aria-label="Accept all cookies"
                  >
                    Accept All
                  </button>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setIsVisible(false)}
                  className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-full"
                  aria-label="Close cookie banner"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <h2 id="cookie-settings-title" className="text-xl font-bold flex items-center gap-3">
                    <Settings className="w-6 h-6" />
                    Cookie Preferences
                  </h2>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Close cookie settings"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="mt-2 text-cyan-100">
                  Customize your cookie preferences to control how we use your data.
                </p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {cookieTypes.map((cookieType) => (
                  <div key={cookieType.key} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <cookieType.icon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {cookieType.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            {cookieType.required && (
                              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                Required
                              </span>
                            )}
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={preferences[cookieType.key]}
                                onChange={(e) => {
                                  if (!cookieType.required) {
                                    setPreferences(prev => ({
                                      ...prev,
                                      [cookieType.key]: e.target.checked
                                    }));
                                  }
                                }}
                                disabled={cookieType.required}
                                className="sr-only"
                                aria-label={`Enable ${cookieType.title}`}
                              />
                              <div className={`
                                w-11 h-6 rounded-full transition-colors duration-200 ease-in-out
                                ${cookieType.required || preferences[cookieType.key] 
                                  ? 'bg-cyan-600' 
                                  : 'bg-gray-300 dark:bg-gray-600'
                                }
                                ${cookieType.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                              `}>
                                <div className={`
                                  w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out transform
                                  ${preferences[cookieType.key] ? 'translate-x-5' : 'translate-x-0'}
                                `} />
                              </div>
                            </label>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {cookieType.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Information */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-blue-800 dark:text-blue-200">
                      <p className="font-medium mb-1">Your privacy matters to us</p>
                      <p>
                        You can change your cookie preferences at any time. Your choices will be remembered 
                        and you can update them through our privacy settings or by clearing your browser cookies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-gray-50 dark:bg-gray-800 p-6 rounded-b-2xl border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <button
                    onClick={() => setShowSettings(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 shadow-lg hover:shadow-xl"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieConsentBanner;
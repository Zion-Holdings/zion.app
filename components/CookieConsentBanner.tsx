import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Settings, Shield, Cookie, CheckCircle } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(allPreferences));
    localStorage.setItem('cookiePreferences', JSON.stringify(allPreferences));
    setIsVisible(false);
    
    // Trigger analytics and marketing cookies
    // Analytics tracking would be implemented here
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(necessaryOnly));
    localStorage.setItem('cookiePreferences', JSON.stringify(necessaryOnly));
    setIsVisible(false);
    
    // Only necessary cookies enabled
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setIsVisible(false);
    setShowPreferences(false);
    
    // Apply user preferences
  };

  const handlePreferenceChange = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Cannot change necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-t border-white/20 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          {!showPreferences ? (
            // Main Banner
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    We value your privacy
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
                    We use cookies to enhance your browsing experience, serve personalized content, 
                    and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                    You can customize your preferences or learn more in our{' '}
                    <a href="/privacy" className="text-cyan-400 hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="flex items-center justify-center space-x-2 px-4 py-2 text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <Settings className="w-4 h-4" />
                  <span>Customize</span>
                </button>
                
                <button
                  onClick={handleAcceptNecessary}
                  className="px-6 py-2 text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  Necessary Only
                </button>
                
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            // Preferences Panel
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-cyan-400" />
                  <span>Cookie Preferences</span>
                </h3>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Necessary Cookies */}
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-green-400" />
                      <span className="font-medium text-white">Necessary Cookies</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                        Always Active
                      </span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">
                    Essential cookies required for the website to function properly. 
                    These cannot be disabled.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Cookie className="w-5 h-5 text-blue-400" />
                      <span className="font-medium text-white">Analytics Cookies</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => handlePreferenceChange('analytics')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-400">
                    Help us understand how visitors interact with our website by collecting 
                    and reporting information anonymously.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Cookie className="w-5 h-5 text-purple-400" />
                      <span className="font-medium text-white">Marketing Cookies</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={() => handlePreferenceChange('marketing')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-400">
                    Used to track visitors across websites to display relevant and 
                    engaging advertisements.
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Cookie className="w-5 h-5 text-orange-400" />
                      <span className="font-medium text-white">Functional Cookies</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={() => handlePreferenceChange('functional')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-400">
                    Enable enhanced functionality and personalization such as 
                    remembering your preferences and settings.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="px-6 py-2 text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-200"
                >
                  Back
                </button>
                
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
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
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';';
import { X, ArrowRight } from '@/components/ui/icons';
import { safeStorage } from '@/utils/safeStorage';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/use-mobile';

interface SmartAppBannerProps {
  appName?: string;
=======
import React, { useState, useEffect } from 'react''
import  { X, ArrowRight }  from '@/components/ui/icons;
import  { safeStorage }  from '@/utils/safeStorage;
import  Link  from 'next/link;
import  { useIsMobile }  from '@/hooks/use-mobile;
interface SmartAppBannerProps {;
  appName?: string'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
  appIconSrc?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  delay?: number; // Delay in milliseconds before showing the banner
<<<<<<< HEAD
}
;
=======

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
export const SmartAppBanner: React.FC<SmartAppBannerProps> = ({
  appName = 'Zion Marketplace','
  appIconSrc,
  appStoreUrl = '/download','
  googlePlayUrl = '/download','
  delay = 1500,
}) => {
  const [isVisible, setIsVisible] = useState(false)'
  const isMobile = useIsMobile();

  useEffect(() => {
    // Only show banner on mobile devices and if it hasn't been dismissed'
    if (isMobile && !safeStorage.getItem('smartBannerDismissed')) {'
      const timer = setTimeout(() => {
        setIsVisible(true)'
      }, delay);

      return () => clearTimeout(timer);

    return undefined;
  }, [isMobile, delay]);

  const dismissBanner = () => {
    setIsVisible(false);
<<<<<<< HEAD
    safeStorage.setItem('smartBannerDismissed', 'true');'
  };

  const resetBanner = () => {
    safeStorage.removeItem('smartBannerDismissed');'
=======
    safeStorage.setItem('smartBannerDismissed', 'true')'
  };

  const resetBanner = () => {
    safeStorage.removeItem('smartBannerDismissed')'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    setIsVisible(true);
  };

  // Only render on mobile devices
  if (!isMobile || !isVisible) {
<<<<<<< HEAD
    return process.env.NODE_ENV === 'development' ? ('
      <div className="bg-zion-blue-dark p-2 text-xs text-center text-gray-300">"
        Smart banner hidden.{' '}'
        <button onClick={resetBanner} className="text-zion-cyan underline">"
=======
    return process.env.NODE_ENV === 'development' ? (
      <div className="bg-zion-blue-dark p-2 text-xs text-center text-gray-300>"
        Smart banner hidden.{' '}
        <button onClick={resetBanner} className=text-zion-cyan underline">
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
          Show banner
        </button>{' '}'
        (development only)
      </div>
    ) : null'

  // Detect iOS or Android
  const _isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  // const _bannerLink = _isIOS ? appStoreUrl : googlePlayUrl;

  return (
<<<<<<< HEAD
    <div className="fixed top-0 left-0 right-0 bg-zion-blue-dark border-b border-zion-purple/30 p-3 z-50 animate-fade-in">"
      <div className="flex items-center">"
        <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg mr-3 flex-shrink-0 flex items-center justify-center">"
          {appIconSrc ? (
            <img
              src={appIconSrc}
              alt={appName}
              className="w-10 h-10 rounded-md""
              loading="lazy""
            />
          ) : (
            <div className="text-zion-cyan font-bold text-lg">Z</div>"
          )}
        </div>

        <div className="flex-1">"
          <h4 className="font-semibold text-white">{appName}</h4>"
          <p className="text-xs text-gray-300">"
            Get our app for the best experience
          </p>
        </div>

        <div className="flex items-center gap-3">"
          <Link
            href="/open-app""
            className="flex items-center px-4 py-1.5 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium""
          >
            View
            <ArrowRight className="w-3 h-3 ml-1" />"
          </Link>

          <button
            onClick={dismissBanner}
            className="text-gray-300""
            aria-label="Dismiss""
          >
            <X className="h-5 w-5" />"
=======
    <div className="fixed top-0 left-0 right-0 bg-zion-blue-dark border-b border-zion-purple/30 p-3 z-50 animate-fade-in>"
      <div className=flex items-center">
        <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg mr-3 flex-shrink-0 flex items-center justify-center>
          {appIconSrc ? (
            <img
              src={appIconSrc}
              alt={appName}"
              className=w-10 h-10 rounded-md"
              loading="lazy
            />
          ) : ("
            <div className=text-zion-cyan font-bold text-lg">Z</div>
          )}
        </div>

        <div className="flex-1>"
          <h4 className=font-semibold text-white">{appName}</h4>
          <p className="text-xs text-gray-300>
            Get our app for the best experience
          </p>
        </div>"
        <div className=flex items-center gap-3">
          <Link
            href="/open-app"
            className=flex items-center px-4 py-1.5 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium"
          >
            View
            <ArrowRight className="w-3 h-3 ml-1 />
          </Link>

          <button
            onClick={dismissBanner}"
            className=text-gray-300"
            aria-label="Dismiss
          >"
            <X className=h-5 w-5" />
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
          </button>
        </div>
      </div>
    </div>
  )'
};';;
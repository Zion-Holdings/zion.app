
import React from "react";
import { QrCode } from 'lucide-react';

import { AppStoreButtons } from "./AppStoreButtons";

export const QrCodeDownload: React.FC = () => {
  // App store links - these would come from environment variables in production
  const appStoreUrl = "#"; // Replace with actual App Store URL
  const googlePlayUrl = "#"; // Replace with actual Google Play URL

  return (
    <section className="py-16 bg-gradient-to-b from-zion-blue to-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Download <span className="text-zion-cyan">Zion</span> to Your Device
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Scan the QR code with your phone camera to download the app instantly, or use the buttons below to get it from your app store of choice.
              </p>
              
              <AppStoreButtons 
                className="mb-8" 
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />
              
              <div className="flex gap-2 items-center text-sm text-gray-400">
                <span className="block h-1 w-1 rounded-full bg-zion-purple"></span>
                <span>Compatible with iOS 14+ and Android 8.0+</span>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <div className="bg-white dark:bg-zion-blue-dark p-6 rounded-xl shadow-lg">
                <div className="w-48 h-48 flex items-center justify-center bg-white dark:bg-zion-blue rounded-lg">
                  <QrCode className="w-full h-full p-4" />
                  {/* This would be replaced with an actual QR code in production */}
                </div>
                <p className="text-center text-sm mt-2 text-zion-blue-dark font-medium">
                  Scan to download
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


import React from 'react';
import { Link } from 'react-router-dom';
import { useWhitelabel } from '@/context/WhitelabelContext';

interface LogoProps {
  customLogo?: string;
  customColor?: string;
}

export function Logo({ customLogo, customColor }: LogoProps) {
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel();
  
  // Use the white-label logo if available and no specific customLogo is provided
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null);
  // Use the white-label color if available and no specific customColor is provided
  const colorToUse = customColor || (isWhitelabel ? primaryColor : undefined);
  
  if (logoToUse) {
    return (
      <Link to="/" className="flex items-center">
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" />
      </Link>
    );
  }
  
  return (
    <Link to="/" className="flex items-center group">
      <div className="flex items-center space-x-2">
        {/* Icon */}
        <div className="relative">
          <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan via-zion-purple-light to-zion-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <span className="text-white font-bold text-sm">Z</span>
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-zion-cyan rounded-full animate-pulse"></div>
        </div>
        
        {/* Text */}
        <div className="flex flex-col">
          <div className="text-xl font-bold text-white leading-tight">
            {isWhitelabel ? brandName : 'ZION'}
          </div>
          <div className="text-xs text-zion-cyan font-medium leading-tight">
            TECH GROUP
          </div>
        </div>
      </div>
    </Link>
  );
}

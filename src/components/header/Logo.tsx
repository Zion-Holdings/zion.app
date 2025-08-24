
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
    <Link to="/" className="flex items-center">
      <div className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent" style={colorToUse ? { color: colorToUse } : {}}>
        {isWhitelabel ? brandName : 'ZION'} <span className="text-zion-cyan">TECH</span>
      </div>
    </Link>
  );
}

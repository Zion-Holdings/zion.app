
import React from 'react';
import Link from 'next/link';
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
      <Link href="/" className="flex items-center">
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" />
      </Link>
    );
  }
  
  return (
    <Link href="/" className="flex items-center">
      <img src="/logos/zion-logo.png" alt="Zion Logo" className="h-8" />
    </Link>
  );
}

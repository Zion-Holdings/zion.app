
import React from 'react';
import Link from 'next/link';
import { useWhitelabel } from '@/context/WhitelabelContext';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

interface LogoProps {
  customLogo?: string;
  
}

export function Logo({ customLogo }: LogoProps) {
  const { isWhitelabel, logoUrl, brandName } = useWhitelabel();
  
  // Use the white-label logo if available and no specific customLogo is provided
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null);
  // Use the white-label color if available and no specific _customColor is provided
  // const colorToUse = _customColor || (isWhitelabel ? primaryColor : undefined);
  
  if (logoToUse) {
    return (
      <Link href="/" className="flex items-center">
        <OptimizedImage src={logoToUse} alt={`${brandName} Logo`} className="h-8" width={32} height={32} />
      </Link>
    );
  }
  
  return (
    <Link href="/" className="flex items-center">
      <OptimizedImage src="/logos/zion-logo.png" alt="Zion Logo" className="h-8" width={32} height={32} />
    </Link>
  );
}
